import MainHero from "@/components/mainHero";
import Operators from "@/components/operators";
import React from "react";

const Page = () => {
  return (
    <>
      <MainHero
        imageSrc="/SectionImages/BlueTank.jpg"
        title="Pel Operators"
        subtitle="Empowering Operators for a Sustainable Future"
      />
      <Operators />
    </>
  );
};

export default Page;
