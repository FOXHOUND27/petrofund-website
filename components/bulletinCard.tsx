"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CircleArrowRight } from "lucide-react";

interface NewsCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

interface NewsData {
  id: number;
  title: string;
  content_snippet: string;
  image_url: string;
}

export function NewsCard({ image_url, title, content_snippet, id }: NewsData) {
  return (
    <div className="bg-[#4F3996] w-full max-w-[400px] md:w-[400px] h-auto md:h-[520px] rounded-tl-[85px] overflow-hidden">
      {/* FIXED IMAGE HEIGHT */}
      <div className="w-full h-[200px] md:h-[250px] overflow-hidden rounded-tl-[85px]">
        <Image
          src={image_url}
          alt={title}
          width={400}
          height={250}
          className="w-full h-full object-cover object-top"
        />
      </div>

      <div className="p-5">
        <h1 className="text-white font-semibold mb-2 text-sm md:text-sm line-clamp-2">
          {title}
        </h1>

        <div
          className="text-white text-justify text-xs md:text-xs leading-relaxed line-clamp-5"
          dangerouslySetInnerHTML={{ __html: content_snippet }}
        ></div>

        <Link href={`/media/news/${id}`}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary flex gap-x-3 items-center text-white my-5 px-8 xl:px-10 py-2.5 rounded-full hover:bg-accent transition-colors duration-300 font-medium shadow-md text-[13px]"
          >
            Read More
            <CircleArrowRight size={16} />
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
