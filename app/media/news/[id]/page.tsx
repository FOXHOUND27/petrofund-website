"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { use } from "react";
import { motion } from "framer-motion"; // ✅ Import Framer Motion

// 🧩 Define the data structure expected from the API
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

// ✅ Main component for displaying a single news post
const Page = ({ params }: { params: Promise<{ id: string }> }) => {
  // Unwrap the params Promise (Next.js 15+ requirement)
  const { id } = use(params);

  // 🧠 Local state
  const [newsInfo, setNewsInfo] = useState<NewsData[] | null>([]); // stores all news
  const [loading, setLoading] = useState(true); // loading state
  const [error, setError] = useState<string | null>(null); // error message
  const [showScrollTop, setShowScrollTop] = useState(false); // controls scroll-to-top button visibility

  // 🪟 Track scroll position for "scroll to top" button
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🌐 Fetch news data from the API when the page loads
  useEffect(() => {
    async function fetchSummary() {
      try {
        const res = await fetch("https://innovation.muhoko.org/api/news");
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        const data = await res.json();
        console.log("News", data.data);
        setNewsInfo(data.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchSummary();
  }, []);

  // 🌀 Show loading spinner while fetching data
  if (loading) {
    return (
      <section className="p-8 flex justify-center items-center min-h-screen">
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="relative w-16 h-16"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
          >
            <div className="absolute inset-0 border-4 border-white/20 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-[#F47C20] rounded-full"></div>
          </motion.div>
          <p className="text-lg font-medium text-[#F47C20]">Loading...</p>
        </motion.div>
      </section>
    );
  }

  // ⚠️ Show error message if something goes wrong
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  // 📰 Identify current, previous, and next posts
  const currentIndex = (newsInfo || []).findIndex(
    (news) => news.id === Number(id)
  );
  const post = (newsInfo || [])[currentIndex];
  const prevPost =
    currentIndex > 0 && newsInfo?.[currentIndex - 1]
      ? newsInfo[currentIndex - 1]
      : null;
  const nextPost =
    newsInfo && currentIndex < newsInfo.length - 1
      ? newsInfo[currentIndex + 1]
      : null;

  // 🔼 Scroll-to-top functionality
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // 🚫 Handle invalid post (not found)
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Post not found</h1>
          <Link href="/">
            <Button variant="outline">Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* 📰 Main Article Section */}
      <motion.article
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* 🖼️ Hero Image */}
        <motion.div
          className="relative w-full aspect-[21/10] rounded-2xl overflow-hidden mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Image
            src={post.image_url || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* 🗞️ Title and Snippet */}
        <motion.header
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p
            className="text-lg text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: post.content_snippet }}
          ></p>
          <h1 className="my-2 font-bold mb-4">{post.published_at}</h1>
        </motion.header>

        {/* 📜 Full Article Content */}
        <motion.div
          className="prose prose-lg max-w-none mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div
            dangerouslySetInnerHTML={{ __html: post.full_content_html }}
            className="text-foreground/90 leading-relaxed text-justify"
          ></div>
        </motion.div>

        {/* 🔁 Navigation Buttons (Previous / Next) */}
        <motion.nav
          className="border-t border-border pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {/* Previous Post Button */}
          {prevPost ? (
            <Link href={`/media/news/${prevPost.id}`}>
              <Button
                variant="outline"
                className="w-full flex items-center gap-2"
              >
                <ArrowLeft size={18} /> {prevPost.title}
              </Button>
            </Link>
          ) : (
            <div />
          )}

          {/* Next Post Button */}
          {nextPost ? (
            <Link href={`/media/news/${nextPost.id}`}>
              <Button
                variant="outline"
                className="w-full flex items-center justify-end gap-2"
              >
                {nextPost.title} <ArrowRight size={18} />
              </Button>
            </Link>
          ) : (
            <div />
          )}
        </motion.nav>
      </motion.article>

      {/* ⬆️ Floating Scroll-to-Top Button */}
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 z-50 left-6 w-12 h-12 rounded-full bg-primary text-white shadow-lg flex items-center justify-center"
          aria-label="Scroll to top"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowUp className="w-5 h-5 z-[9999]" />
        </motion.button>
      )}
    </motion.div>
  );
};

export default Page;
