"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Linkedin } from "lucide-react";
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
  linkedin: string;
  full_bio_html: string;
  bio_snippet: string;
  profile_image_url: string;
  is_active: boolean;
  updated_at: string;
}

interface HeroImage {
  id: number;
  image_url: string;
  title: string;
  subtitle: string;
  page: string;
  created_at: string;
}

export default function ExecutiveTeamPage() {
  const [executives, setExecutives] = useState<Executive[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [heroImage, setHeroImage] = useState<HeroImage | null>(null);
  const [heroLoading, setHeroLoading] = useState(true);
  const [heroError, setHeroError] = useState<string | null>(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = executives.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(executives.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  useEffect(() => {
    // Fetch executives
    async function fetchExecutives() {
      try {
        const res = await fetch(`${base_url}/api/management`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setExecutives(data.data ?? []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    // Fetch MiniHero image for "Our Management Team"
    async function fetchHero() {
      try {
        const res = await fetch(`${base_url}/api/hero-images`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        const teamHero = data?.data?.find(
          (img: HeroImage) => img.page === "Our Management Team"
        );
        setHeroImage(teamHero || null);
      } catch (err: any) {
        setHeroError(err.message);
      } finally {
        setHeroLoading(false);
      }
    }

    fetchExecutives();
    fetchHero();
  }, []);

  // MiniHero height (match your MiniHero styling)
  const heroHeight = "h-[400px] sm:h-[500px] md:h-[600px] w-full relative";

  return (
    <>
      {/* Dynamic MiniHero */}
      {heroLoading ? (
        <div className={`${heroHeight} bg-gray-300 animate-pulse`} />
      ) : heroError ? (
        <div
          className={`${heroHeight} flex items-center justify-center bg-gray-200 text-red-600`}
        >
          Failed to load hero image
        </div>
      ) : (
        <MiniHero
          imageSrc={heroImage?.image_url || "/SectionImages/DesertHero.jpg"}
          title={heroImage?.title || "Meet Our Executive Team"}
          subtitle={
            heroImage?.subtitle ||
            "Visionary leaders driving innovation, excellence, and sustainable growth across the organization."
          }
        />
      )}

      <ManagementHeader
        title="Our Management Team"
        subtitle="Managing strategic operations, fund allocations, investment oversight, and sustainable growth."
      />

      <div className="min-h-screen bg-background">
        <section className="container mx-auto px-4 py-16 md:py-24">
          {loading ? (
            <div className="flex flex-col items-center justify-center min-h-[400px]">
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 border-4 border-white/20 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-transparent border-t-[#F47C20] rounded-full animate-spin"></div>
              </div>
              <p className="text-lg font-medium text-[#F47C20] mt-4">
                Loading...
              </p>
            </div>
          ) : error ? (
            <p className="text-red-500">Error: {error}</p>
          ) : currentItems.length > 0 ? (
            <div className="grid gap-8 lg:grid-cols-1 xl:grid-cols-2">
              {currentItems.map((executive) => (
                <Card
                  key={executive.id}
                  className="group overflow-hidden bg-white border shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Image */}
                    <div className="w-full md:w-[240px] lg:w-[280px] bg-gray-100">
                      <img
                        src={executive.profile_image_url || "/placeholder.svg"}
                        alt={executive.full_name}
                        className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105 min-h-[300px] md:min-h-[400px]"
                      />
                    </div>

                    {/* Content */}
                    <CardContent className="flex-1 p-6 lg:p-8 flex flex-col">
                      <h3 className="text-xl lg:text-2xl font-bold text-[#4F3996]">
                        Mr. {executive.first_name} {executive.last_name}
                      </h3>

                      <p className="mt-2 text-base font-medium text-[#4F3996]">
                        {executive.position}
                      </p>

                      <div className="flex gap-3 mt-4">
                        <a
                          href={executive.linkedin}
                          target="_blank"
                          className="w-9 h-9 bg-[#4F3996] rounded flex items-center justify-center hover:bg-[#F47C20] transition-colors"
                        >
                          <Linkedin className="w-5 h-5 text-white" />
                        </a>
                      </div>

                      <p className="mt-6 text-sm text-gray-700 text-justify flex-1">
                        {executive.bio_snippet}
                      </p>

                      <Link
                        href={`/about/our-management-team/${executive.id}`}
                        className="mt-6"
                      >
                        <Button className="w-full bg-[#F47C20] text-white font-semibold py-3 rounded-md hover:bg-[#4F3996] transition-all flex items-center justify-center gap-2">
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
              There is currently no executive information available.
            </p>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-3 mt-12">
              <Button
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                className="bg-[#4F3996] text-white px-4 py-2 rounded-md"
              >
                Previous
              </Button>

              <span className="text-lg font-semibold">
                Page {currentPage} of {totalPages}
              </span>

              <Button
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                className="bg-[#4F3996] text-white px-4 py-2 rounded-md"
              >
                Next
              </Button>
            </div>
          )}
        </section>
      </div>
    </>
  );
}
