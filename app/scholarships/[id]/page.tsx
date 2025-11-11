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
      {/* Back Navigation */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <Link href="/scholarships">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Scholarships
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Section with Image */}
      <div className="relative h-[400px] w-full">
        <Image
          src={scholarItem.image_url || "/placeholder.svg"}
          alt={scholarItem.title}
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container mx-auto px-4 pb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4">
              {scholarItem.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
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
                  dangerouslySetInnerHTML={{
                    __html: scholarItem.requirements,
                  }}
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
                <h2 className="text-2xl font-semibold">
                  Important Information
                </h2>
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

          {/* Right Column with scholarship details card */}
          <div className="space-y-6">
            <Card className="p-6 sticky top-4">
              <h3 className="text-xl font-bold mb-6">Scholarship Details</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Application Deadline</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(scholarItem.deadline).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border space-y-3">
                <motion.a
                  href="https://esaspetrofund.org/login"
                  target="_blank"
                  className="bg-primary flex gap-x-4 items-center justify-center text-white my-5 px-8 xl:px-10 py-2.5 rounded-md hover:bg-accent transition-colors duration-300 font-medium shadow-md text-[15px]"
                  rel="noreferrer"
                >
                  <p>Apply Now</p>
                </motion.a>
                {scholarItem.attachment_url && (
                  <Button
                    variant="outline"
                    className="w-full gap-2 bg-transparent"
                    asChild
                  >
                    <a
                      href={scholarItem.attachment_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FileText className="h-4 w-4" />
                      Download Attachment
                    </a>
                  </Button>
                )}
              </div>
            </Card>

            <Card className="p-6 bg-muted/50">
              <div className="flex items-start gap-3">
                <FileText className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium mb-1">Need Help?</p>
                  <p className="text-sm text-muted-foreground">
                    Contact our admissions team for more information about this
                    scholarship program.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
