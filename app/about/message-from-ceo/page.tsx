"use client";
import React from "react";
import MainHero from "@/components/mainHero";
import Message from "@/components/message";
import { useState, useEffect } from "react";

export interface profileData {
  id: number;
  about_summary: string;
  executive_summary: string;
  mandate: string;
  vision: string;
  mission: string;
  core_values: string;
  updated_at: string;
}

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
