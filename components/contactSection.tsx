"use client";
import React from "react";
import "leaflet/dist/leaflet.css";
import Image from "next/image";

const ContactSection = () => {
  return (
    <section className="h-auto">
      {/* Second Div */}
      <div className="bg-[#F47C20] top-20 lg:h-[400px] mb-10 mt-10 shadow-2xl flex flex-col lg:flex-row items-center justify-center p-5 sm:p-8 md:p-10 lg:p-12 rounded-tl-[45px] sm:rounded-tl-[65px] md:rounded-tl-[75px] lg:rounded-tl-[85px] rounded-br-[45px] sm:rounded-br-[65px] md:rounded-br-[75px] lg:rounded-br-[85px] w-full max-w-[95%] mx-auto gap-y-10 lg:gap-y-0">
        {/* Shoki Image - hidden on mobile */}
        <div className="hidden sm:flex justify-center lg:justify-start w-full lg:w-1/2">
          <Image
            src="/SectionImages/shoki.png"
            height={400}
            width={400}
            alt="Shoki Image"
            className="relative bottom-0 lg:bottom-[105px] max-w-full h-auto"
          />
        </div>

        {/* Text Content */}
        <div className="text-center lg:text-left w-full lg:w-1/2 px-2 sm:px-5">
          <h1 className="text-white text-xl sm:text-lg md:text-xl font-semibold">
            For Communications and <br className="hidden sm:block" />
            Stakeholder Engagement Enquiries
          </h1>

          <h1 className="text-white my-5 text-sm sm:text-base md:text-md">
            Mr. Shoki Kandjimi <br className="sm:hidden" />
            Communications and Stakeholder Engagement Lead
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-x-5 gap-y-3 sm:gap-y-0">
            <Image
              src="/Icons/Send Email.png"
              width={25}
              height={25}
              alt="email"
              className="mx-auto sm:mx-0"
            />
            <h2 className="text-white font-semibold text-sm sm:text-sm break-words">
              petrofund@namcor.com.na
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-x-5 mt-5 gap-y-3 sm:gap-y-0">
            <Image
              src="/Icons/Rotary Dial Telephone.png"
              width={25}
              height={25}
              alt="phone"
              className="mx-auto sm:mx-0"
            />
            <h2 className="text-white font-semibold text-sm sm:text-sm">
              Tel: +264 61 400 443
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
