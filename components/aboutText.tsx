"use client";
import { useState, useEffect } from "react";
import { base_url } from "@/components/data/data";

interface AboutUsResponse {
  id: number;
  about_summary: string;
  executive_summary: string;
  mandate: string;
  vision: string;
  mission: string;
  core_values: string;
  updated_at: string;
}

const AboutText = () => {
  const [aboutData, setAboutData] = useState<AboutUsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAbout() {
      try {
        const res = await fetch(`${base_url}/api/about-us`);

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();

        if (data?.data) {
          setAboutData(data.data as AboutUsResponse);
        } else {
          setAboutData(null);
        }
      } catch (err: any) {
        setError(err.message || "Something went wrong.");
      } finally {
        setLoading(false);
      }
    }

    fetchAbout();
  }, []);

  if (loading) {
    return (
      <section className="p-4 md:p-8 lg:p-10 xl:p-12 relative bottom-45">
        <div className="bg-[#4F3996] shadow-2xl flex flex-col items-center justify-center p-5 sm:p-8 md:p-10 lg:p-12 rounded-tl-[45px] sm:rounded-tl-[65px] md:rounded-tl-[75px] lg:rounded-tl-[85px] rounded-br-[45px] sm:rounded-br-[65px] md:rounded-br-[75px] lg:rounded-br-[85px] min-h-[400px]">
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 border-4 border-white/20 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-transparent border-t-[#F47C20] rounded-full animate-spin"></div>
            </div>
            <p className="text-white text-lg font-medium">Loading content...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return <p className="text-red-500 text-center py-10">Error: {error}</p>;
  }

  return (
    <section className="p-4 md:p-8 lg:p-10 xl:p-12 relative bottom-45">
      {/* --- ABOUT US CARD --- */}
      <div className="bg-[#4F3996] shadow-2xl flex flex-col items-center justify-center p-5 sm:p-8 md:p-10 lg:p-12 rounded-tl-[45px] sm:rounded-tl-[65px] md:rounded-tl-[75px] lg:rounded-tl-[85px] rounded-br-[45px] sm:rounded-br-[65px] md:rounded-br-[75px] lg:rounded-br-[85px] mb-10">
        <h1 className="text-xl text-white mb-4 text-center font-semibold">
          About Us
        </h1>

        {aboutData?.about_summary ? (
          <div
            dangerouslySetInnerHTML={{ __html: aboutData.about_summary }}
            className="space-y-5 sm:space-y-6 md:space-y-8 text-white text-sm leading-relaxed max-w-5xl text-justify"
          ></div>
        ) : (
          <p className="text-white text-center text-lg max-w-4xl">
            Our About Us information is currently unavailable.
          </p>
        )}
      </div>

      {/* --- EXECUTIVE SUMMARY CARD (ITS OWN CARD) --- */}
      <div className="bg-[#4F3996] shadow-2xl flex flex-col items-center justify-center p-5 sm:p-8 md:p-10 lg:p-12 rounded-tl-[45px] sm:rounded-tl-[65px] md:rounded-tl-[75px] lg:rounded-tl-[85px] rounded-br-[45px] sm:rounded-br-[65px] md:rounded-br-[75px] lg:rounded-br-[85px]">
        <h2 className="text-lg text-white font-semibold mb-3">
          Executive Summary
        </h2>

        {aboutData?.executive_summary ? (
          <div
            dangerouslySetInnerHTML={{ __html: aboutData.executive_summary }}
            className="space-y-5 sm:space-y-6 md:space-y-8 text-white text-sm leading-relaxed max-w-5xl text-justify"
          ></div>
        ) : (
          <p className="text-white text-center text-lg max-w-4xl">
            Executive summary information is currently unavailable.
          </p>
        )}
      </div>
    </section>
  );
};

export default AboutText;
