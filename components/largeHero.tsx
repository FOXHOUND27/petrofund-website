"use client";
import Image from "next/image";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { base_url } from "./data/data";
import { useState, useEffect } from "react";

interface HeroImage {
  id: number;
  image_url: string;
  title: string;
  subtitle: string;
  page: string;
  created_at: string;
}

const LargeHero = () => {
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

        // Filter for the Home Page hero image
        const homeImage = data?.data?.find(
          (img: HeroImage) => img.page === "Home Page"
        );

        setHeroImage(homeImage || null);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchHeroImage();
  }, []);

  // Loading Skeleton
  if (loading) {
    return (
      <section className="relative w-full h-[600px] bg-gray-300 animate-pulse rounded-bl-[25px] rounded-br-[25px]"></section>
    );
  }

  // Error State
  if (error) {
    return <p className="text-red-500 text-center py-10">Error: {error}</p>;
  }

  return (
    <section className="relative bottom-25  w-full h-[600px] sm:h-[700px] md:h-[700px] lg:h-[800px] xl:h-[900px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bottom-25">
        <Image
          src={heroImage?.image_url || "/SectionImages/DesertHero.jpg"}
          alt={heroImage?.title || "Hero Image"}
          fill
          priority
          className="object-cover rounded-bl-[25px] rounded-br-[25px] sm:rounded-bl-[35px] sm:rounded-br-[35px] md:rounded-bl-[45px] md:rounded-br-[45px] animate-in fade-in zoom-in-95 duration-1000"
          sizes="100vw"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bottom-25 bg-black/45 rounded-bl-[25px] rounded-br-[25px] sm:rounded-bl-[35px] sm:rounded-br-[35px] md:rounded-bl-[45px] md:rounded-br-[45px] animate-in fade-in duration-700" />

      {/* Hero Text */}
      <div className="relative z-20 h-full flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 pt-8 sm:pt-12 md:pt-16">
        <div className="max-w-4xl animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-300">
          <h1 className="text-white text-3xl sm:text-xl md:text-2xl lg:text-5xl font-bold leading-tight text-balance">
            {heroImage?.title || "PetroFund"}
          </h1>

          <h2 className="text-white text-md sm:text-xl md:text-lg lg:text-xl mt-3 sm:mt-4 md:mt-6 font-light leading-relaxed text-pretty animate-in slide-in-from-bottom-6 fade-in duration-1000 delay-500">
            {heroImage?.subtitle ||
              "Driving Namibia’s growth through training and innovation."}
          </h2>

          {/* Hero Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 md:mt-10 animate-in slide-in-from-bottom-4 fade-in duration-1000 delay-700">
            <Link
              href="/media/news"
              className="group py-2 px-4 sm:py-2 sm:px-4 md:py-2 md:px-4 bg-[#4F3996] flex items-center justify-center gap-x-2 text-white rounded-full text-base sm:text-sm font-medium hover:bg-[#F47C20] transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
            >
              <span>Latest Updates</span>
              <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <a
              href="https://innovation.muhoko.org/student/login"
              target="_blank"
              className="group py-2 px-4 bg-[#4F3996] flex items-center justify-center gap-x-2 text-white rounded-full text-base sm:text-sm font-medium hover:bg-[#F47C20] transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
            >
              <span>Scholarships Portal</span>
              <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              target="_blank"
              href="https://petroconnect.com.na/"
              className="flex md:hidden group py-3 px-6 bg-[#4F3996] items-center justify-center gap-x-2 text-white rounded-full text-base font-medium hover:bg-[#F47C20] transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
            >
              <span>PetroConnect</span>
              <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Floating Button */}
      <a
        target="_blank"
        href="https://petroconnect.com.na/"
        className="absolute hidden lg:flex cursor-pointer z-20 bottom-120 right-40 w-[150px] h-[150px] bg-[#F47C20] rounded-full text-white text-md font-semibold flex-col items-center justify-center shadow-lg hover:scale-125 hover:bg-[#4F3996] hover:shadow-2xl transition-transform duration-300"
      >
        <ArrowUpRight className="w-8 h-8 mt-2" />
        <span>PetroConnect</span>
      </a>
    </section>
  );
};

export default LargeHero;
