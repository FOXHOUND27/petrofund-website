import React from "react";
import Image from "next/image";

const AboutLogo = () => {
  return (
    <section className="p-4 relative  lg:bottom-30 md:p-8 lg:p-10 xl:p-12">
      <div className="bg-[#4F3996] relative bottom-45 md:bottom-45 lg:bottom-15  h-[200px] sm:h-[300px] md:h-[350px] lg:h-[20px] xl:h-[450px] shadow-2xl rounded-tl-[55px] sm:rounded-tl-[65px] md:rounded-tl-[75px] lg:rounded-tl-[85px] rounded-br-[55px] sm:rounded-br-[65px] md:rounded-br-[75px] lg:rounded-br-[85px] flex items-center justify-center">
        <Image
          src="/Logo/SecondLogo.png"
          alt="Petrofund Logo"
          width={400}
          height={400}
          className="p-4 sm:p-5 md:p-6 lg:p-8 w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] h-auto"
        />
      </div>
    </section>
  );
};

export default AboutLogo;
