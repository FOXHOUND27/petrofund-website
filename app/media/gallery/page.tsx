"use client";
import MiniHero from "@/components/miniHero";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";

export interface GalleryImage {
  imageUrl: string;
  caption: string;
  order: number;
}

export interface GalleryCategory {
  categoryId: number;
  categoryName: string;
  thumbnail: string;
  images: GalleryImage[];
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
  const [galleryInfo, setGalleryInfo] = useState<GalleryCategory[] | null>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSummary() {
      try {
        const res = await fetch(
          "https://innovation.muhoko.org/api/gallery-categories"
        );

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setGalleryInfo(data.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchSummary();
  }, []);

  if (loading) {
    return (
      <section className="p-4 md:p-8 lg:p-10 xl:p-12 relative bottom-45 md:bottom-45 lg:bottom-45">
        <div className="flex flex-col items-center justify-center p-5 sm:p-8 md:p-10 lg:p-12 rounded-tl-[45px] sm:rounded-tl-[65px] md:rounded-tl-[75px] lg:rounded-tl-[85px] rounded-br-[45px] sm:rounded-br-[65px] md:rounded-br-[75px] lg:rounded-br-[85px] min-h-[400px]">
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 border-4 border-white/20 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-transparent border-t-[#F47C20] rounded-full animate-spin"></div>
            </div>
            <p className="text-lg font-medium text-[#F47C20]">Loading</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <>
      <MiniHero
        imageSrc="/SectionImages/DesertHero.jpg"
        title="Our Gallery"
        subtitle="View images from our latest events and activities"
      />

      <section className="flex flex-wrap justify-center mb-10 px-4 sm:px-6 md:px-8 lg:px-12">
        {/* News Cards */}
        {galleryInfo?.map((gallery) => (
          <div
            key={gallery.categoryId}
            className="p-6 sm:p-4 w-full sm:w-[90%] md:w-[500px] flex flex-col items-center rounded-tl-[45px] rounded-br-[45px] sm:rounded-tl-[55px] sm:rounded-br-[55px] h-auto sm:h-[500px]"
          >
            <Link
              href={`/media/gallery/${gallery.categoryId}`}
              className="cursor-pointer"
            >
              <Image
                src={gallery?.thumbnail}
                height={500}
                width={500}
                alt="news post image"
                className=" rounded-lg w-full h-56 rounded-tl-[55px] rounded-br-[55px] sm:h-64 md:h-72"
              />
            </Link>

            {/* Text Div */}
            <div className="mt-2 text-center sm:text-left">
              <h1 className="mb-2 text-xl text-[#4F3996]  sm:text-4xl font-semibold">
                {gallery.categoryName}
              </h1>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Page;
