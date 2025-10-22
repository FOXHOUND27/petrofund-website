import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

const executives = {
  "john-smith": {
    name: "John Smith",
    title: "Chairman of the Board",
    image: "/Icons/person.svg",
    bio: "Guiding the board with experience and leadership.",
    education: "MBA, Harvard Business School",
    experience: "20 years in board governance",
    contact: "john.smith@company.com",
  },
  "jane-doe": {
    name: "Jane Doe",
    title: "Board Member",
    image: "/Icons/person.svg",
    bio: "Providing strategic oversight and direction.",
    education: "JD, Yale Law School",
    experience: "18 years in legal and corporate affairs",
    contact: "jane.doe@company.com",
  },
  "robert-brown": {
    name: "Robert Brown",
    title: "Board Member",
    image: "/Icons/person.svg",
    bio: "Expert in financial management and planning.",
    education: "CPA, University of Chicago",
    experience: "22 years in finance",
    contact: "robert.brown@company.com",
  },
  "linda-green": {
    name: "Linda Green",
    title: "Board Member",
    image: "/Icons/person.svg",
    bio: "Specialist in organizational development.",
    education: "PhD, Stanford University",
    experience: "16 years in HR and development",
    contact: "linda.green@company.com",
  },
};

export async function generateStaticParams() {
  return Object.keys(executives).map((id) => ({ id }));
}

export default async function ExecutiveDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const executive = executives[id as keyof typeof executives];

  if (!executive) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <Link href="/about/board-of-trustees-page">
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Board
            </Button>
          </Link>
        </div>
      </div>

      {/* Executive Profile */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Left Column - Image and Contact */}
          <div className="lg:col-span-2">
            <div className="sticky top-8">
              <div className="aspect-square overflow-hidden rounded-lg bg-muted">
                <img
                  src={executive.image || "/placeholder.svg"}
                  alt={executive.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-8">
                <h1 className="text-3xl font-bold text-foreground md:text-4xl">
                  {executive.name}
                </h1>
                <p className="mt-2 text-lg text-muted-foreground">
                  {executive.title}
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  <strong>Education:</strong> {executive.education}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  <strong>Experience:</strong> {executive.experience}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  <strong>Contact:</strong> {executive.contact}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Bio */}
          <div className="lg:col-span-3">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-foreground mb-4">Bio</h2>
              <p className="text-muted-foreground whitespace-pre-line">
                {executive.bio}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
