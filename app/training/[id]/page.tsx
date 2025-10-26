"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  Clock,
  FileText,
  ArrowLeft,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export interface TrainingProgram {
  id: number;
  title: string;
  full_description_html: string;
  description_snippet: string;
  eligibility_html: string;
  requirements_html: string;
  start_date: string;
  application_deadline: string;
  duration: string;
  location: string;
  image_url: string;
  attachment_url: string;
  created_at: string;
}

interface TrainingPageProps {
  params: Promise<{ id: string }>; // params is now a Promise
}

export default function TrainingDetailPage({ params }: TrainingPageProps) {
  const [trainingInfo, setTrainingInfo] = useState<TrainingProgram[] | null>(
    null
  );
  const [trainingId, setTrainingId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // unwrap params
  useEffect(() => {
    async function unwrapParams() {
      const resolvedParams = await params;
      setTrainingId(Number(resolvedParams.id));
    }
    unwrapParams();
  }, [params]);

  // fetch training info
  useEffect(() => {
    if (trainingId === null) return;

    async function fetchTrainings() {
      try {
        const res = await fetch("https://innovation.muhoko.org/api/trainings");
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setTrainingInfo(data.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchTrainings();
  }, [trainingId]);

  if (loading)
    return (
      <section className="p-4 min-h-[400px] flex justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-500"></div>
      </section>
    );

  if (error) return <p className="text-red-500">Error: {error}</p>;

  const trainingItem = trainingInfo?.find((e) => e.id === trainingId) ?? null;

  if (!trainingItem) {
    notFound();
  }

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const isDeadlineSoon = () => {
    const deadline = new Date(trainingItem!.application_deadline);
    const today = new Date();
    const daysUntilDeadline = Math.ceil(
      (deadline.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
    );
    return daysUntilDeadline <= 7 && daysUntilDeadline >= 0;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Back Navigation */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <Link href="/training">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Trainings
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Section with Image */}
      <div className="relative h-[400px] w-full">
        <Image
          src={
            trainingItem!.image_url.startsWith("http")
              ? trainingItem!.image_url
              : trainingItem!.image_url
          }
          alt={trainingItem!.title}
          fill
          className="object-cover"
          unoptimized // allow external image without config
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container mx-auto px-4 pb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4">
              {trainingItem!.title}
            </h1>
            {isDeadlineSoon() && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 text-destructive text-sm font-medium">
                <Clock className="h-4 w-4" />
                Application deadline approaching
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <div
                className="prose prose-sm max-w-none text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: trainingItem!.full_description_html,
                }}
              />
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Eligibility</h2>
              <div
                className="prose prose-sm max-w-none text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: trainingItem!.eligibility_html,
                }}
              />
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Requirements</h2>
              <div
                className="prose prose-sm max-w-none text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: trainingItem!.requirements_html,
                }}
              />
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <Card className="p-6 sticky top-4">
              <h3 className="text-xl font-bold mb-6">Training Details</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Application Deadline</p>
                    <p className="text-sm text-muted-foreground">
                      {formatDate(trainingItem!.application_deadline)}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Start Date</p>
                    <p className="text-sm text-muted-foreground">
                      {formatDate(trainingItem!.start_date)}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Duration</p>
                    <p className="text-sm text-muted-foreground">
                      {trainingItem!.duration}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Location</p>
                    <p className="text-sm text-muted-foreground capitalize">
                      {trainingItem!.location}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border space-y-3">
                <motion.a
                  href=""
                  className="bg-primary flex gap-x-4 items-center justify-center text-white my-5 px-8 xl:px-10 py-2.5 rounded-md hover:bg-accent transition-colors duration-300 font-medium shadow-md text-[15px]"
                >
                  <p>Apply Now</p>
                </motion.a>
                {trainingItem!.attachment_url && (
                  <Button
                    variant="outline"
                    className="w-full gap-2 bg-transparent"
                    asChild
                  >
                    <a
                      href={trainingItem!.attachment_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="h-4 w-4" />
                      Download Brochure
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
                    training program.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
