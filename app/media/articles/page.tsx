"use client";
import MiniHero from "@/components/miniHero";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CircleArrowRight } from "lucide-react";
import { base_url } from "@/components/data/data";

interface ArticleData {
  id: number;
  title: string;
  category_id: number;
  category_name: string | null;
  full_content_html: string;
  content_snippet: string;
  image_url: string;
  attachment_path?: string | null;
  published_at: string;
}

const Page = () => {
  const [articlesInfo, setArticlesInfo] = useState<ArticleData[] | null>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    async function fetchSummary() {
      try {
        const res = await fetch(`${base_url}/api/articles`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
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

  // pagination slicing
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedArticles =
    articlesInfo?.slice(startIndex, startIndex + itemsPerPage) || [];
  const totalPages = Math.ceil((articlesInfo?.length || 0) / itemsPerPage);

  return (
    <>
      <MiniHero
        imageSrc="/SectionImages/DesertHero.jpg"
        title="Latest Articles"
        subtitle="Explore our latest insights and updates"
      />

      {/* Articles Section */}
      <section className="flex flex-wrap justify-center gap-8 items-start mb-10 px-4 sm:px-6 md:px-8 lg:px-12">
        {displayedArticles && displayedArticles.length > 0 ? (
          displayedArticles.map((post) => (
            <div
              key={post.id}
              className="p-6 sm:p-8 bg-[#4F3996] w-full sm:w-[90%] md:w-[350px] flex flex-col justify-between rounded-tl-[45px] rounded-br-[45px] sm:rounded-tl-[55px] sm:rounded-br-[55px] min-h-[280px] shadow-lg"
            >
              {/* Text Div */}
              <div className="text-white text-center sm:text-left w-full flex flex-col justify-between h-full">
                <div>
                  {post.category_name && (
                    <div className="mb-3">
                      <span className="inline-block bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full">
                        {post.category_name}
                      </span>
                    </div>
                  )}
                  <h1 className="mb-2 text-md font-semibold">{post.title}</h1>
                  <div
                    className="text-sm text-justify mb-4"
                    dangerouslySetInnerHTML={{ __html: post.content_snippet }}
                  ></div>
                </div>

                <div className="flex flex-col gap-2 mt-2">
                  <Link href={`/media/articles/${post.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-primary flex items-center justify-center gap-x-2 sm:gap-x-4 text-white px-6 py-2 rounded-full hover:bg-accent transition-colors duration-300 font-medium shadow-md text-sm sm:text-[15px]"
                    >
                      Read More
                      <CircleArrowRight size={18} />
                    </motion.button>
                  </Link>

                  {post.attachment_path && (
                    <a
                      href={post.attachment_path}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="w-full bg-white text-[#4F3996] font-medium px-6 py-2 rounded-full shadow-md hover:bg-gray-200 transition-colors duration-300 text-sm text-center"
                    >
                      Download Attachment
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="my-10 lg:my-20 flex justify-center items-center h-full w-full">
            <p className="w-full text-center text-lg text-muted-foreground mt-12">
              There are currently no articles available. Please check back later
              for updates.
            </p>
          </div>
        )}
      </section>

      {/* Pagination */}
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
