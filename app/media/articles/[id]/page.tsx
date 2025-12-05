"use client";

import { useState, useEffect, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import sanitizeHtml from "sanitize-html";
import { base_url } from "@/components/data/data";

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

const Page = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);

  const [articlesInfo, setArticlesInfo] = useState<articleData[] | null>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll-to-top visibility
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fetch articles
  useEffect(() => {
    async function fetchSummary() {
      try {
        const res = await fetch(`${base_url}/api/articles`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

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

  if (error) return <p className="text-red-500 text-center">{error}</p>;

  const currentIndex = (articlesInfo || []).findIndex(
    (news) => news.id === Number(id)
  );
  const post = (articlesInfo || [])[currentIndex];
  const prevPost = currentIndex > 0 ? articlesInfo?.[currentIndex - 1] : null;
  const nextPost =
    articlesInfo && currentIndex < articlesInfo.length - 1
      ? articlesInfo[currentIndex + 1]
      : null;

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

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

  // Sanitize article content
  const cleanContent = sanitizeHtml(post.full_content_html, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
      "img",
      "h1",
      "h2",
      "h3",
      "iframe",
      "br",
    ]),
    allowedAttributes: {
      a: ["href", "target", "rel"],
      img: ["src", "alt", "width", "height", "style"],
      iframe: ["src", "width", "height", "allowfullscreen"],
    },
    selfClosing: ["img", "br", "hr"],
    enforceHtmlBoundary: true,
  });

  return (
    <div className="h-auto bg-background">
      <motion.article
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Hero Image */}
        <motion.div
          className="relative w-full aspect-[21/10] rounded-2xl overflow-hidden mb-8 sm:mb-12"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src={post.image_url || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover object-top"
            priority
          />
        </motion.div>

        {/* Header */}
        <motion.header
          className="mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1 className="text-2xl lg:text-2xl font-bold text-foreground mb-4 sm:mb-6 leading-tight text-balance">
            {post.title}
          </h1>
          <div
            dangerouslySetInnerHTML={{ __html: post.content_snippet }}
            className="text-md text-muted-foreground leading-relaxed text-pretty"
          ></div>

          <p className="my-2 font-medium text-sm text-gray-500">
            {new Date(post.published_at).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </motion.header>

        {/* Main Article Content */}
        <motion.div
          className="prose prose-lg max-w-none mb-12 sm:mb-16 
          prose-img:rounded-xl prose-img:mx-auto 
          prose-headings:font-semibold prose-p:leading-relaxed 
          prose-p:my-4 prose-ul:list-disc prose-ul:pl-5 
          prose-ol:list-decimal prose-ol:pl-5 
          prose-a:text-blue-600 hover:prose-a:underline 
          overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div
            dangerouslySetInnerHTML={{ __html: cleanContent }}
            className="text-foreground/90 leading-relaxed text-justify text-sm break-words"
          ></div>
        </motion.div>

        {/* Navigation Buttons */}
        <motion.nav
          className="border-t border-border pt-8 sm:pt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Previous Post */}
            <div>
              {prevPost && (
                <Link href={`/media/articles/${prevPost.id}`}>
                  <Button
                    variant="outline"
                    className="w-full h-auto py-4 px-4 flex flex-col items-start gap-2 hover:bg-accent transition-colors group bg-transparent"
                  >
                    <span className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      <ArrowLeft className="w-4 h-4" />
                      Previous
                    </span>
                  </Button>
                </Link>
              )}
            </div>

            {/* Next Post */}
            <div>
              {nextPost && (
                <Link href={`/media/articles/${nextPost.id}`}>
                  <Button
                    variant="outline"
                    className="w-full h-auto py-4 px-4 flex flex-col items-end gap-2 hover:bg-accent transition-colors group bg-transparent"
                  >
                    <span className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      Next
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </motion.nav>
      </motion.article>

      {/* Scroll-to-top */}
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-[9999] w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95"
          aria-label="Scroll to top"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </div>
  );
};

export default Page;
