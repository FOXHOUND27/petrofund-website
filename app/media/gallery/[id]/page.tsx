"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export interface GalleryImage {
  imageUrl: string;
  caption: string;
  order: number;
}

export interface GalleryCategory {
  categoryId: number;
  categoryName: string;
  thumbnail: string | null;
  images: GalleryImage[];
}

const galleryApiData: GalleryCategory[] = [
  {
    categoryId: 2,
    categoryName: "Website Launch",
    thumbnail:
      "https://innovation.muhoko.org/public/uploads/images/gallery/XaoXQO0EKJf7jXowKMZ2pBsH3orYjjPSOzajO3fx.jpg",
    images: [
      {
        imageUrl:
          "https://innovation.muhoko.org/public/uploads/images/gallery/XaoXQO0EKJf7jXowKMZ2pBsH3orYjjPSOzajO3fx.jpg",
        caption: "Image 1",
        order: 0,
      },
      {
        imageUrl:
          "https://innovation.muhoko.org/public/uploads/images/gallery/SSagxV3RT2L2sf8tYrvdVQzdpwMOrTxbiSd9ysRu.jpg",
        caption: "Image 2",
        order: 0,
      },
      {
        imageUrl:
          "https://innovation.muhoko.org/public/uploads/images/gallery/1lmFAdbAeAxJ6VGrotatB2Udma8ZfP6vLhuamBee.jpg",
        caption: "Image 3",
        order: 0,
      },
    ],
  },
  {
    categoryId: 3,
    categoryName: "Namibian Landscapes",
    thumbnail: null,
    images: [],
  },
  {
    categoryId: 4,
    categoryName: "Oil and Gas Event",
    thumbnail:
      "https://innovation.muhoko.org/public/uploads/images/gallery/6V8NTob0wdWd6ldc3zu8cMOPEW101izF3UG3Bgzx.jpg",
    images: [
      {
        imageUrl:
          "https://innovation.muhoko.org/public/uploads/images/gallery/6V8NTob0wdWd6ldc3zu8cMOPEW101izF3UG3Bgzx.jpg",
        caption: "Image 1",
        order: 0,
      },
      {
        imageUrl:
          "https://innovation.muhoko.org/public/uploads/images/gallery/zQcwTmRl6GdF30vDkjss0IWttPcUNtiYsIo7dxOf.jpg",
        caption: "Image",
        order: 0,
      },
      {
        imageUrl:
          "https://innovation.muhoko.org/public/uploads/images/gallery/hOtYLNP7sC5U0LKrE7XziP5pdT3h2KQdslVB03F6.jpg",
        caption: "Image",
        order: 0,
      },
    ],
  },
];

export default function GalleryDetailPage() {
  const params = useParams();
  const router = useRouter();
  const galleryId = Number(params.id);

  // 🧠 Local state
  const [galleryInfo, setGalleryInfo] = useState<GalleryCategory[] | null>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 🌐 Fetch all news
  useEffect(() => {
    async function fetchSummary() {
      try {
        const res = await fetch(
          "https://innovation.muhoko.org/api/gallery-categories"
        );
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        const data = await res.json();
        setGalleryInfo(data.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchSummary();
  }, []);

  // 🌀 Loading UI
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

  // ⚠️ Error display
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  const gallery = galleryInfo?.find((g) => g.categoryId === galleryId);

  if (!gallery) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Gallery not found
          </h1>
          <Button onClick={() => router.push("/")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Galleries
          </Button>
        </div>
      </div>
    );
  }

  const galleryItems = gallery.images.map((image) => ({
    original: image.imageUrl,
    thumbnail: image.imageUrl,
    description: image.caption,
  }));

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <Link href="/media/gallery">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Galleries
            </Button>
          </Link>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            {gallery.categoryName}
          </h1>
          <p className="mt-2 text-muted-foreground">
            {gallery.images.length} images
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto rounded-lg bg-card p-4 shadow-xl">
          <ImageGallery
            items={galleryItems}
            showPlayButton={false}
            showFullscreenButton={true}
            showIndex={true}
            slideDuration={300}
          />
        </div>
      </main>
    </div>
  );
}
