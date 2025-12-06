"use client";
import MainHero from "@/components/mainHero";
import Operators from "@/components/operators";
import React, { useState, useEffect } from "react";
import { base_url } from "@/components/data/data";

interface HeroImage {
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
    async function fetchHero() {
      try {
        const res = await fetch(`${base_url}/api/hero-images`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        const pelHero = data?.data?.find(
          (img: HeroImage) => img.page === "Pel Operators"
        );
        setHeroImage(pelHero || null);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchHero();
  }, []);

  const heroHeight = "h-[400px] sm:h-[500px] md:h-[600px] w-full relative";

  return (
    <>
      {loading ? (
        <div className={`${heroHeight} bg-gray-300 animate-pulse`} />
      ) : error ? (
        <div
          className={`${heroHeight} flex items-center justify-center bg-gray-200 text-red-600`}
        >
          Failed to load hero image
        </div>
      ) : (
        <MainHero
          imageSrc={heroImage?.image_url || "/SectionImages/DesertHero.jpg"}
          title={heroImage?.title || "Pel Operators"}
          subtitle={
            heroImage?.subtitle ||
            "Empowering Operators for a Sustainable Future"
          }
        />
      )}

      <Operators />
    </>
  );
};

export default Page;
