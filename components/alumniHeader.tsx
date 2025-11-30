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
              <h1 className="text-white text-center font-semibold text-xl ">
                PETROFUND ALUMNI ASSOCIATION
              </h1>
              <p className="text-justify text-white mt-4 text-sm ">
                The PETROFUND Alumni Association (PAA) is a formal body
                comprising both current and former beneficiaries of PETROFUND
                scholarship programmes. Established in 2004 under a Deed of
                Trust, the Association serves as an important extension of
                PETROFUND’s mandate to foster human capital development within
                Namibia’s petroleum and energy sectors. The PAA is governed by a
                Secretary General and operates in close affiliation with
                PETROFUND.
                <br />
                <br />
                Membership in the Association is open to all PETROFUND scholars,
                with the payment of an annual subscription fee granting full
                membership privileges, including voting rights. Each university
                hosting PETROFUND-sponsored students designates a Student
                Representative, who serves as the primary liaison between the
                student body and the Association.
                <br />
                <br />
                The PAA plays a pivotal role in maintaining a comprehensive
                alumni database, capturing the academic and professional
                achievements of PETROFUND graduates to support the Fund’s
                monitoring, evaluation, and impact reporting efforts. It also
                serves as a platform for dialogue and engagement, enabling
                students to voice their concerns, exchange ideas, and
                participate actively in initiatives that strengthen PETROFUND’s
                scholarship ecosystem and industry linkages.
              </p>

              <a
                href="https://innovation.muhoko.org/student/login"
                target="_blank"
              >
                {" "}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary flex gap-x-4 text-white my-5 px-8 xl:px-10 py-2.5 rounded-full hover:bg-accent transition-colors duration-300 font-medium shadow-md text-[15px]"
                >
                  Visit Alumni Portal
                  <CircleArrowRight />
                </motion.button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AlumniHeader;
