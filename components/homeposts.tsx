"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CircleArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { NewsCard } from "./bulletinCard";
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
}

const Homeposts = () => {
  const [newsInfo, setNewsInfo] = useState<NewsData[] | null>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSummary() {
      try {
        const res = await fetch(`${base_url}/api/news`);

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();

        // ✅ Only take the first 3 posts
        setNewsInfo(data.data.slice(0, 3));
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
    <section>
      <h1 className="text-[#F47C20] text-center text-xl sm:text-xl md:text-xl lg:text-4xl font-semibold">
        The Petrofund Bulletin
      </h1>
      <div className="h-auto flex flex-col md:flex-row justify-center items-center md:items-stretch p-4 sm:p-6 md:p-10 gap-6 md:gap-x-10">
        {newsInfo?.map((newsItem) => (
          <NewsCard key={newsItem.id} {...newsItem} />
        ))}
      </div>
    </section>
  );
};

export default Homeposts;
