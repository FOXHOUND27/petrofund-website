"use client";
import MainHero from "@/components/mainHero";
import { TrainingCard } from "@/components/trainingCard";
import React from "react";
import { useState, useEffect } from "react";
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

const Page = () => {
  const [trainingInfo, setTrainingInfo] = useState<TrainingProgram[] | null>(
    []
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSummary() {
      try {
        const res = await fetch(`${base_url}/api/trainings`);

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setTrainingInfo(data.data);
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
      <MainHero
        imageSrc="/PetrofundContent/Training.jpeg"
        title="Training"
        subtitle="Empower Your Skills, Elevate Your Potential"
      />

      <div className="min-h-screen relative bottom-45 md:bottom-40 lg:bottom-40 bg-background">
        {/* Header Section */}
        <header className="border-b border-border bg-card">
          <div className="container mx-auto px-4 py-8 md:py-12">
            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4">
              Professional Training Programs
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl text-pretty leading-relaxed">
              Advance your career with our comprehensive training programs.
              Learn from industry experts and gain practical skills for the
              modern workplace.
            </p>
          </div>
        </header>

        {/* Trainings Grid */}
        <main className="container mx-auto px-4 py-12">
          {trainingInfo && trainingInfo.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trainingInfo.map((training) => (
                <TrainingCard key={training.id} training={training} />
              ))}
            </div>
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
