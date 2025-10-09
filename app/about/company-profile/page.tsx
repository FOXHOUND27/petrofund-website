import MainHero from "@/components/mainHero";
import Vision from "@/components/vision";
import React from "react";

const Page = () => {
  return (
    <>
      <MainHero
        imageSrc="/SectionImages/BlueEngineer.jpg"
        title="Company Profile"
        subtitle="Our company profile"
      />
      <Vision />
    </>
  );
};

export default Page;
