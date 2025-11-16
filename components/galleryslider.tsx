"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

const GallerySlider = () => {
  const [galleryInfo, setGalleryInfo] = useState<GalleryCategory[] | null>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });

  useEffect(() => {
    async function fetchSummary() {
      try {
        const res = await fetch(`${base_url}/api/gallery-categories`);

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

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

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
      <section className="relative mb-10 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {galleryInfo
              ?.filter((gallery) => gallery.images.length > 0)
              .map((gallery) => (
                <div
                  key={gallery.categoryId}
                  className="flex-[0_0_100%] sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] min-w-0"
                >
                  <div className="p-6 flex flex-col items-center rounded-tl-[45px] rounded-br-[45px] sm:rounded-tl-[55px] sm:rounded-br-[55px] h-full">
                    <Link
                      href={`/media/gallery/${gallery.categoryId}`}
                      className="cursor-pointer w-full"
                    >
                      <Image
                        src={gallery?.thumbnail || "/placeholder.svg"}
                        height={500}
                        width={500}
                        alt="news post image"
                        className="rounded-lg w-full h-56 rounded-tl-[55px] rounded-br-[55px] sm:h-64 md:h-72 object-cover"
                      />
                    </Link>

                    <div className="mt-2 text-center w-full">
                      <h1 className="mb-2 text-xl text-[#4F3996] sm:text-4xl font-semibold">
                        {gallery.categoryName}
                      </h1>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <button
          onClick={scrollPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-[#4F3996]" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-[#4F3996]" />
        </button>
      </section>
    </>
  );
};

export default GallerySlider;
