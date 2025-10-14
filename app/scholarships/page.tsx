import MainHero from "@/components/mainHero";
import ScholarshipsHeader from "@/components/scholarshipsHeader";
import React from "react";

const Page = () => {
  return (
    <>
      <MainHero
        imageSrc="/SectionImages/GrayLady.jpg"
        title="Scholarships"
        subtitle="Explore the various scholarships available to support your education and career development."
      />
      <ScholarshipsHeader />
    </>
  );
};

export default Page;
