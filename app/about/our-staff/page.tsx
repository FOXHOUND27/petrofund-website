// Full client-side pagination version
"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Linkedin } from "lucide-react";
import MiniHero from "@/components/miniHero";
import { useState, useEffect } from "react";
import { base_url } from "@/components/data/data";
import ManagementHeader from "@/components/boardheader";

interface Staff {
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

export default function ExecutiveTeamPage() {
  const [staff, setStaff] = useState<Staff[] | null>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    async function fetchSummary() {
      try {
        const res = await fetch(`${base_url}/api/staff-members`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setStaff(data.data);
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
      <section className="p-4 md:p-8 lg:p-10 xl:p-12">
        <div className="flex flex-col items-center justify-center min-h-[400px]">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 border-4 border-white/20 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-[#F47C20] rounded-full animate-spin"></div>
          </div>
          <p className="text-lg font-medium text-[#F47C20] mt-4">Loading</p>
        </div>
      </section>
    );
  }

  if (error) return <p className="text-red-500">Error: {error}</p>;

  // Pagination calculations
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = staff?.slice(firstItemIndex, lastItemIndex) || [];
  const totalPages = Math.ceil((staff?.length || 0) / itemsPerPage);

  return (
    <>
      <MiniHero
        imageSrc="/SectionImages/DesertHero.jpg"
        title="Meet Our Team"
        subtitle="Visionary leaders driving innovation."
      />

      <ManagementHeader
        title="Our team"
        subtitle="Manage PetroFunds’ strategic operations and drive sustainable growth."
      />

      <div className="min-h-screen bg-background">
        <section className="container mx-auto px-4 py-16 md:py-24">
          {currentItems.length > 0 ? (
            <div className="grid gap-8 lg:grid-cols-1 xl:grid-cols-2">
              {currentItems.map((staff) => (
                <Card
                  key={staff.id}
                  className="group overflow-hidden bg-white border shadow-lg hover:shadow-xl"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-[240px] lg:w-[280px] bg-gray-100">
                      <img
                        src={staff.profile_image_url || "/placeholder.svg"}
                        alt={staff.full_name}
                        className="h-full mx-4 w-full object-cover object-top group-hover:scale-105 transition-transform duration-300 min-h-[300px] md:min-h-[400px]"
                      />
                    </div>

                    <CardContent className="flex-1 p-6 lg:p-8 flex flex-col">
                      <h3 className="text-xl lg:text-2xl font-bold text-[#4F3996]">
                        {staff.first_name} {staff.last_name}
                      </h3>

                      <p className="mt-2 text-base font-medium text-[#4F3996]">
                        {staff.position}
                      </p>

                      <div className="flex gap-3 mt-4">
                        <a
                          href={staff.linkedin}
                          className="w-9 h-9 bg-[#4F3996] rounded flex items-center justify-center hover:bg-[#F47C20] transition-colors"
                          aria-label="LinkedIn"
                          target="_blank"
                        >
                          <Linkedin className="w-5 h-5 text-white" />
                        </a>
                      </div>

                      <p className="mt-6 text-sm text-gray-700 leading-relaxed text-justify flex-1">
                        {staff.bio_snippet}
                      </p>

                      <Link
                        href={`/about/our-staff/${staff.id}`}
                        className="mt-6"
                      >
                        <Button className="w-full bg-[#F47C20] hover:bg-[#4F3996] text-white py-3 rounded-md transition-all flex items-center justify-center gap-2">
                          Read More <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <p className="w-full text-center text-lg text-muted-foreground mt-12">
              No staff information available.
            </p>
          )}

          {/* Pagination */}
          <div className="flex justify-center items-center gap-3 mt-12">
            <Button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="bg-[#4F3996] text-white px-4 py-2"
            >
              Previous
            </Button>

            <span className="font-semibold text-[#4F3996]">
              Page {currentPage} of {totalPages}
            </span>

            <Button
              disabled={currentPage === totalPages}
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              className="bg-[#4F3996] text-white px-4 py-2"
            >
              Next
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
