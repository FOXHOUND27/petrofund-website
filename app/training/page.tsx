"use client";
import MainHero from "@/components/mainHero";
import { TrainingCard } from "@/components/trainingCard";
import React, { useState, useEffect } from "react";
import { base_url } from "@/components/data/data";

export interface TrainingProgram {
  id: number;
  title: string;
  description_snippet: string;
  start_date: string;
  application_deadline: string;
  duration: string;
  location: string;
  image_url: string;
}

interface HeroImage {
  id: number;
  image_url: string;
  title: string;
  subtitle: string;
  page: string;
  created_at: string;
}

const Page = () => {
  const [trainingInfo, setTrainingInfo] = useState<TrainingProgram[] | null>(
    []
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [heroImage, setHeroImage] = useState<HeroImage | null>(null);
  const [heroLoading, setHeroLoading] = useState(true);
  const [heroError, setHeroError] = useState<string | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

  useEffect(() => {
    async function fetchSummary() {
      try {
        const res = await fetch(`${base_url}/api/trainings`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setTrainingInfo(data.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    async function fetchHero() {
      try {
        const res = await fetch(`${base_url}/api/hero-images`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        const trainingHero = data?.data?.find(
          (img: HeroImage) => img.page === "Training"
        );
        setHeroImage(trainingHero || null);
      } catch (err: any) {
        setHeroError(err.message);
      } finally {
        setHeroLoading(false);
      }
    }

    fetchSummary();
    fetchHero();
  }, []);

  const heroHeight = "h-[400px] sm:h-[500px] md:h-[600px] w-full relative";

  // Pagination Logic
  const totalItems = trainingInfo?.length || 0;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = trainingInfo?.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  return (
    <>
      {/* Dynamic MainHero */}
      {heroLoading ? (
        <div className={`${heroHeight} bg-gray-300 animate-pulse`} />
      ) : heroError ? (
        <div
          className={`${heroHeight} flex items-center justify-center bg-gray-200 text-red-600`}
        >
          Failed to load hero image
        </div>
      ) : (
        <MainHero
          imageSrc={
            heroImage?.image_url || "/public/SectionImages/DesertHero.jpg"
          }
          title={heroImage?.title || "Training"}
          subtitle={
            heroImage?.subtitle || "Empower Your Skills, Elevate Your Potential"
          }
        />
      )}

      <div className="min-h-screen relative bottom-45 md:bottom-40 lg:bottom-40 bg-background">
        {/* Header Section */}
        <header className="border-b border-border bg-card">
          <div className="container mx-auto px-4 py-8 md:py-12">
            <h1 className="text-2xl font-bold text-balance mb-4">
              Professional Training Programs
            </h1>
            <p className="text-base text-muted-foreground max-w-2xl text-pretty leading-relaxed">
              Advance your career with our comprehensive training programs.
              Learn from industry experts and gain practical skills for the
              modern workplace.
            </p>
          </div>
        </header>

        {/* Trainings Grid */}
        <main className="container mx-auto px-4 py-12">
          {currentItems && currentItems.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentItems.map((training) => (
                  <TrainingCard key={training.id} training={training} />
                ))}
              </div>

              {/* Pagination Controls */}
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
          ) : (
            <p className="text-center text-lg text-muted-foreground">
              No trainings currently available.
            </p>
          )}
        </main>
      </div>
    </>
  );
};

export default Page;
