"use client";
import MiniHero from "@/components/miniHero";
import { motion } from "framer-motion";
import { CircleArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export interface GalleryImage {
  id: number; // Unique identifier for the image
  url: string; // Full-size image URL
  title?: string; // Optional title or caption
  thumbnailUrl?: string; // Optional thumbnail URL if different from url
}
export interface Gallery {
  id: number; // Unique identifier for the gallery
  title: string; // Gallery title
  thumbnailUrl: string; // Cover image for the gallery
  images: GalleryImage[]; // Array of images in this gallery
}

const galleryApiData = [
  {
    id: 1,
    title: "Namibian Landscapes",
    thumbnailUrl: "/SectionImages/CleanYellowLady.jpg", // Cover image
    images: [
      {
        id: 101,
        url: "/SectionImages/EngineeringRig.png",
        title: "Sand Dunes",
      },
      {
        id: 102,
        url: "/SectionImages/OrangeAndGray.jpg",
        title: "Desert Sunset",
      },
      {
        id: 103,
        url: "/public/SectionImages/OrangeSuite.png",
        title: "Etosha Park",
      },
    ],
  },
  {
    id: 2,
    title: "Man and Lady",
    thumbnailUrl: "/SectionImages/ManAndLady.jpg",
    images: [
      { id: 201, url: "/SectionImages/DesertHero.jpg", title: "Ocean Cliff" },
      { id: 202, url: "/SectionImages/PurpleSky.jpg", title: "Beach Sunset" },
      { id: 203, url: "/SectionImages/PurpleSky.jpg", title: "Harbor" },
    ],
  },
];

const Page = () => {
  return (
    <>
      <MiniHero
        imageSrc="/SectionImages/DesertHero.jpg"
        title="Our Gallery"
        subtitle="View images from our latest events and activities"
      />

      <section className="flex flex-wrap justify-center items-center mb-10 px-4 sm:px-6 md:px-8 lg:px-12">
        {/* News Cards */}
        {galleryApiData.map((gallery) => (
          <div
            key={gallery.id}
            className="p-6 sm:p-4 w-full sm:w-[90%] md:w-[500px] flex flex-col items-center rounded-tl-[45px] rounded-br-[45px] sm:rounded-tl-[55px] sm:rounded-br-[55px] h-auto sm:h-[500px]"
          >
            <Link
              href={`/media/gallery/${gallery.id}`}
              className="cursor-pointer"
            >
              <Image
                src={gallery.thumbnailUrl}
                height={500}
                width={500}
                alt="news post image"
                className=" rounded-lg w-full h-56 rounded-tl-[55px] rounded-br-[55px] sm:h-64 md:h-72"
              />
            </Link>

            {/* Text Div */}
            <div className="mt-2 text-center sm:text-left">
              <h1 className="mb-2 text-xl text-[#4F3996]  sm:text-4xl font-semibold">
                {gallery.title}
              </h1>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Page;
