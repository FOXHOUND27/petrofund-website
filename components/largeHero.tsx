"use client";
import Image from "next/image";
import { ArrowUpRight, ChevronRight, MoveUpRight } from "lucide-react";

const LargeHero = () => {
  return (
    <section className="relative bottom-25  w-full h-[600px] sm:h-[700px] md:h-[700px] lg:h-[800px] xl:h-[900px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bottom-25">
        <Image
          src="/SectionImages/HeroImage.png"
          alt="Large Hero Image"
          fill
          priority
          className="object-cover rounded-bl-[25px] rounded-br-[25px] sm:rounded-bl-[35px] sm:rounded-br-[35px] md:rounded-bl-[45px] md:rounded-br-[45px] animate-in fade-in zoom-in-95 duration-1000"
          sizes="100vw"
        />
      </div>

      {/* Overlay with fade-in animation */}
      <div className="absolute inset-0 bottom-25 bg-black/30 rounded-bl-[25px] rounded-br-[25px] sm:rounded-bl-[35px] sm:rounded-br-[35px] md:rounded-bl-[45px] md:rounded-br-[45px] animate-in fade-in duration-700" />

      {/* Hero Text Content */}
      <div className="relative z-20 h-full flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 pt-8 sm:pt-12 md:pt-16">
        <div className="max-w-4xl animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-300">
          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
            Fueling <br /> Namibia's Future
          </h1>
          <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl mt-3 sm:mt-4 md:mt-6 font-light leading-relaxed text-pretty animate-in slide-in-from-bottom-6 fade-in duration-1000 delay-500">
            Your partner in Building Skills through{" "}
            <br className="hidden sm:block" /> Training and Innovation
            Technology.
          </h2>

          {/* Hero Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 md:mt-10 animate-in slide-in-from-bottom-4 fade-in duration-1000 delay-700">
            <button className="group py-3 px-6 sm:py-3 sm:px-7 md:py-4 md:px-8 bg-[#4F3996] flex items-center justify-center gap-x-2 text-white rounded-full text-base sm:text-lg font-medium hover:bg-[#F47C20] transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95">
              <span>Discover the latest from Petrofund</span>
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button className="group py-3 px-6 sm:py-3 sm:px-7 md:py-4 md:px-8 bg-[#4F3996] flex items-center justify-center gap-x-2 text-white rounded-full text-base sm:text-lg font-medium hover:bg-[#F47C20] transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95">
              <span>Esas Portal</span>
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button className="flex md:hidden group py-3 px-6 sm:py-3 sm:px-7 bg-[#4F3996] items-center justify-center gap-x-2 text-white rounded-full text-base sm:text-lg font-medium hover:bg-[#F47C20] transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95">
              <span>CV Builder</span>
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* CV Builder Floating Button */}
      <button className="absolute hidden lg:flex cursor-pointer z-20 bottom-120 right-40 w-[150px] h-[150px] bg-[#F47C20] rounded-full text-white text-xl font-semibold flex-col items-center justify-center shadow-lg hover:scale-125 hover:bg-[#4F3996] hover:shadow-2xl transition-transform duration-300">
        <ArrowUpRight className="w-8 h-8 mt-2" />
        <span>CV Builder</span>
      </button>
    </section>
  );
};

export default LargeHero;
