import React from "react";
import Image from "next/image";

const LargeHero = () => {
  return (
    <section>
      <Image
        src="/SectionImages/HeroImage.png"
        alt="Large Hero Image"
        layout="fill"
        objectFit="cover"
        className="rounded-bl-[45px] rounded-br-[45px] height-[20%]"
      />

      {/* Hero Text */}
      <div className="z-50 relative text-white p-8 md:p-16 lg:p-20">
        <h1 className="text-6xl">
          Fueling <br /> Namibia’s Future
        </h1>
        <h2 className="text-2xl mt-2 ">
          Your partner in Building Skills through <br /> Training and Innovation
          Technology.
        </h2>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/25 rounded-lg rounded-bl-[45px] rounded-br-[45px]"></div>
    </section>
  );
};

export default LargeHero;
