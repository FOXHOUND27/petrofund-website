import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

const executives = {
  "sarah-johnson": {
    name: "Sarah Johnson",
    title: "Chief Executive Officer",
    image: "/Icons/person.svg",
    bio: "Leading the company with vision and strategic excellence.",
    education: "MBA, Harvard Business School",
    experience: "15 years in executive leadership roles",
    contact: "sarah.johnson@company.com",
  },
  "michael-chen": {
    name: "Michael Chen",
    title: "Chief Technology Officer",
    image: "/Icons/person.svg",
    bio: "Driving innovation and technological advancement.",
    education: "PhD, MIT",
    experience: "12 years in tech innovation",
    contact: "michael.chen@company.com",
  },
  "emily-rodriguez": {
    name: "Emily Rodriguez",
    title: "Chief Financial Officer",
    image: "/Icons/person.svg",
    bio: "Ensuring financial stability and sustainable growth.",
    education: "CPA, Stanford University",
    experience: "10 years in financial management",
    contact: "emily.rodriguez@company.com",
  },
  "david-thompson": {
    name: "David Thompson",
    title: "Chief Operating Officer",
    image: "/Icons/person.svg",
    bio: "Optimizing operations and driving efficiency.",
    education: "MS, Columbia University",
    experience: "14 years in operations",
    contact: "david.thompson@company.com",
  },
  "lisa-martinez": {
    name: "Lisa Martinez",
    title: "Chief Marketing Officer",
    image: "/Icons/person.svg",
    bio: "Building brand presence and market leadership.",
    education: "BA, NYU",
    experience: "11 years in marketing",
    contact: "lisa.martinez@company.com",
  },
  "james-wilson": {
    name: "James Wilson",
    title: "Chief Human Resources Officer",
    image: "/Icons/person.svg",
    bio: "Cultivating talent and organizational culture.",
    education: "MA, Oxford University",
    experience: "13 years in HR",
    contact: "james.wilson@company.com",
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
          <Link href="/about/our-management-team">
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Team
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
