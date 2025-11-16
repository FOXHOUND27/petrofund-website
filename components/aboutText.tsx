"use client";
import { useState, useEffect } from "react";
import { base_url } from "@/components/data/data";

const AboutText = () => {
  const [aboutSummary, setAboutSummary] = useState<string | null>(null);
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

        // Validate response structure
        if (data?.data?.about_summary) {
          setAboutSummary(data.data.about_summary);
        } else {
          setAboutSummary(null); // triggers fallback message
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
      <section className="p-4 md:p-8 lg:p-10 xl:p-12 relative bottom-45 md:bottom-45 lg:bottom-45">
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
    <section className="p-4 md:p-8 lg:p-10 xl:p-12 relative bottom-45 md:bottom-45 lg:bottom-45">
      <div className="bg-[#4F3996] shadow-2xl flex flex-col items-center justify-center p-5 sm:p-8 md:p-10 lg:p-12 rounded-tl-[45px] sm:rounded-tl-[65px] md:rounded-tl-[75px] lg:rounded-tl-[85px] rounded-br-[45px] sm:rounded-br-[65px] md:rounded-br-[75px] lg:rounded-br-[85px]">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-5 sm:mb-6 md:mb-7 text-center">
          About Us
        </h1>

        {aboutSummary ? (
          <div
            dangerouslySetInnerHTML={{ __html: aboutSummary }}
            className="space-y-5 sm:space-y-6 md:space-y-8 text-white text-sm sm:text-base md:text-lg leading-relaxed max-w-5xl text-justify"
          ></div>
        ) : (
          <p className="text-white text-center text-base sm:text-lg md:text-xl max-w-4xl">
            Our About Us information is currently unavailable. Please check back
            soon.
          </p>
        )}
      </div>
    </section>
  );
};

export default AboutText;
