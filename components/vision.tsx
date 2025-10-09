"use client";
import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Vision = () => {
  return (
    <section className="p-4 md:p-8 lg:p-10 xl:p-12 relative bottom-10 sm:bottom-20 md:bottom-28 lg:bottom-32">
      <div className="bg-[#4F3996] relative bottom-35 md:bottom-20 lg:bottom-0 mb-10 shadow-2xl flex flex-col items-center justify-center p-5 sm:p-8 md:p-10 lg:p-12 rounded-tl-[45px] sm:rounded-tl-[65px] md:rounded-tl-[75px] lg:rounded-tl-[85px] rounded-br-[45px] sm:rounded-br-[65px] md:rounded-br-[75px] lg:rounded-br-[85px] w-full max-w-[95%] mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-5 sm:mb-6 md:mb-7 text-center font-semibold">
          Vision
        </h1>

        <p className="text-white text-center text-sm sm:text-base md:text-lg leading-relaxed">
          To be Namibia’s leading catalyst for knowledge and skills development
          in science, technology, and energy-related fields, empowering
          generations for a sustainable and prosperous future.
        </p>
      </div>

      {/* Mandate Section */}
      <div className="bg-[#4F3996] relative bottom-35 md:bottom-10 lg:bottom-0 shadow-2xl flex flex-col items-center justify-center p-5 sm:p-8 md:p-10 lg:p-12 rounded-tl-[45px] sm:rounded-tl-[65px] md:rounded-tl-[75px] lg:rounded-tl-[85px] rounded-br-[45px] sm:rounded-br-[65px] md:rounded-br-[75px] lg:rounded-br-[85px] w-full max-w-[95%] mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-5 sm:mb-6 md:mb-7 text-center font-semibold">
          Mandate
        </h1>

        <p className="text-white text-justify text-sm sm:text-base md:text-lg leading-relaxed">
          The Petroleum Training and Education Fund (PETROFUND) is a statutory
          body of the Government of the Republic of Namibia, established in 1993
          to enhance capacity within the country’s upstream petroleum sector.
          PETROFUND builds capacity through training, institutional development,
          scholarships and the promotion of science, engineering and technology.
          The establishment of PETROFUND aligns with the Petroleum (Exploration
          and Production) Act of 1991. Additionally, PETROFUND is funded by oil
          exploration companies granted exploration rights in Namibia through
          agreements with the Namibian Ministry of Industries, Mines and Energy.
        </p>

        {/* Button */}
        <Link href="/donate">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent mt-5 text-white px-8 xl:px-10 py-2.5 rounded-full hover:bg-primary transition-colors duration-300 font-medium shadow-md text-[15px]"
          >
            Downloand Company Profile
          </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default Vision;
