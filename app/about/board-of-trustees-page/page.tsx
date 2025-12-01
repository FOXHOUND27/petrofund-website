"use client";
import Link from "next/link";
import { ArrowRight, Mail, Linkedin } from "lucide-react";
import MiniHero from "@/components/miniHero";
import { useState, useEffect } from "react";
import { base_url } from "@/components/data/data";
import Image from "next/image";
import { motion } from "framer-motion";
import ManagementHeader from "@/components/boardheader";

interface Trustee {
  id: number;
  first_name: string;
  last_name: string;
  full_name: string;
  position: string;
  email: string;
  phone: string;
  full_bio_html: string;
  bio_snippet: string;
  profile_image_url: string;
  is_active: boolean;
  updated_at: string;
}

export default function TrusteesTeamPage() {
  const [trustees, setTrustees] = useState<Trustee[] | null>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSummary() {
      try {
        const res = await fetch(`${base_url}/api/trustees`);

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setTrustees(data.data ?? []);
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
        <div className="flex flex-col items-center justify-center p-5 sm:p-8 md:p-10 lg:p-12 min-h-[400px]">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 border-4 border-white/20 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-[#F47C20] rounded-full animate-spin"></div>
          </div>
          <p className="text-lg font-medium text-[#F47C20] mt-4">Loading...</p>
        </div>
      </section>
    );
  }

  if (error) return <p className="text-red-500 text-center">Error: {error}</p>;

  return (
    <>
      <MiniHero
        imageSrc="/SectionImages/DesertHero.jpg"
        title="Board of Trustees"
        subtitle="Guiding the Vision and Governance of Petrofund"
      />

      <ManagementHeader
        title="Our Board Of Trustees"
        subtitle="Provide strategic oversight and governance for PetroFunds, ensuring accountability, transparency, and alignment with the organization’s mission. Guide policy decisions, monitor financial performance, and safeguard the long-term sustainability of the fund’s investments."
      />

      <div className="min-h-screen bg-background">
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid gap-8 max-w-5xl mx-auto">
            {trustees && trustees.length > 0 ? (
              trustees.map((trustee, index) => (
                <motion.div
                  key={trustee.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Image Section */}
                  <div className="md:w-64 lg:w-72 flex-shrink-0">
                    <div className="relative h-64 md:h-full w-full">
                      <Image
                        src={trustee.profile_image_url || "/Icons/person.svg"}
                        alt={trustee.full_name}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-[#4F3996] mb-2">
                        {trustee.full_name}
                      </h3>
                      <p className="text-lg font-medium text-[#4F3996] mb-4">
                        {trustee.position}
                      </p>

                      {/* Social Icons */}
                      <div className="flex gap-3 mb-6">
                        {trustee.email && (
                          <a
                            href={`mailto:${trustee.email}`}
                            className="w-10 h-10 bg-[#4F3996] text-white rounded flex items-center justify-center hover:bg-[#F47C20] transition-colors duration-300"
                          >
                            <Mail size={20} />
                          </a>
                        )}
                        <a
                          href="#"
                          className="w-10 h-10 bg-[#4F3996] text-white rounded flex items-center justify-center hover:bg-[#F47C20] transition-colors duration-300"
                        >
                          <Linkedin size={20} />
                        </a>
                      </div>

                      <p className="text-gray-700 leading-relaxed text-justify mb-6">
                        {trustee.bio_snippet}
                      </p>
                    </div>

                    {/* Read More Button */}
                    <div>
                      <Link
                        href={`/about/board-of-trustees-page/${trustee.id}`}
                      >
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="bg-[#F47C20] text-white px-8 py-3 rounded-full font-medium hover:bg-[#4F3996] transition-colors duration-300 flex items-center gap-2 shadow-md"
                        >
                          Read More
                          <ArrowRight size={18} />
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full flex justify-center">
                <p className="w-full text-center text-lg text-muted-foreground mt-12">
                  No trustee information is currently available. Please check
                  back later.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
