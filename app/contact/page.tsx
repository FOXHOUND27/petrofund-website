"use client";
import MiniHero from "@/components/miniHero";
import { CircleArrowRight, Contact } from "lucide-react";
import React from "react";
import ContactSection from "@/components/contactSection";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <MiniHero
        imageSrc="/SectionImages/DesertHero.jpg"
        title="Contact Us"
        subtitle="Get in touch with us for any inquiries"
      />
      <section className="relative mb-5 sm:mb:10 md:mb-20 lg:mb-30 bottom-5 p-4 md:p-8 lg:p-10 xl:p-12">
        <div className="bg-[#4F3996] shadow-2xl rounded-tl-[85px] flex flex-col md:flex-row overflow-hidden">
          {/* CEO Image */}
          <div className="w-full md:w-[35%] flex-shrink-0">
            <Image
              src="/PetrofundContent/contact.jpeg"
              alt="Contact Image"
              width={600}
              height={600}
              className="w-full h-auto md:h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-[65%] p-6 flex flex-col justify-between ml-0 md:ml-10 my-6 md:my-10">
            <div className="flex flex-col sm:flex-row sm:my-2 justify-start items-start sm:items-center gap-y-4 sm:gap-x-5">
              <Image
                src="/Icons/City Buildings.svg"
                height={65}
                width={65}
                alt="City"
              />
              <h1 className="font-semibold text-white text-base sm:text-lg">
                41 Schanzenweg, Eros, Windhoek, Namibia
              </h1>
            </div>

            {/* Phone */}
            <div className="flex flex-col sm:flex-row sm:my-2 justify-start items-start sm:items-center gap-y-4 sm:gap-x-5">
              <Image
                src="/Icons/Rotary Dial Telephone.svg"
                height={65}
                width={65}
                alt="Phone"
              />
              <h1 className="font-semibold text-white text-base sm:text-lg">
                Tel: +264 61 400 443
              </h1>
            </div>

            {/* Print */}
            <div className="flex flex-col sm:flex-row sm:my-2 justify-start items-start sm:items-center gap-y-4 sm:gap-x-5">
              <Image src="/Icons/Print.svg" height={65} width={65} alt="Fax" />
              <h1 className="font-semibold text-white text-base sm:text-lg">
                Fax: 0886510721
              </h1>
            </div>

            {/* Email */}
            <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-y-4 sm:gap-x-5">
              <Image
                src="/Icons/Send Email.svg"
                height={65}
                width={65}
                alt="Email"
              />
              <h1 className="font-semibold text-white text-base sm:text-lg">
                E-mail: infor@petrofund.org
              </h1>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
};

export default Page;
