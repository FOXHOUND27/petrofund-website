import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import MiniHero from "@/components/miniHero";

const executives = [
  {
    id: "sarah-johnson",
    name: "Sarah Johnson",
    title: "Chief Executive Officer",
    image: "/Icons/person.svg",
    bio: "Leading the company with vision and strategic excellence.",
  },
  {
    id: "michael-chen",
    name: "Michael Chen",
    title: "Chief Technology Officer",
    image: "/Icons/person.svg",
    bio: "Driving innovation and technological advancement.",
  },
  {
    id: "emily-rodriguez",
    name: "Emily Rodriguez",
    title: "Chief Financial Officer",
    image: "/Icons/person.svg",
    bio: "Ensuring financial stability and sustainable growth.",
  },
  {
    id: "david-thompson",
    name: "David Thompson",
    title: "Chief Operating Officer",
    image: "/Icons/person.svg",
    bio: "Optimizing operations and driving efficiency.",
  },
  {
    id: "lisa-martinez",
    name: "Lisa Martinez",
    title: "Chief Marketing Officer",
    image: "/Icons/person.svg",
    bio: "Building brand presence and market leadership.",
  },
  {
    id: "james-wilson",
    name: "James Wilson",
    title: "Chief Human Resources Officer",
    image: "/Icons/person.svg",
    bio: "Cultivating talent and organizational culture.",
  },
];

export default function ExecutiveTeamPage() {
  return (
    <>
      <MiniHero
        imageSrc="/SectionImages/DesertHero.jpg"
        title="  Meet Our Executive Team"
        subtitle="    Visionary leaders driving innovation, excellence, and
                sustainable growth across every facet of our organization."
      />
      <div className="min-h-screen bg-background">
        {/* Team Grid */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {executives.map((executive) => (
              <Card
                key={executive.id}
                className="group overflow-hidden bg-[#E6E7E8] transition-all hover:shadow-lg"
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={executive.image || "/placeholder.svg"}
                    alt={executive.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-foreground">
                    {executive.name}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-accent">
                    {executive.title}
                  </p>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {executive.bio}
                  </p>
                  <Link href={`/about/our-management-team/${executive.id}`}>
                    <Button className="mt-6 w-full bg-[#4F3996] text-white font-medium rounded-lg py-2 transition-all duration-300 ease-in-out hover:bg-[#F47C20] hover:scale-[1.02] hover:shadow-lg">
                      View More Information
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
