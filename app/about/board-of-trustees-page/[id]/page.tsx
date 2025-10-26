"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import MiniHero from "@/components/miniHero";
import { useState, useEffect } from "react";

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

export default function TrusteesTeamPage() {
  const [trustees, setTrustees] = useState<Trustee[] | null>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSummary() {
      try {
        const res = await fetch("https://innovation.muhoko.org/api/trustees");

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

  return (
    <>
      <MiniHero
        imageSrc="/SectionImages/DesertHero.jpg"
        title="Board of Trustees"
        subtitle="Guiding the Vision and Governance of Petrofund"
      />
      <div className="min-h-screen bg-background">
        {/* Team Grid */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          {trustees && trustees.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {trustees.map((trustee) => (
                <Card
                  key={trustee.id}
                  className="group overflow-hidden bg-[#E6E7E8] transition-all hover:shadow-lg"
                >
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img
                      src={trustee.profile_image_url || "/Icons/person.svg"}
                      alt={trustee.full_name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-foreground">
                      {trustee.full_name}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-accent">
                      {trustee.position}
                    </p>
                    <p className="mt-4 text-muted-foreground leading-relaxed text-justify">
                      {trustee.bio_snippet}
                    </p>
                    <Link href={`/about/board-of-trustees-page/${trustee.id}`}>
                      <Button className="mt-6 w-full bg-[#4F3996] text-white font-medium rounded-lg py-2 transition-all duration-300 ease-in-out hover:bg-[#F47C20] hover:scale-[1.02] hover:shadow-lg">
                        View More Information
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <p className="w-full text-center text-lg text-muted-foreground mt-12">
              There is currently no trustees information available. Please check
              back later for updates.
            </p>
          )}
        </section>
      </div>
    </>
  );
}
