"use client";
import { useState } from "react";
import Image from "next/image";

interface MainHeroProps {
  imageSrc: string;
  title: string;
  subtitle: string;
}

const MainHero: React.FC<MainHeroProps> = ({ imageSrc, title, subtitle }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section className="relative bottom-25 w-full h-[600px] sm:h-[700px] md:h-[700px] lg:h-[800px] xl:h-[900px] overflow-hidden">
      {/* Skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 bottom-25 bg-gray-300 animate-pulse rounded-bl-[25px] rounded-br-[25px] sm:rounded-bl-[35px] sm:rounded-br-[35px] md:rounded-bl-[45px] md:rounded-br-[45px]" />
      )}

      {/* Background Image */}
      <div className="absolute inset-0 bottom-25">
        <Image
          src={imageSrc}
          alt="Large Hero Image"
          fill
          priority
          className="object-cover object-top rounded-bl-[25px] rounded-br-[35px] sm:rounded-bl-[35px] sm:rounded-br-[45px] md:rounded-bl-[45px] md:rounded-br-[55px] lg:rounded-bl-[55px] lg:rounded-br-[65px] animate-in fade-in zoom-in-95 duration-1000"
          sizes="100vw"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bottom-25 bg-black/45 rounded-bl-[25px] rounded-br-[25px] sm:rounded-bl-[35px] sm:rounded-br-[35px] md:rounded-bl-[45px] md:rounded-br-[45px] animate-in fade-in duration-700" />

      {/* TEXT — moved to bottom-left + made smaller */}
      <div className="absolute bottom-55 left-6 sm:left-10 z-20 max-w-3xl animate-in slide-in-from-bottom-8 fade-in duration-1000">
        <h1 className="text-white text-2xl sm:text-3xl md:text-6xl font-bold leading-tight">
          {title}
        </h1>
        <h2 className="text-white text-sm sm:text-base md:text-xl mt-2 font-light leading-relaxed animate-in slide-in-from-bottom-6 fade-in duration-1000 delay-200">
          {subtitle}
        </h2>
      </div>
    </section>
  );
};

export default MainHero;
