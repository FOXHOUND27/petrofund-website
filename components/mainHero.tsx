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
      {/* Skeleton / Placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bottom-25 bg-gray-300 animate-pulse rounded-bl-[25px] rounded-br-[25px] sm:rounded-bl-[35px] sm:rounded-br-[35px] md:rounded-bl-[45px] md:rounded-br-[45px]" />
      )}

      {/* Background Image */}
      <div className="absolute inset-0 bottom-25">
        <Image
          src={imageSrc}
          alt={title || "Hero Image"}
          fill
          onLoadingComplete={() => setIsLoaded(true)}
          className={`object-cover rounded-bl-[25px] rounded-br-[25px] sm:rounded-bl-[35px] sm:rounded-br-[35px] md:rounded-bl-[45px] md:rounded-br-[45px] transition-opacity duration-700 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          sizes="100vw"
          priority={false}
          loading="lazy"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bottom-25 bg-black/45 rounded-bl-[25px] rounded-br-[25px] sm:rounded-bl-[35px] sm:rounded-br-[35px] md:rounded-bl-[45px] md:rounded-br-[45px] animate-in fade-in duration-700" />

      {/* Text Content */}
      <div className="relative z-20 h-full flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 pt-8 sm:pt-12 md:pt-16">
        <div className="max-w-4xl animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-300">
          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
            {title}
          </h1>
          <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl mt-2 sm:mt-2 md:mt-6 font-light leading-relaxed text-pretty animate-in slide-in-from-bottom-6 fade-in duration-1000 delay-500">
            {subtitle}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default MainHero;
