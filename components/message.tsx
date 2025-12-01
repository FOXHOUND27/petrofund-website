"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { base_url } from "@/components/data/data";

interface CEOProfile {
  id: number;
  ceo_name: string;
  ceo_title: string;
  content: string;
  portrait_url: string;
  signature_url: string;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
}

const Message = () => {
  const [profileSummary, setProfileSummary] = useState<CEOProfile | null>(null);
  const [helpMessage, setHelpMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSummary() {
      try {
        const res = await fetch(`${base_url}/api/ceo-message`);

        // Handle 404 explicitly
        if (res.status === 404) {
          setHelpMessage("The CEO message is not available at the moment.");
          return;
        }

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();

        // If API returned null instead of an object
        if (!data?.data) {
          setHelpMessage("The CEO message is not available at the moment.");
        } else {
          setProfileSummary(data.data);
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchSummary();
  }, []);

  // ------------------------
  //      Loading UI
  // ------------------------
  if (loading) {
    return (
      <section className="p-4 md:p-8 lg:p-10 xl:p-12 relative">
        <div className="flex flex-col items-center justify-center p-10">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 border-4 border-white/20 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-[#F47C20] rounded-full animate-spin"></div>
          </div>
          <p className="text-lg font-medium text-[#F47C20] mt-4">Loading</p>
        </div>
      </section>
    );
  }

  // ------------------------
  //      Error UI
  // ------------------------
  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  // ------------------------
  //   Fallback Message UI
  // ------------------------
  if (helpMessage) {
    return (
      <section className="relative bottom-40 p-4 md:p-8 lg:p-10 xl:p-12">
        <motion.div
          className="bg-[#4F3996] shadow-2xl rounded-tl-[85px] p-10 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-semibold mb-5">
            Message from the Chief Executive Officer
          </h1>
          <p className="text-lg md:text-xl opacity-90">{helpMessage}</p>
        </motion.div>
      </section>
    );
  }

  // ------------------------
  //     Normal Render
  // ------------------------
  return (
    <section className="relative bottom-40 p-4 md:p-8 lg:p-10 xl:p-12">
      <motion.div
        className="bg-[#4F3996] shadow-2xl rounded-tl-[85px] flex flex-col md:flex-row overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* CEO Image */}
        <div className="w-full md:w-[35%] flex-shrink-0">
          <Image
            src={profileSummary?.portrait_url ?? "/Icons/person.svg"}
            alt="CEO Image"
            width={600}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-[65%] p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-xl text-white font-semibold mb-5">
              Message from the <br />
              Chief Executive Officer
            </h1>

            <div
              className="text-white text-justify text-sm"
              dangerouslySetInnerHTML={{
                __html: profileSummary?.content || "",
              }}
            ></div>
          </div>

          {/* Footer */}
          <div className="flex flex-col md:flex-row justify-between mt-5 items-center md:items-start">
            <p className="text-white font-semibold text-sm text-center md:text-left">
              <span
                dangerouslySetInnerHTML={{
                  __html: profileSummary?.ceo_name || "",
                }}
              />
              <br /> Chief Executive Officer,
              <br /> Petrofund Namibia
            </p>

            <Image
              src="/Logo/SecondLogo.png"
              width={200}
              height={200}
              alt="Petrofund Logo"
              className="mt-4 md:mt-0"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Message;
