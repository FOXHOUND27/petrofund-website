"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CircleArrowRight } from "lucide-react";

const Homeposts = () => {
  return (
    <section>
      <h1 className="text-[#F47C20] text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
        The Petrofund Bulletin
      </h1>
      <div className="h-auto flex flex-col md:flex-row justify-center items-center md:items-stretch p-4 sm:p-6 md:p-10 gap-6 md:gap-x-10">
        {" "}
        {/* First Post */}
        <div className="bg-[#4F3996] w-full max-w-[400px] md:w-[400px] h-auto md:h-[520px] rounded-tl-[85px]">
          <Image
            src="/SectionImages/DesertHero.jpg"
            height={150}
            width={400}
            alt="Post Item"
            className="rounded-tl-[85px] w-full h-auto"
          />
          <div className="p-5">
            <h1 className="text-white font-semibold">News Article 1</h1>
            <p className="text-white text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
              nobis quibusdam fugiat vero modi mollitia, rem voluptate at nemo
              ratione expedita cum ea quis adipisci dolorum totam tenetur
              necessitatibus officiis.
            </p>

            <Link href="/donate">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary flex gap-x-4 text-white my-5 px-8 xl:px-10 py-2.5 rounded-full hover:bg-accent transition-colors duration-300 font-medium shadow-md text-[15px]"
              >
                Read More
                <CircleArrowRight />
              </motion.button>
            </Link>
          </div>
        </div>
        {/* Second Post */}
        <div className="bg-[#4F3996] w-full max-w-[400px] md:w-[400px] h-auto md:h-[520px] rounded-tl-[85px]">
          <Image
            src="/SectionImages/OrangeSuite.png"
            height={150}
            width={400}
            alt="Post Item"
            className="rounded-tl-[85px] w-full h-auto"
          />
          <div className="p-5">
            <h1 className="text-white font-semibold">News Article 1</h1>
            <p className="text-white text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
              nobis quibusdam fugiat vero modi mollitia, rem voluptate at nemo
              ratione expedita cum ea quis adipisci dolorum totam tenetur
              necessitatibus officiis.
            </p>

            <Link href="/donate">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary flex gap-x-4 text-white my-5 px-8 xl:px-10 py-2.5 rounded-full hover:bg-accent transition-colors duration-300 font-medium shadow-md text-[15px]"
              >
                Read More
                <CircleArrowRight />
              </motion.button>
            </Link>
          </div>
        </div>
        {/* Third Post */}
        <div className="bg-[#4F3996] w-full max-w-[400px] md:w-[400px] h-auto md:h-[520px] rounded-tl-[85px]">
          <Image
            src="/SectionImages/ManAndLady.jpg"
            height={150}
            width={400}
            alt="Post Item"
            className="rounded-tl-[85px] w-full h-auto"
          />
          <div className="p-5">
            <h1 className="text-white font-semibold">News Article 1</h1>
            <p className="text-white text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
              nobis quibusdam fugiat vero modi mollitia, rem voluptate at nemo
              ratione expedita cum ea quis adipisci dolorum totam tenetur
              necessitatibus officiis.
            </p>

            <Link href="/donate">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary flex gap-x-4 text-white my-5 px-8 xl:px-10 py-2.5 rounded-full hover:bg-accent transition-colors duration-300 font-medium shadow-md text-[15px]"
              >
                Read More
                <CircleArrowRight />
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homeposts;
