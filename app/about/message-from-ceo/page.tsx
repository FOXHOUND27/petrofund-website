import React from "react";
import MainHero from "@/components/mainHero";
import Message from "@/components/message";

const Page = () => {
  return (
    <>
      <MainHero
        imageSrc="/PetrofundContent/CEOP.jpeg"
        title="Message from the CEO"
        subtitle="A message from our CEO"
      />
      <Message />
    </>
  );
};

export default Page;
