"use client";
import MiniHero from "@/components/miniHero";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CircleArrowRight } from "lucide-react";
import { motion } from "framer-motion";

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
    content: `Next.js has become one of the most popular frameworks for React applications...`,
  },
  {
    id: "2",
    title: "Using Axios with TypeScript",
    postImage: "/SectionImages/GrayLady.jpg",
    summary:
      "How to fetch data safely in TypeScript using Axios for clean and maintainable code.",
    content: `Axios is a popular HTTP client for JavaScript and TypeScript...`,
  },
  {
    id: "3",
    title: "Petrofund Expands Renewable Energy Initiatives",
    postImage: "/SectionImages/GrayLady.jpg",
    summary:
      "Petrofund invests in solar, wind, and hybrid energy projects across Africa.",
    content: `Petrofund has announced a significant expansion of its renewable energy initiatives...`,
  },
];

const Page = () => {
  return (
    <>
      <MiniHero
        imageSrc="/SectionImages/DesertHero.jpg"
        title="Articles"
        subtitle="Latest articles from us"
      />

      {/* News Posts Section Page */}
      <section className="flex flex-wrap justify-center gap-8 items-center mb-10 px-4 sm:px-6 md:px-8 lg:px-12">
        {/* News Cards */}
        {posts.map((post) => (
          <div
            key={post.id}
            className="p-6 sm:p-8 shadow-xl bg-[#4F3996] w-full sm:w-[90%] md:w-[350px] flex flex-col items-center rounded-tl-[45px] rounded-br-[45px] sm:rounded-tl-[55px] sm:rounded-br-[55px] h-auto sm:h-[500px] shadow-lg"
          >
            <Image
              src={post.postImage}
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
              <p className="text-sm sm:text-base">{post.summary}</p>

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
