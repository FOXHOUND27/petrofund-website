"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Params {
  params: { id: string };
}

export interface Post {
  id: string;
  title: string;
  postImage: string;
  summary: string;
  content: string;
}

const posts: Post[] = [
  {
    id: "1",
    title: "Next.js Tips",
    postImage: "/SectionImages/DesertHero.jpg",
    summary:
      "Learn how to use Next.js efficiently with practical examples and best practices.",
    content: `
Next.js has become one of the most popular frameworks for React applications. Developers love it for its speed, flexibility, and built-in support for SEO and server-side rendering. By using Next.js, you can easily build high-performing web applications that scale effortlessly as your project grows. The framework also integrates seamlessly with TypeScript and modern APIs, allowing developers to create strongly typed and error-free components. 

When used properly, Next.js drastically improves the developer experience while reducing technical debt in large projects. Many companies rely on it to build dashboards, marketing sites, and content-driven platforms that handle millions of users. With continuous updates from Vercel, its ecosystem keeps improving with features like Edge Middleware and App Router, giving developers even more power to build dynamic and optimized experiences.
    `,
  },
  {
    id: "2",
    title: "Using Axios with TypeScript",
    postImage: "/SectionImages/GrayLady.jpg",
    summary:
      "How to fetch data safely in TypeScript using Axios for clean and maintainable code.",
    content: `
Axios is a popular HTTP client for JavaScript and TypeScript, widely used for fetching and posting data between the client and the server. When combined with TypeScript, Axios provides excellent type safety, ensuring that your responses match expected structures and reducing runtime bugs. You can easily define interfaces for your API responses, which helps maintain clean and predictable codebases.

Developers often prefer Axios because of its simplicity and the power of its interceptors, which allow handling authentication, logging, or response formatting globally. When properly configured, Axios can reduce boilerplate and make network requests more consistent across your entire application. Additionally, its promise-based syntax integrates perfectly with async/await, making your data-fetching code clean and modern. Whether you're building a small app or a large enterprise system, Axios remains a trusted and developer-friendly choice for robust TypeScript development.
    `,
  },
  {
    id: "3",
    title: "Petrofund Expands Renewable Energy Initiatives",
    postImage: "/SectionImages/GrayLady.jpg",
    summary:
      "Petrofund invests in solar, wind, and hybrid energy projects across Africa.",
    content: `
Petrofund has announced a significant expansion of its renewable energy initiatives, marking an important milestone in its journey toward sustainability. The organization's investment in solar and wind infrastructure aims to reduce dependency on fossil fuels while promoting long-term environmental responsibility. These initiatives also include educational outreach and partnerships with local universities to drive innovation in green energy technology.

By expanding its portfolio into clean energy, Petrofund demonstrates a forward-thinking commitment to the global energy transition. The company's vision aligns with international sustainability goals and Namibia's ambitions for energy independence. In the coming years, Petrofund plans to increase its renewable footprint even further, investing in hybrid projects that combine solar, wind, and storage technologies to provide consistent and affordable power to communities across the region. This approach positions Petrofund as a leading advocate for clean, inclusive, and future-ready energy solutions in Africa.
    `,
  },
];

const Page = ({ params }: Params) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const currentIndex = posts.findIndex((p) => p.id === params.id);
  const post = posts[currentIndex];

  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Post not found
          </h1>
          <Link href="/">
            <Button variant="outline">Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Article Container */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Hero Image */}
        <div className="relative w-full aspect-[21/9] sm:aspect-[2/1] rounded-2xl overflow-hidden mb-8 sm:mb-12">
          <Image
            src={post.postImage || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Header */}
        <header className="mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight text-balance">
            {post.title}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-pretty">
            {post.summary}
          </p>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12 sm:mb-16">
          <div className="text-foreground/90 leading-relaxed space-y-6 text-justify">
            {post.content.split("\n\n").map((paragraph, index) => (
              <p key={index} className="text-base sm:text-lg">
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <nav className="border-t border-border pt-8 sm:pt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Previous Post */}
            <div>
              {prevPost ? (
                <Link href={`/media/news/${prevPost.id}`}>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent h-auto py-4 px-6 flex flex-col items-start gap-2 hover:bg-accent transition-colors group"
                  >
                    <span className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      <ArrowLeft className="w-4 h-4" />
                      Previous
                    </span>
                    <span className="text-left font-semibold text-foreground line-clamp-2">
                      {prevPost.title}
                    </span>
                  </Button>
                </Link>
              ) : (
                <div className="w-full h-full opacity-0 pointer-events-none">
                  <Button
                    variant="outline"
                    disabled
                    className="w-full bg-transparent"
                  >
                    No previous post
                  </Button>
                </div>
              )}
            </div>

            {/* Next Post */}
            <div>
              {nextPost ? (
                <Link href={`/media/news/${nextPost.id}`}>
                  <Button
                    variant="outline"
                    className="w-full h-auto py-4 px-6 flex flex-col items-end gap-2 hover:bg-accent transition-colors group bg-transparent"
                  >
                    <span className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      Next
                      <ArrowRight className="w-4 h-4" />
                    </span>
                    <span className="text-right font-semibold text-foreground line-clamp-2">
                      {nextPost.title}
                    </span>
                  </Button>
                </Link>
              ) : (
                <div className="w-full h-full opacity-0 pointer-events-none">
                  <Button
                    variant="outline"
                    disabled
                    className="w-full bg-transparent"
                  >
                    No next post
                  </Button>
                </div>
              )}
            </div>
          </div>
        </nav>
      </article>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default Page;
