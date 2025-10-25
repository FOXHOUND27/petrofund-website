"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-[#4F3996] text-white py-12 md:py-16 lg:py-20 px-5 md:px-8 lg:px-12 rounded-tl-[40px] md:rounded-tl-[60px] lg:rounded-tl-[85px] shadow-[inset_0_4px_6px_rgba(0,0,0,0.1)] transition-all duration-700"
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10 lg:gap-16">
          {/* Logo Column */}
          <div
            className="flex-shrink-0 transition-all duration-700 delay-100 hover:scale-105"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
            }}
          >
            <Image
              src="/Logo/SecondLogo.png"
              width={250}
              height={250}
              alt="Second Petrofund Logo"
              className="w-48 md:w-64 lg:w-[300px] h-auto"
            />
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 w-full lg:w-auto">
            {/* Contact us Column */}
            <div
              className="group transition-all duration-700 delay-200"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
              }}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#F47C20] after:transition-all after:duration-300 group-hover:after:w-full">
                Contact us
              </h3>
              <div className="space-y-2">
                <h2 className="text-sm md:text-base font-semibold transition-all duration-300 hover:translate-x-2 hover:text-[#F47C20]">
                  Elizabeth N Shimwafeni
                </h2>
                <h2 className="text-sm md:text-base font-semibold transition-all duration-300 hover:translate-x-2 hover:text-[#F47C20]">
                  Telephone: +264 61 400 443
                </h2>
                <h2 className="text-sm md:text-base font-semibold transition-all duration-300 hover:translate-x-2 hover:text-[#F47C20]">
                  Fax Number: 0886510721
                </h2>
                <h2 className="text-sm md:text-base font-semibold transition-all duration-300 hover:translate-x-2 hover:text-[#F47C20]">
                  Email: eshimwafeni@namcor.com.na
                </h2>
                <h2 className="text-sm md:text-base font-semibold transition-all duration-300 hover:translate-x-2 hover:text-[#F47C20]">
                  Website: www.petrofund.org
                </h2>
              </div>
            </div>

            {/* QuickLinks Column */}
            <div
              className="group transition-all duration-700 delay-300"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
              }}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#F47C20] after:transition-all after:duration-300 group-hover:after:w-full">
                Quick Links
              </h3>
              <div className="space-y-2">
                <Link href="/about/message-from-ceo">
                  <h2 className="text-sm md:text-base font-semibold cursor-pointer transition-all duration-300 hover:translate-x-2 hover:text-[#F47C20]">
                    Message From Ceo
                  </h2>
                </Link>
                <Link href="/about">
                  <h2 className="text-sm md:text-base font-semibold cursor-pointer transition-all duration-300 hover:translate-x-2 hover:text-[#F47C20]">
                    About Us
                  </h2>
                </Link>
                <Link href="/scholarships">
                  <h2 className="text-sm md:text-base font-semibold cursor-pointer transition-all duration-300 hover:translate-x-2 hover:text-[#F47C20]">
                    Scholarships
                  </h2>
                </Link>
              </div>
            </div>

            {/* Media Column */}
            <div
              className="group transition-all duration-700 delay-[400ms]"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
              }}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#F47C20] after:transition-all after:duration-300 group-hover:after:w-full">
                Media
              </h3>
              <div className="space-y-2">
                <Link href="/media/news">
                  <h2 className="text-sm md:text-base font-semibold cursor-pointer transition-all duration-300 hover:translate-x-2 hover:text-[#F47C20]">
                    Latest News
                  </h2>
                </Link>
                <Link href="/media/articles">
                  <h2 className="text-sm md:text-base font-semibold cursor-pointer transition-all duration-300 hover:translate-x-2 hover:text-[#F47C20]">
                    Latest Articles
                  </h2>
                </Link>
                <Link href="/media/gallery">
                  <h2 className="text-sm md:text-base font-semibold cursor-pointer transition-all duration-300 hover:translate-x-2 hover:text-[#F47C20]">
                    Gallery
                  </h2>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 pt-8 border-t border-white/20">
          <div className="flex flex-col items-center gap-6">
            <h1 className="text-lg md:text-xl font-bold tracking-wide transition-colors duration-300 hover:text-[#F47C20]">
              Connect With Us
            </h1>

            {/* Social Media Links */}
            <div className="flex justify-center items-center gap-4 md:gap-6">
              <a
                href="https://www.facebook.com/petrofund/"
                target="_blank"
                className="group relative transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                aria-label="Facebook"
              >
                <div className="absolute inset-0 bg-[#F47C20] rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                <Image
                  src="/Icons/Facebook Circled.png"
                  width={45}
                  height={45}
                  alt="Facebook Icon"
                  className="relative w-10 h-10 md:w-12 md:h-12 transition-all duration-300 group-hover:brightness-110"
                />
              </a>
              <a
                href="https://x.com/PetrofundNam"
                target="_blank"
                className="group relative transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                aria-label="X (Twitter)"
              >
                <div className="absolute inset-0 bg-[#F47C20] rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                <Image
                  src="/Icons/X.png"
                  width={45}
                  height={45}
                  alt="X Icon"
                  className="relative w-10 h-10 md:w-12 md:h-12 transition-all duration-300 group-hover:brightness-110"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/petrofund-namibia-511756358/"
                target="_blank"
                className="group relative transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <div className="absolute inset-0 bg-[#F47C20] rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                <Image
                  src="/Icons/LinkedIn.png"
                  width={45}
                  height={45}
                  alt="LinkedIn Icon"
                  className="relative w-10 h-10 md:w-12 md:h-12 transition-all duration-300 group-hover:brightness-110"
                />
              </a>
              <a
                href="https://www.instagram.com/petrofund_namibia/?hl=en"
                target="_blank"
                className="group relative transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                aria-label="Instagram"
              >
                <div className="absolute inset-0 bg-[#F47C20] rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                <Image
                  src="/Icons/Instagram.png"
                  width={45}
                  height={45}
                  alt="Instagram Icon"
                  className="relative w-10 h-10 md:w-12 md:h-12 transition-all duration-300 group-hover:brightness-110"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
