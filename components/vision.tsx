"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export interface profileData {
  id: number;
  about_summary: string;
  executive_summary: string;
  mandate: string;
  vision: string;
  mission: string;
  core_values: string;
  updated_at: string;
}

const Vision = () => {
  const [profileSummary, setProfileSummary] = useState<profileData | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSummary() {
      try {
        const res = await fetch("https://innovation.muhoko.org/api/about-us");

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        console.log("Fetched Data", data.data);
        setProfileSummary(data.data);
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
    <section className="p-4 md:p-8 lg:p-10 xl:p-12 relative bottom-10 sm:bottom-20 md:bottom-28 lg:bottom-32 space-y-10">
      {/* Vision Section */}
      <motion.div
        className="bg-[#4F3996] shadow-2xl flex flex-col items-center justify-center p-5 sm:p-8 md:p-10 lg:p-12 rounded-tl-[45px] sm:rounded-tl-[65px] md:rounded-tl-[75px] lg:rounded-tl-[85px] rounded-br-[45px] sm:rounded-br-[65px] md:rounded-br-[75px] lg:rounded-br-[85px] w-full max-w-[95%] mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-5 sm:mb-6 md:mb-7 text-center font-semibold">
          Vision
        </h1>
        <div
          className="text-white text-justify text-sm sm:text-base md:text-lg leading-relaxed"
          dangerouslySetInnerHTML={{ __html: profileSummary?.vision || "" }}
        ></div>
      </motion.div>

      {/* Mandate Section */}
      <motion.div
        className="bg-[#4F3996] shadow-2xl flex flex-col items-center justify-center p-5 sm:p-8 md:p-10 lg:p-12 rounded-tl-[45px] sm:rounded-tl-[65px] md:rounded-tl-[75px] lg:rounded-tl-[85px] rounded-br-[45px] sm:rounded-br-[65px] md:rounded-br-[75px] lg:rounded-br-[85px] w-full max-w-[95%] mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-5 sm:mb-6 md:mb-7 text-center font-semibold">
          Mandate
        </h1>
        <div
          className="text-white text-justify text-sm sm:text-base md:text-lg leading-relaxed"
          dangerouslySetInnerHTML={{ __html: profileSummary?.mandate || "" }}
        ></div>

        <Link href="/donate">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent mt-5 text-white px-8 xl:px-10 py-2.5 rounded-full hover:bg-primary transition-colors duration-300 font-medium shadow-md text-[15px]"
          >
            Download Company Profile
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
};

export default Vision;
