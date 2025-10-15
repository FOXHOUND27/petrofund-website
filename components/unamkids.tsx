"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { CircleArrowRight } from "lucide-react";

const Unamkids = () => {
  return (
    <section className="relative bottom-5 p-4 md:p-8 lg:p-10 xl:p-12">
      <div className="bg-[#4F3996] shadow-2xl rounded-tl-[85px] flex flex-col md:flex-row overflow-hidden">
        {/* CEO Image */}
        <div className="w-full md:w-[35%] flex-shrink-0">
          <Image
            src="/SectionImages/UnamKids.jpg"
            alt="Unam Kids Image"
            width={600}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-[65%] p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl md:text-5xl text-white font-semibold mb-5">
              PETROFUND UNAM FUND N$127m
            </h1>
            <p className="text-white text-justify text-sm md:text-base">
              Since our establishment in 1993 as the Petroleum Training and
              Education Fund, our mission has been clear: to build national
              capacity for Namibia’s upstream petroleum industry. Over the past
              three decades, we have evolved into a trusted partner in
              developing the skills and knowledge that empower Namibians to
              participate meaningfully in this vital sector.
            </p>
          </div>

          <Link href="/donate">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary flex gap-x-4 text-white my-5 px-8 xl:px-10 py-2.5 rounded-full hover:bg-accent transition-colors duration-300 font-medium shadow-md text-[15px]"
            >
              Read More
              <CircleArrowRight />
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Unamkids;
