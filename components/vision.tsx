"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { base_url } from "./data/data";

export interface ProfileData {
  id: number;
  about_summary: string;
  executive_summary: string;
  mandate: string;
  vision: string;
  mission: string;
  core_values: string;
  updated_at: string;
}

export interface CompanyProfileData {
  id: number;
  company_profile_path: string;
  created_at: string;
}

const Vision = () => {
  const [profileSummary, setProfileSummary] = useState<ProfileData | null>(
    null
  );
  const [companyProfile, setCompanyProfile] =
    useState<CompanyProfileData | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch About Summary
        const summaryRes = await fetch(`${base_url}/api/about-us`);
        if (!summaryRes.ok)
          throw new Error(`About-us error: ${summaryRes.status}`);

        const summaryData = await summaryRes.json();

        // If no data is returned, set profileSummary to null
        setProfileSummary(summaryData?.data || null);

        // Fetch Company Profile PDF
        const companyRes = await fetch(`${base_url}/api/company-profile`);
        if (!companyRes.ok) throw new Error(`Company profile error`);

        const companyData = await companyRes.json();
        setCompanyProfile(companyData?.data || null);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // Loading UI
  if (loading) {
    return (
      <section className="p-4 md:p-8 lg:p-10 xl:p-12 relative bottom-45">
        <div className="flex flex-col items-center justify-center p-5 rounded-lg min-h-[300px]">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 border-4 border-white/20 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-[#F47C20] rounded-full animate-spin"></div>
          </div>
          <p className="text-lg font-medium text-[#F47C20]">Loading</p>
        </div>
      </section>
    );
  }

  if (error) return <p className="text-red-500">Error: {error}</p>;

  // ===========================================
  // FALLBACK when profileSummary has no data
  // ===========================================
  if (!profileSummary) {
    return (
      <section className="p-4 md:p-8 lg:p-10 xl:p-12">
        <div className="bg-[#4F3996] shadow-2xl p-10 rounded-2xl text-center max-w-[95%] mx-auto">
          <h1 className="text-3xl text-white font-semibold mb-4">
            Company Information Unavailable
          </h1>
          <p className="text-white text-lg leading-relaxed">
            No company profile information is available at the moment. Please
            check back later.
          </p>
        </div>
      </section>
    );
  }

  // MAIN UI
  return (
    <section className="p-4 md:p-8 lg:p-10 xl:p-12 relative bottom-35 space-y-10">
      {/* Vision Section */}
      <motion.div
        className="bg-[#4F3996] shadow-2xl flex flex-col items-center justify-center p-5 sm:p-8 md:p-10 lg:p-12 rounded-tl-[45px] rounded-br-[45px] w-full max-w-[95%] mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl text-white mb-6 text-center font-semibold">
          Vision
        </h1>
        <div
          className="text-white text-justify text-lg leading-relaxed"
          dangerouslySetInnerHTML={{ __html: profileSummary.vision || "" }}
        ></div>
      </motion.div>

      {/* Mandate Section */}
      <motion.div
        className="bg-[#4F3996] shadow-2xl flex flex-col items-center justify-center p-5 sm:p-8 md:p-10 lg:p-12 rounded-tl-[45px] rounded-br-[45px] w-full max-w-[95%] mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h1 className="text-4xl text-white mb-6 text-center font-semibold">
          Mandate
        </h1>
        <div
          className="text-white text-justify text-lg leading-relaxed"
          dangerouslySetInnerHTML={{ __html: profileSummary.mandate || "" }}
        ></div>

        {/* Company Profile Button */}
        {companyProfile?.company_profile_path ? (
          <Link
            href={companyProfile.company_profile_path}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent mt-5 text-white px-10 py-2.5 rounded-full hover:bg-primary transition-colors duration-300 font-medium shadow-md text-[15px]"
            >
              Download Company Profile
            </motion.button>
          </Link>
        ) : (
          <p className="text-white mt-5 italic">
            Company profile is not available at the moment.
          </p>
        )}
      </motion.div>
    </section>
  );
};

export default Vision;
