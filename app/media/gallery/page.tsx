"use client";
import MiniHero from "@/components/miniHero";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { base_url } from "@/components/data/data";

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

const ITEMS_PER_PAGE = 6;

const Page = () => {
  const [galleryInfo, setGalleryInfo] = useState<GalleryCategory[] | null>([]);
  const [heroInfo, setHeroInfo] = useState<{
    imageSrc: string;
    title: string;
    subtitle: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch gallery categories
        const res = await fetch(`${base_url}/api/gallery-categories`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        const galleries = data.data ?? [];
        setGalleryInfo(galleries);

        // Fetch hero image for "Gallery"
        const heroRes = await fetch(`${base_url}/api/hero-images`);
        if (!heroRes.ok)
          throw new Error(`HTTP error! status: ${heroRes.status}`);
        const heroData = await heroRes.json();
        const galleryHero = heroData?.data?.find(
          (img: any) => img.page === "Gallery"
        );
        setHeroInfo(
          galleryHero
            ? {
                imageSrc: galleryHero.image_url,
                title: galleryHero.title,
                subtitle: galleryHero.subtitle,
              }
            : {
                imageSrc: "/SectionImages/DesertHero.jpg",
                title: "Our Gallery",
                subtitle: "View images from our latest events and activities",
              }
        );
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const filtered = galleryInfo?.filter((g) => g.images.length > 0) || [];
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const currentData = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  if (loading) {
    return (
      <section className="p-4 md:p-8 lg:p-10 xl:p-12 relative bottom-45">
        <div className="flex flex-col items-center justify-center min-h-[400px] bg-gray-300 animate-pulse" />
      </section>
    );
  }

  if (error) return <p className="text-red-500 text-center">Error: {error}</p>;

  return (
    <>
      {heroInfo && (
        <MiniHero
          imageSrc={heroInfo.imageSrc || "/SectionImages/DesertHero.jpg"}
          title={heroInfo.title}
          subtitle={heroInfo.subtitle}
        />
      )}

      {filtered.length === 0 && (
        <p className="w-full text-center text-xl text-muted-foreground mt-20 mb-20">
          No galleries available at the moment. Please check back later.
        </p>
      )}

      {filtered.length > 0 && (
        <section className="flex flex-wrap justify-center mb-2 px-1 sm:px-2 md:px-3 lg:px-4">
          {currentData.map((gallery) => (
            <div
              key={gallery.categoryId}
              className="p-2 sm:p-1 sm:gap-y-5 w-full sm:w-[90%] md:w-[400px] flex flex-col items-center rounded-tl-[45px] rounded-br-[45px] sm:rounded-tl-[55px] sm:rounded-br-[55px] h-auto sm:h-[380px]"
            >
              <Link
                href={`/media/gallery/${gallery.categoryId}`}
                className="cursor-pointer"
              >
                <Image
                  src={gallery.thumbnail}
                  height={350}
                  width={350}
                  alt="gallery image"
                  className="rounded-lg w-full h-35 rounded-tl-[55px] rounded-br-[55px] sm:h-56 md:h-55"
                />
              </Link>

              <div className="mt-1 text-center sm:text-left">
                <h1 className="mb-0 text-lg text-[#4F3996] sm:text-xl font-semibold">
                  {gallery.categoryName}
                </h1>
              </div>
            </div>
          ))}
        </section>
      )}

      {filtered.length > 0 && totalPages > 1 && (
        <div className="flex justify-center gap-3 pb-16">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="px-4 py-2 bg-[#4F3996] text-white rounded disabled:opacity-40"
          >
            Previous
          </button>

          <span className="px-4 py-2 font-semibold text-[#4F3996]">
            Page {currentPage} of {totalPages}
          </span>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="px-4 py-2 bg-[#4F3996] text-white rounded disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default Page;
