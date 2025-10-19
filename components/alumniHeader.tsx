"use client";
import React from "react";
import Image from "next/image";
import { CircleArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const AlumniHeader = () => {
  return (
    <>
      <section>
        <div className="bg-[#4F3996] relative bottom-35 md:bottom-20 lg:bottom-25 mb-10 shadow-2xl flex flex-col items-center justify-center p-5 sm:p-8 md:p-10 lg:p-12 rounded-tl-[45px] sm:rounded-tl-[65px] md:rounded-tl-[75px] lg:rounded-tl-[85px] rounded-br-[45px] sm:rounded-br-[65px] md:rounded-br-[75px] lg:rounded-br-[85px] w-full max-w-[95%] mx-auto">
          <Image
            src="/Logo/AlumniLogo.png"
            width={300}
            height={300}
            alt="Scholarships Header Logo"
            className="w-48 h-auto sm:w-64 md:w-72 lg:w-[300px]"
          />

          <div className="flex  lg:flex-row mt-10 sm:mt-10 lg:mt-5 relative items-center w-full gap-6 lg:gap-0">
            <div className="w-full ">
              <h1 className="text-white text-center font-semibold text-xl sm:text-2xl lg:text-2xl">
                PETROFUND ALUMNI ASSOCIATION
              </h1>
              <p className="text-justify text-white mt-4 text-sm sm:text-base">
                The PETROFUND Alumni Association (PAA) is an organisation
                comprised of former and current PETROFUND scholarship
                recipients. Established in 2004, the PAA operates under a Deed
                of Trust and is led by a Secretary General.
                <br />
                <br />
                Affiliated with PETROFUND, the association requires members to
                pay a subscription fee in order to obtain voting rights. Each
                participating university appoints a student representative to
                the PAA.
                <br />
                <br />
                Through the PAA, PETROFUND seeks to maintain a comprehensive
                database of the achievements of its alumni. The association also
                functions as a platform for students to raise concerns and
                engage with the PETROFUND office.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary flex gap-x-4 text-white my-5 px-8 xl:px-10 py-2.5 rounded-full hover:bg-accent transition-colors duration-300 font-medium shadow-md text-[15px]"
              >
                Visit Alumni Portal
                <CircleArrowRight />
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AlumniHeader;
