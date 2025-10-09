"use client";
import { useState } from "react";
import Image from "next/image";

interface MiniHeroProps {
  imageSrc: string;
  title: string;
  subtitle?: string;
}

const MiniHero: React.FC<MiniHeroProps> = ({ imageSrc, title, subtitle }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section className="relative bottom-25 w-full h-[50vh] sm:h-[35vh] md:h-[40vh] lg:h-[70vh] overflow-hidden mt-0 pt-0">
      {/* Skeleton / Placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-bl-[25px] rounded-br-[25px] sm:rounded-bl-[35px] sm:rounded-br-[35px] md:rounded-bl-[45px] md:rounded-br-[45px]" />
      )}

      {/* Background Image */}
      <div className="absolute inset-0">
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
      <div className="absolute inset-0 bg-black/40 rounded-bl-[25px] rounded-br-[25px] sm:rounded-bl-[35px] sm:rounded-br-[35px] md:rounded-bl-[45px] md:rounded-br-[45px]" />

      {/* Text Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center px-4 sm:px-6 md:px-12">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
          {title}
        </h1>
        {subtitle && (
          <h2 className="text-white text-sm sm:text-base md:text-lg lg:text-xl mt-2 font-light text-center max-w-2xl">
            {subtitle}
          </h2>
        )}
      </div>
    </section>
  );
};

export default MiniHero;
