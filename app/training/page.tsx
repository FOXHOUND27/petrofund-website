"use client";
import MainHero from "@/components/mainHero";
import { TrainingCard } from "@/components/trainingCard";
import React from "react";
import { useState, useEffect } from "react";

export interface TrainingProgram {
  id: number;
  title: string;
  description_snippet: string;
  start_date: string; // ISO date string, e.g., "2025-10-30"
  application_deadline: string; // ISO date string
  duration: string;
  location: string;
  image_url: string;
}

// Sample training data
const trainings = [
  {
    id: 1,
    title: "Advanced Web Development Bootcamp",
    snippet:
      "Master modern web technologies including React, Next.js, and TypeScript. Build production-ready applications with industry best practices.",
    applicationDeadline: "2025-11-15",
    startDate: "2025-12-01",
    endDate: "2026-03-15",
    location: "San Francisco, CA",
    image: "/modern-web-development-coding-bootcamp.jpg",
  },
  {
    id: 2,
    title: "Data Science & Machine Learning",
    snippet:
      "Learn Python, statistical analysis, and machine learning algorithms. Work on real-world projects and build your data science portfolio.",
    applicationDeadline: "2025-11-20",
    startDate: "2025-12-10",
    endDate: "2026-04-10",
    location: "New York, NY",
    image: "/data-science-machine-learning-analytics.jpg",
  },
  {
    id: 3,
    title: "UX/UI Design Masterclass",
    snippet:
      "Create stunning user experiences with Figma, Adobe XD, and modern design principles. Learn user research and prototyping techniques.",
    applicationDeadline: "2025-11-10",
    startDate: "2025-11-25",
    endDate: "2026-02-25",
    location: "Austin, TX",
    image: "/ux-ui-design-interface-mockups.jpg",
  },
  {
    id: 4,
    title: "Cloud Architecture & DevOps",
    snippet:
      "Master AWS, Docker, Kubernetes, and CI/CD pipelines. Build scalable cloud infrastructure and automate deployment workflows.",
    applicationDeadline: "2025-11-25",
    startDate: "2025-12-15",
    endDate: "2026-03-30",
    location: "Seattle, WA",
    image: "/cloud-computing-devops-infrastructure.jpg",
  },
  {
    id: 5,
    title: "Mobile App Development",
    snippet:
      "Build native iOS and Android apps using React Native and Flutter. Learn mobile-first design and app store deployment strategies.",
    applicationDeadline: "2025-12-01",
    startDate: "2025-12-20",
    endDate: "2026-04-20",
    location: "Los Angeles, CA",
    image: "/mobile-app-development.png",
  },
  {
    id: 6,
    title: "Cybersecurity Fundamentals",
    snippet:
      "Understand network security, ethical hacking, and threat detection. Gain hands-on experience with security tools and frameworks.",
    applicationDeadline: "2025-11-18",
    startDate: "2025-12-05",
    endDate: "2026-03-05",
    location: "Boston, MA",
    image: "/cybersecurity-network-security-hacking.jpg",
  },
];

const Page = () => {
  const [trainingInfo, setTrainingInfo] = useState<TrainingProgram[] | null>(
    []
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSummary() {
      try {
        const res = await fetch("https://innovation.muhoko.org/api/trainings");

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingInfo?.map((training) => (
              <TrainingCard key={training.id} training={training} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default Page;
