"use client";
import { ProgramCard } from "./programCard";
import { useState, useEffect } from "react";
import { base_url } from "@/components/data/data";

interface ProgramCardProps {
  id: number;
  title: string;
  description_snippet: string;
  image_url: string;
  deadline: string;
}

export default function ProgramSection() {
  const [scholarInfo, setScholarInfo] = useState<ProgramCardProps[] | null>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

  useEffect(() => {
    async function fetchSummary() {
      try {
        const res = await fetch(`${base_url}/api/scholarships`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        const data = await res.json();
        setScholarInfo(data.data);
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

  if (error)
    return <p className="text-red-500 text-center mt-10">Error: {error}</p>;

  const hasNoScholarships = !scholarInfo || scholarInfo.length === 0;

  // Pagination logic
  const totalItems = scholarInfo?.length || 0;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = scholarInfo?.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <main className="min-h-screen bg-background p-6 md:p-12">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-4xl font-bold text-foreground">
          Available Scholarships
        </h1>

        {hasNoScholarships ? (
          <div className="flex flex-col items-center justify-center min-h-[300px]">
            <p className="text-lg text-gray-500 font-medium">
              No scholarship programs currently available.
            </p>
          </div>
        ) : (
          <>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {currentItems?.map((program) => (
                <ProgramCard key={program.id} program={program} />
              ))}
            </div>

            {/* Pagination controls */}
            <div className="flex items-center justify-center gap-4 mt-10">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded bg-primary text-white disabled:bg-gray-400"
              >
                Previous
              </button>

              <span className="text-sm">
                Page {currentPage} of {totalPages}
              </span>

              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded bg-primary text-white disabled:bg-gray-400"
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
