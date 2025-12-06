"use client";
import React, { useState, useEffect } from "react";
import MainHero from "@/components/mainHero";
import Vision from "@/components/vision";
import { base_url } from "@/components/data/data";

export interface HeroImage {
  id: number;
  image_url: string;
  title: string;
  subtitle: string;
  page: string;
  created_at: string;
}

const Page = () => {
  const [heroImage, setHeroImage] = useState<HeroImage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchHeroImage() {
      try {
        const res = await fetch(`${base_url}/api/hero-images`);

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();

        // Filter for "Our company profile" page
        const companyImage = data?.data?.find(
          (img: HeroImage) => img.page === "Company Profile"
        );

        setHeroImage(companyImage || null);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchHeroImage();
  }, []);

  // Exact height classes from MainHero
  const heroHeight =
    "relative bottom-25 w-full h-[600px] sm:h-[700px] md:h-[700px] lg:h-[800px] xl:h-[900px] overflow-hidden";

  return (
    <>
      {loading ? (
        // ⭐ Skeleton while loading
        <div className={`${heroHeight} bg-gray-300 animate-pulse`} />
      ) : error ? (
        <div
          className={`${heroHeight} flex items-center justify-center bg-gray-200 text-red-600`}
        >
          Failed to load hero image.
        </div>
      ) : (
        <MainHero
          imageSrc={heroImage?.image_url || "/SectionImages/DesertHero.jpg"}
          title={heroImage?.title || "Company Profile"}
          subtitle={heroImage?.subtitle || "Our company profile"}
        />
      )}

      <Vision />
    </>
  );
};

export default Page;
