"use client";
import { motion } from "framer-motion";

const Story = () => {
  return (
    <section className="flex justify-center items-center sm:relative sm:bottom-[20px]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="min-h-[600px] bottom-24 lg:bottom-5  md:min-h-[500px] lg:h-auto relative w-[95%] md:bottom-30 rounded-tl-[85px] bg-[#4F3996] p-8 md:p-12 lg:p-10 shadow-4xl overflow-visible"
      >
        {/* Text Div */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="p-2 md:p-4 relative z-10"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="text-white text-center lg:text-left md:text-left text-2xl md:text-3xl lg:text-4xl font-bold w-full md:w-[80%] lg:w-[50%] mb-4 md:mb-6"
          >
            Story Title
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="text-white text-justify w-full md:w-[100%] lg:w-[640px] space-y-3 md:space-y-4 text-sm md:text-base leading-relaxed"
          >
            <p>
              Established in 1993, the Petroleum Training and Education Fund
              (PETROFUND) was created to promote human capital development in
              Namibia by supporting training in the fields of science,
              information technology, and related disciplines. This is achieved
              primarily through scholarships and assistance in building
              educational institutions.
            </p>
            <p>
              Petrofund is overseen by an independent Board of Trustees
              comprising representatives from key stakeholders, including the
              Ministry of Mines and Energy with the Permanent Secretary serving
              as Chairperson NAMCOR (National Petroleum Corporation of Namibia),
              the Ministry of Education, and various oil exploration companies
              operating in the country.
            </p>
            <p>
              The Fund is mandated under the Petroleum (Exploration and
              Production) Act of 1991, which authorizes the Minister of Mines
              and Energy to enter into agreements with oil exploration companies
              granted licenses in Namibia. These agreements require companies to
              contribute a negotiated financial amount to PETROFUND, ensuring
              sustainable funding for the advancement of skills and capacity in
              the petroleum and energy sectors.
            </p>
          </motion.div>
        </motion.div>

        {/* Image Div */}
        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          src="/SectionImages/OurStoryNew.png"
          alt="Story Image"
          className="hidden overflow-hidden lg:block object-cover absolute bottom-0 left-[100px] h-[800px] w-auto"
        />
      </motion.div>
    </section>
  );
};

export default Story;
