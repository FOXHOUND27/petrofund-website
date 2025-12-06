"use client";
import AboutLogo from "@/components/aboutLogo";
import AboutText from "@/components/aboutText";
import MainHero from "@/components/mainHero";
import Values from "@/components/values";
import { useState, useEffect } from "react";
import { base_url } from "@/components/data/data";

interface HeroImage {
  id: number;
  image_url: string;
  title: string;
  subtitle: string;
  page: string;
  created_at: string;
}

const About = () => {
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

        const aboutImage = data?.data?.find(
          (img: HeroImage) => img.page === "About Us"
        );

        setHeroImage(aboutImage || null);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchHeroImage();
  }, []);

  // 🔥 EXACT SAME HEIGHT AS MainHero
  const heroHeight =
    "relative bottom-25 w-full h-[600px] sm:h-[700px] md:h-[700px] lg:h-[800px] xl:h-[900px] overflow-hidden";

  return (
    <>
      {loading ? (
        // ⭐ PERFECT SKELETON — same height, no popping
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
          title={heroImage?.title || "About Us"}
          subtitle={
            heroImage?.subtitle || "Learn more about our team and mission."
          }
        />
      )}

      <AboutText />
      <Values />
      <AboutLogo />
    </>
  );
};

export default About;
