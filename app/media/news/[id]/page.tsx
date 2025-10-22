"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";
import { notFound } from "next/navigation";

const posts = [
  {
    id: "news-1",
    title: "Petrofund Launches New Scholarship Program",
    postImage: "/news/scholarship.jpg",
    summary: "Empowering future leaders in the petroleum industry.",
    content:
      "Petrofund is excited to announce the launch of its new scholarship program, aimed at supporting students pursuing careers in the petroleum sector. The program offers financial assistance, mentorship, and internship opportunities to selected candidates. Applications are now open!",
  },
  {
    id: "news-2",
    title: "Annual Conference Highlights Innovation",
    postImage: "/news/conference.jpg",
    summary: "Showcasing cutting-edge advancements in petroleum technology.",
    content:
      "The annual Petrofund conference brought together industry experts, researchers, and students to discuss the latest innovations in petroleum technology. Keynote speakers shared insights on sustainability, digital transformation, and future trends. The event was a resounding success!",
  },
  {
    id: "news-3",
    title: "Community Outreach Initiative Expands",
    postImage: "/news/outreach.jpg",
    summary: "Strengthening ties with local communities.",
    content:
      "Petrofund's community outreach initiative continues to grow, with new projects focused on education, health, and environmental conservation. Volunteers and partners are making a positive impact across the region, fostering collaboration and goodwill.",
  },
];

export default function Page({ params }: { params: { id: string } }) {
  const postIndex = posts.findIndex((p) => p.id === params.id);
  const post = posts[postIndex];

  if (!post) {
    notFound();
  }

  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <Link href="/media/news">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to News
            </Button>
          </Link>
        </div>
      </div>

      {/* News Detail */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <img
            src={post.postImage}
            alt={post.title}
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
          <h1 className="text-3xl font-bold text-foreground mb-4 md:text-4xl">
            {post.title}
          </h1>
          <p className="text-muted-foreground mb-6">{post.summary}</p>
          <div className="prose prose-lg max-w-none mb-8">
            <p>{post.content}</p>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            {postIndex > 0 ? (
              <Link href={`/media/news/${posts[postIndex - 1].id}`}>
                <Button variant="outline">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                </Button>
              </Link>
            ) : (
              <span />
            )}
            {postIndex < posts.length - 1 ? (
              <Link href={`/media/news/${posts[postIndex + 1].id}`}>
                <Button variant="outline">
                  Next <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            ) : (
              <span />
            )}
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-primary text-white shadow-lg hover:bg-primary/80 transition"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}
