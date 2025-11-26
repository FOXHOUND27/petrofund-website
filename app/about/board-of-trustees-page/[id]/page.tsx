"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Mail } from "lucide-react";
import MiniHero from "@/components/miniHero";
import { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import { base_url } from "@/components/data/data";
interface Trustee {
  id: number;
  first_name: string;
  last_name: string;
  full_name: string;
  position: string;
  email: string;
  phone: string;
  full_bio_html: string;
  bio_snippet: string;
  profile_image_url: string;
  is_active: boolean;
  updated_at: string;
}

interface TrusteesPageProps {
  params: { id: string };
}

export default function TrusteesTeamPage({ params }: TrusteesPageProps) {
  const { id } = params;
  const [trustees, setTrustees] = useState<Trustee[] | null>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSummary() {
      try {
        const res = await fetch(`${base_url}/api/trustees`);

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setTrustees(data.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchSummary();
  }, []);

  if (loading) {
    return (
      <section className="p-4 md:p-8 lg:p-10 xl:p-12 relative bottom-45 md:bottom-45 lg:bottom-45">
        <div className="flex flex-col items-center justify-center p-5 sm:p-8 md:p-10 lg:p-12 rounded-tl-[45px] sm:rounded-tl-[65px] md:rounded-tl-[75px] lg:rounded-tl-[85px] rounded-br-[45px] sm:rounded-br-[65px] md:rounded-br-[75px] lg:rounded-br-[85px] min-h-[400px]">
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 border-4 border-white/20 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-transparent border-t-[#F47C20] rounded-full animate-spin"></div>
            </div>
            <p className="text-lg font-medium text-[#F47C20]">Loading</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) return <p className="text-red-500">Error: {error}</p>;

  // Find the executive by id
  const trustee = trustees?.find((e) => e.id === Number(id)) ?? null;

  if (!trustee) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <Link href="/about/board-of-trustees-page">
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Team
            </Button>
          </Link>
        </div>
      </div>

      {/* Executive Profile */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Left Column - Image and Contact */}
          <div className="lg:col-span-2">
            <div className="sticky top-8">
              <div className="aspect-square overflow-hidden rounded-lg bg-muted">
                <img
                  src={trustee.profile_image_url || "/placeholder.svg"}
                  alt={trustee.full_name}
                  className="w-full object-contain rounded-lg"
                />
              </div>

              <div className="mt-8">
                <h1 className="text-3xl font-bold text-foreground md:text-4xl">
                  {trustee.full_name}
                </h1>
                <p className="mt-2 text-lg font-medium text-accent">
                  {trustee.position}
                </p>

                {/* Contact Information */}
                <div className="mt-8 space-y-4">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Contact
                  </h3>
                  <div className="space-y-3">
                    <a
                      href={`mailto:${trustee.email}`}
                      className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                      <span className="text-sm">{trustee.email}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="lg:col-span-3 space-y-12">
            {/* Biography */}
            <div>
              <h2 className="text-4xl text-[#F47C20] font-bold  mb-6">
                Biography
              </h2>
              <div
                dangerouslySetInnerHTML={{ __html: trustee.full_bio_html }}
                className="space-y-4 text-muted-foreground text-justify leading-relaxed"
              ></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
