import AboutLogo from "@/components/aboutLogo";
import AboutText from "@/components/aboutText";
import MainHero from "@/components/mainHero";
import Values from "@/components/values";
import React from "react";

const About = () => {
  return (
    <>
      <MainHero
        imageSrc="/SectionImages/Team.jpg"
        title="About Us"
        subtitle="Learn more about our team and mission."
      />
      <AboutText />
      <Values />
      <AboutLogo />
    </>
  );
};

export default About;
