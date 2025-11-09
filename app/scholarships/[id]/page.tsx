"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calendar, FileText, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export interface Program {
  id: number;
  title: string;
  description_snippet: string;
  full_description_html: string;
  eligibility: string;
  requirements: string;
  application_process: string;
  important_information: string;
  enquiries: string;
  deadline: string;
  image_url: string;
  attachment_url: string;
  created_at?: string;
}

interface ScholarPageProps {
  params: Promise<{ id: string }>; // params is now a Promise
}

export default function ProgramDetailPage({ params }: ScholarPageProps) {
  const [scholarInfo, setScholarInfo] = useState<Program[] | null>(null);
  const [scholarId, setScholarId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // unwrap params
  useEffect(() => {
    async function unwrapParams() {
      const resolvedParams = await params;
      setScholarId(Number(resolvedParams.id));
    }
    unwrapParams();
  }, [params]);

  // fetch training info
  useEffect(() => {
    if (scholarId === null) return;

    async function fetchTrainings() {
      try {
        const res = await fetch(
          "https://innovation.muhoko.org/api/scholarships"
        );
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setScholarInfo(data.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchTrainings();
  }, [scholarId]);

  if (loading)
    return (
      <section className="p-4 min-h-[400px] flex justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-500"></div>
      </section>
    );

  if (error) return <p className="text-red-500">Error: {error}</p>;

  const scholarItem = scholarInfo?.find((e) => e.id === scholarId) ?? null;

  if (!scholarItem) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="relative h-64 w-full overflow-hidden md:h-96">
        <Image
          src={scholarItem.image_url || "/placeholder.svg"}
          alt={scholarItem.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0  bg-gradient-to-t from-background/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/scholarships"
              className="mb-4 inline-flex items-center gap-2 text-sm  hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Scholarships
            </Link>
            <h1 className="text-4xl font-bold text-foreground md:text-5xl">
              {scholarItem.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl p-6 md:p-12">
        <div className="mb-8 flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-5 w-5" />
            <span>
              Deadline: {new Date(scholarItem.deadline).toLocaleDateString()}
            </span>
          </div>
          {scholarItem.attachment_url && (
            <Button variant="outline" asChild>
              <a
                href={scholarItem.attachment_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="mr-2 h-4 w-4" />
                Download Attachment
              </a>
            </Button>
          )}
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-semibold">Description</h2>
            </CardHeader>
            <CardContent>
              <div
                className="prose prose-sm max-w-none text-foreground text-justify"
                dangerouslySetInnerHTML={{
                  __html: scholarItem.full_description_html,
                }}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="text-2xl font-semibold">Eligibility</h2>
            </CardHeader>
            <CardContent>
              <div
                className="prose prose-sm max-w-none text-foreground text-justify"
                dangerouslySetInnerHTML={{ __html: scholarItem.eligibility }}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="text-2xl font-semibold">Requirements</h2>
            </CardHeader>
            <CardContent>
              <div
                className="prose prose-sm max-w-none text-foreground text-justify"
                dangerouslySetInnerHTML={{ __html: scholarItem.requirements }}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="text-2xl font-semibold">Application Process</h2>
            </CardHeader>
            <CardContent>
              <div
                className="prose prose-sm max-w-none text-foreground text-justify"
                dangerouslySetInnerHTML={{
                  __html: scholarItem.application_process,
                }}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="text-2xl font-semibold">Important Information</h2>
            </CardHeader>
            <CardContent>
              <div
                className="prose text-justify prose-sm max-w-none text-foreground"
                dangerouslySetInnerHTML={{
                  __html: scholarItem.important_information,
                }}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="text-2xl font-semibold">Enquiries</h2>
            </CardHeader>
            <CardContent>
              <div
                className="prose text-justify prose-sm max-w-none text-foreground"
                dangerouslySetInnerHTML={{ __html: scholarItem.enquiries }}
              />
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 flex justify-center">
          <motion.a
            href="https://esaspetrofund.org/login"
            target="_blank"
            className="bg-primary flex gap-x-4 items-center justify-center text-white my-5 px-8 xl:px-10 py-2.5 rounded-md hover:bg-accent transition-colors duration-300 font-medium shadow-md text-[15px]"
          >
            <p>Apply Now</p>
          </motion.a>
        </div>
      </div>
    </main>
  );
}
