import MainHero from "@/components/mainHero";
import ProgramSection from "@/components/programSection";
import ScholarshipsHeader from "@/components/scholarshipsHeader";
import React from "react";

const Page = () => {
  return (
    <>
      <MainHero
        imageSrc="/PetrofundContent/DSC_6275.jpg"
        title="Scholarships"
        subtitle="Explore the various scholarships available to support your education and career development."
      />
      <ScholarshipsHeader />
      <ProgramSection />
    </>
  );
};

export default Page;
