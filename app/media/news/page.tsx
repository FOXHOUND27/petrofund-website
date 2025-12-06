"use client";
import MiniHero from "@/components/miniHero";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CircleArrowRight } from "lucide-react";
import { base_url } from "@/components/data/data";

interface NewsData {
  id: number;
  title: string;
  category_id: number;
  category_name: string | null;
  full_content_html: string;
  content_snippet: string;
  image_url: string;
  published_at: string;
  attachment_path?: string;
}

const Page = () => {
  const [newsInfo, setNewsInfo] = useState<NewsData[] | null>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    async function fetchSummary() {
      try {
        const res = await fetch(`${base_url}/api/news`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setNewsInfo(data.data);
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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNews = newsInfo?.slice(indexOfFirstItem, indexOfLastItem) || [];
  const totalPages = newsInfo ? Math.ceil(newsInfo.length / itemsPerPage) : 0;

  return (
    <>
      <MiniHero
        imageSrc="/SectionImages/DesertHero.jpg"
        title="Latest News"
        subtitle="View and read our latest updates"
      />

      {/* News Posts Section */}
      <section className="flex flex-wrap justify-center gap-8 items-stretch mb-10 px-4 sm:px-6 md:px-8 lg:px-12">
        {currentNews && currentNews.length > 0 ? (
          currentNews.map((news, index) => (
            <motion.div
              key={news.id}
              className="p-6 sm:p-8 shadow-2xl bg-[#4F3996] w-full sm:w-[90%] md:w-[350px] flex flex-col rounded-tl-[45px] rounded-br-[45px] sm:rounded-tl-[55px] sm:rounded-br-[55px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              {/* Image */}
              <div className="w-full h-48 sm:h-56 md:h-64 overflow-hidden rounded-lg mb-4">
                <Image
                  src={news.image_url || "/placeholder.svg"}
                  height={256}
                  width={350}
                  alt="news post image"
                  className="object-cover object-center w-full h-full"
                />
              </div>

              {/* Text & Buttons */}
              <div className="flex flex-col flex-grow">
                <div className="mb-4">
                  <h1 className="mb-1 text-md font-semibold text-white">
                    {news.title}
                  </h1>
                  {news.category_name && (
                    <p className="mb-2 text-xs font-medium text-[#FFD700]">
                      {news.category_name}
                    </p>
                  )}
                  <p className="text-xs text-white text-justify">
                    {news.content_snippet}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                  <Link
                    href={`/media/news/${news.id}`}
                    className="w-full sm:w-auto"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-primary flex items-center justify-center gap-x-2 sm:gap-x-4 text-white px-6 py-2 rounded-full hover:bg-accent transition-colors duration-300 font-medium shadow-md text-sm sm:text-[15px]"
                    >
                      Read More
                      <CircleArrowRight size={18} />
                    </motion.button>
                  </Link>

                  {news.attachment_path && (
                    <a
                      href={news.attachment_path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-accent flex items-center justify-center text-white px-6 py-2 rounded-full hover:bg-primary transition-colors duration-300 font-medium shadow-md text-sm sm:text-[15px]"
                      >
                        Download Attachment
                      </motion.button>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="w-full text-center text-lg text-muted-foreground mt-12">
            There are currently no news posts available. Please check back later
            for updates.
          </p>
        )}
      </section>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-3 mb-10">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded-md font-medium ${
                currentPage === page
                  ? "bg-primary text-white"
                  : "bg-gray-300 text-gray-700"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default Page;
