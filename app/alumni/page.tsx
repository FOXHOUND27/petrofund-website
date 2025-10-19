import AlumniHeader from "@/components/alumniHeader";
import MainHero from "@/components/mainHero";
import React from "react";

const Page = () => {
  return (
    <>
      <MainHero
        imageSrc="/SectionImages/alumniHero.jpg"
        title="Alumni"
        subtitle="Celebrating the achievements and journeys of our proud graduates."
      />
      <AlumniHeader />
    </>
  );
};

export default Page;
