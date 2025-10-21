"use client";

import { useParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface GalleryImage {
  id: number;
  url: string;
  title?: string;
  thumbnailUrl?: string;
}

interface Gallery {
  id: number;
  title: string;
  thumbnailUrl: string;
  images: GalleryImage[];
}

const galleryApiData: Gallery[] = [
  {
    id: 1,
    title: "Namibian Landscapes",
    thumbnailUrl: "/SectionImages/CleanYellowLady.jpg",
    images: [
      {
        id: 101,
        url: "/SectionImages/EngineeringRig.png",
        title: "Sand Dunes",
      },
      {
        id: 102,
        url: "/SectionImages/OrangeAndGray.jpg",
        title: "Desert Sunset",
      },
      {
        id: 103,
        url: "/SectionImages/OrangeSuite.png",
        title: "Etosha Park",
      },
    ],
  },
  {
    id: 2,
    title: "PetroEvent",
    thumbnailUrl: "/SectionImages/PetrofundEvent.jpg",
    images: [
      { id: 201, url: "/SectionImages/DesertHero.jpg", title: "Ocean Cliff" },
      { id: 202, url: "/SectionImages/PurpleSky.jpg", title: "Beach Sunset" },
      { id: 203, url: "/SectionImages/PurpleSky.jpg", title: "Harbor" },
    ],
  },
];

export async function generateStaticParams() {
  return galleryApiData.map((gallery) => ({ id: String(gallery.id) }));
}

export default function GalleryDetailPage() {
  const params = useParams();
  const router = useRouter();
  const galleryId = Number(params.id);

  const gallery = galleryApiData.find((g) => g.id === galleryId);

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
    original: image.url,
    thumbnail: image.thumbnailUrl || image.url,
    description: image.title,
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
            {gallery.title}
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
