"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSummary() {
      try {
        const res = await fetch(
          "https://innovation.muhoko.org/api/ceo-message"
        );

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
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
            <h1 className="text-3xl md:text-5xl text-white font-semibold mb-5">
              Message from the <br />
              Chief Executive Officer
            </h1>
            <div
              className="text-white text-justify text-sm md:text-base"
              dangerouslySetInnerHTML={{
                __html: profileSummary?.content || "",
              }}
            ></div>
          </div>

          {/* Footer with CEO name and Logo */}
          <div className="flex flex-col md:flex-row justify-between mt-5 items-center md:items-start">
            <p className="text-white font-semibold text-center md:text-left">
              <div
                dangerouslySetInnerHTML={{
                  __html: profileSummary?.ceo_name || "",
                }}
              ></div>
              <br /> Chief Executive Officer,
              <br /> Petrofund Namibia
            </p>
            <Image
              src="/Logo/SecondLogo.png"
              width={300}
              height={300}
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
