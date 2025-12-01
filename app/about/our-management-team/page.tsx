"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Linkedin, Mail } from "lucide-react";
import MiniHero from "@/components/miniHero";
import { useState, useEffect } from "react";
import { base_url } from "@/components/data/data";
import ManagementHeader from "@/components/boardheader";

interface Executive {
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

export default function ExecutiveTeamPage() {
  const [executives, setExecutives] = useState<Executive[] | null>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSummary() {
      try {
        const res = await fetch(`${base_url}/api/management`);

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setExecutives(data.data);
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
        title="Meet Our Executive Team"
        subtitle="Visionary leaders driving innovation, excellence, and sustainable growth across every facet of our organization."
      />

      <ManagementHeader
        title="Our Management team"
        subtitle="Manage PetroFunds’ strategic operations, oversee fund allocation, monitor investment performance, and ensure compliance with regulatory standards. Enable informed decision-making to maximize returns, mitigate risks, and drive sustainable growth across all petroleum-related investments."
      />

      <div className="min-h-screen bg-background">
        <section className="container mx-auto px-4 py-16 md:py-24">
          {executives && executives.length > 0 ? (
            <div className="grid gap-8 lg:grid-cols-1 xl:grid-cols-2">
              {executives.map((executive) => (
                <Card
                  key={executive.id}
                  className="group overflow-hidden bg-white border border-gray-200 shadow-lg transition-all hover:shadow-xl"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Image Section */}
                    <div className="w-full md:w-[240px] lg:w-[280px] flex-shrink-0 bg-gray-100">
                      <img
                        src={executive.profile_image_url || "/placeholder.svg"}
                        alt={executive.full_name}
                        className="h-full mx-4 w-full object-cover object-top transition-transform duration-300 group-hover:scale-105 min-h-[300px] md:min-h-[400px]"
                      />
                    </div>

                    {/* Content Section */}
                    <CardContent className="flex-1 p-6 lg:p-8 flex flex-col">
                      {/* Name */}
                      <h3 className="text-xl lg:text-2xl font-bold text-[#4F3996]">
                        Mr. {executive.first_name} {executive.last_name}
                      </h3>

                      {/* Position */}
                      <p className="mt-2 text-base font-medium text-[#4F3996]">
                        {executive.position}
                      </p>

                      {/* Social Icons */}
                      <div className="flex gap-3 mt-4">
                        <a
                          href={`mailto:${executive.email}`}
                          className="w-9 h-9 bg-[#4F3996] rounded flex items-center justify-center hover:bg-[#F47C20] transition-colors"
                          aria-label="Email"
                        >
                          <Mail className="w-5 h-5 text-white" />
                        </a>
                        <a
                          href="#"
                          className="w-9 h-9 bg-[#4F3996] rounded flex items-center justify-center hover:bg-[#F47C20] transition-colors"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="w-5 h-5 text-white" />
                        </a>
                      </div>

                      {/* Bio */}
                      <p className="mt-6 text-sm text-gray-700 leading-relaxed text-justify flex-1">
                        {executive.bio_snippet}
                      </p>

                      {/* Read More Button */}
                      <Link
                        href={`/about/our-management-team/${executive.id}`}
                        className="mt-6"
                      >
                        <Button className="w-full bg-[#F47C20] text-white font-semibold rounded-md py-3 transition-all duration-300 ease-in-out hover:bg-[#4F3996] hover:scale-[1.02] hover:shadow-lg flex items-center justify-center gap-2">
                          Read More
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <p className="w-full text-center text-lg text-muted-foreground mt-12">
              There is currently no executives information available. Please
              check back later for updates.
            </p>
          )}
        </section>
      </div>
    </>
  );
}
