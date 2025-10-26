"use client";
import Homeposts from "@/components/homeposts";
import MiniHero from "@/components/miniHero";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CircleArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

interface articleData {
  id: number;
  title: string;
  category_id: number;
  category_name: string | null;
  full_content_html: string;
  content_snippet: string;
  image_url: string;
  published_at: string;
}

const Page = () => {
  const [articlesInfo, setArticlesInfo] = useState<articleData[] | null>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSummary() {
      try {
        const res = await fetch("https://innovation.muhoko.org/api/articles");

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        console.log("News", data.data);
        setArticlesInfo(data.data);
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
        title="Latest Articles"
        subtitle="View and read our latest updates"
      />

      {/* News Posts Section Page */}
      <section className="flex flex-wrap justify-center gap-8 items-center mb-10 px-4 sm:px-6 md:px-8 lg:px-12">
        {/* News Cards */}
        {articlesInfo?.map((post) => (
          <div
            key={post.id}
            className="p-6 sm:p-8 lg:h-auto bg-[#4F3996] w-full sm:w-[90%] md:w-[350px] flex flex-col items-center rounded-tl-[45px] rounded-br-[45px] sm:rounded-tl-[55px] sm:rounded-br-[55px] h-auto sm:h-[500px] shadow-lg"
          >
            <Image
              src={post.image_url}
              height={350}
              width={350}
              alt="news post image"
              className="object-cover rounded-lg w-full h-56 sm:h-64 md:h-72"
            />

            {/* Text Div */}
            <div className="mt-6 text-white text-center sm:text-left">
              <h1 className="mb-2 text-lg sm:text-xl font-semibold">
                {post.title}
              </h1>
              <div
                className="text-sm sm:text-base text-justify"
                dangerouslySetInnerHTML={{ __html: post.content_snippet }}
              ></div>

              <div className="flex justify-center sm:justify-start">
                <Link href={`/media/articles/${post.id}`}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary flex items-center gap-x-2 sm:gap-x-4 text-white my-5 px-6 sm:px-8 xl:px-10 py-2 sm:py-2.5 rounded-full hover:bg-accent transition-colors duration-300 font-medium shadow-md text-sm sm:text-[15px]"
                  >
                    Read More
                    <CircleArrowRight size={18} />
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Page;
