import MiniHero from "@/components/miniHero";
import { Contact } from "lucide-react";
import React from "react";
import ContactSection from "@/components/contactSection";

const Page = () => {
  return (
    <>
      <MiniHero
        imageSrc="/SectionImages/DesertHero.jpg"
        title="Contact Us"
        subtitle="Get in touch with us for any inquiries"
      />
      <ContactSection />
    </>
  );
};

export default Page;
