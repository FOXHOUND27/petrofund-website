"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

const galleryApiData = [
  {
    id: "gallery-1",
    title: "Annual Conference 2023",
    thumbnailUrl: "/gallery/conference-thumb.jpg",
    images: [
      "/gallery/conference-1.jpg",
      "/gallery/conference-2.jpg",
      "/gallery/conference-3.jpg",
    ],
  },
  {
    id: "gallery-2",
    title: "Community Outreach",
    thumbnailUrl: "/gallery/outreach-thumb.jpg",
    images: [
      "/gallery/outreach-1.jpg",
      "/gallery/outreach-2.jpg",
      "/gallery/outreach-3.jpg",
    ],
  },
  {
    id: "gallery-3",
    title: "Innovation Summit",
    thumbnailUrl: "/gallery/innovation-thumb.jpg",
    images: [
      "/gallery/innovation-1.jpg",
      "/gallery/innovation-2.jpg",
      "/gallery/innovation-3.jpg",
    ],
  },
];

export default function GalleryDetailPage({ params }: { params: { id: string } }) {
  const gallery = galleryApiData.find((g) => g.id === params.id);

  if (!gallery) {
    notFound();
  }

  const [selectedImage, setSelectedImage] = useState(gallery.images[0]);

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <Link href="/media/gallery">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Gallery
            </Button>
          </Link>
        </div>
      </div>

      {/* Gallery Detail */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <h1 className="text-3xl font-bold text-foreground mb-8 md:text-4xl">
          {gallery.title}
        </h1>
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Main Image */}
          <div className="flex flex-col items-center">
            <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
              <img
                src={selectedImage}
                alt={gallery.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-6 flex gap-4">
              {gallery.images.map((img) => (
                <button
                  key={img}
                  onClick={() => setSelectedImage(img)}
                  className={`h-16 w-24 rounded-lg overflow-hidden border-2 ${
                    selectedImage === img ? "border-primary" : "border-transparent"
                  }`}
                >
                  <img src={img} alt={gallery.title} className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Info */}
          <div>
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-foreground mb-4">Gallery Images</h2>
              <ul className="list-disc pl-6">
                {gallery.images.map((img, idx) => (
                  <li key={idx} className="text-muted-foreground">
                    Image {idx + 1}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
