"use client";
import MainHero from "@/components/mainHero";
import { div } from "framer-motion/client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";

const Page = () => {
  return (
    <>
      <MainHero
        imageSrc="/PetrofundContent/YIOGS2025_43.jpg"
        title="Media"
        subtitle="Our latest media"
      />
    </>
  );
};

export default Page;
