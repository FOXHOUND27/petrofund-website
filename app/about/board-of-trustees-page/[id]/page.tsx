"use client";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Linkedin, Mail, Twitter } from "lucide-react";
import { useState, useEffect } from "react";

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
  updated_at: string; // Could be `Date` if you parse it
}

const executives = {
  "sarah-johnson": {
    name: "Sarah Johnson",
    title: "Chief Executive Officer",
    image: "/Icons/person.svg",
    bio: "Leading the company with vision and strategic excellence.",
    fullBio: [
      "Sarah Johnson brings over 20 years of executive leadership experience to her role as CEO. With a proven track record of driving organizational transformation and sustainable growth, she has positioned the company as an industry leader.",
      "Prior to joining our organization, Sarah held senior leadership positions at Fortune 500 companies, where she spearheaded digital transformation initiatives and led teams of over 5,000 employees across multiple continents.",
      "She holds an MBA from Harvard Business School and a Bachelor's degree in Economics from Stanford University. Sarah is passionate about fostering inclusive workplace cultures and mentoring the next generation of leaders.",
    ],
    education: [
      "MBA, Harvard Business School",
      "B.A. Economics, Stanford University",
    ],
    experience: [
      "CEO, Current Company (2020 - Present)",
      "COO, Tech Innovations Inc. (2015 - 2020)",
      "VP of Strategy, Global Solutions Corp. (2010 - 2015)",
    ],
    contact: {
      email: "sarah.johnson@company.com",
      linkedin: "linkedin.com/in/sarahjohnson",
      twitter: "@sarahjohnson",
    },
  },
  "michael-chen": {
    name: "Michael Chen",
    title: "Chief Technology Officer",
    image: "/Icons/person.svg",
    bio: "Driving innovation and technological advancement.",
    fullBio: [
      "Michael Chen is a visionary technology leader with 15+ years of experience in software engineering, cloud architecture, and AI/ML implementation. As CTO, he oversees all technology strategy and product development.",
      "Michael has led the development of award-winning platforms that serve millions of users globally. His expertise in scalable systems and emerging technologies has been instrumental in the company's digital transformation.",
      "He is a frequent speaker at technology conferences and has published numerous papers on distributed systems and machine learning. Michael holds a Ph.D. in Computer Science from MIT.",
    ],
    education: [
      "Ph.D. Computer Science, MIT",
      "M.S. Computer Science, Carnegie Mellon University",
      "B.S. Computer Engineering, UC Berkeley",
    ],
    experience: [
      "CTO, Current Company (2019 - Present)",
      "VP of Engineering, CloudTech Systems (2014 - 2019)",
      "Senior Software Architect, Innovation Labs (2009 - 2014)",
    ],
    contact: {
      email: "michael.chen@company.com",
      linkedin: "linkedin.com/in/michaelchen",
      twitter: "@michaelchen",
    },
  },
  "emily-rodriguez": {
    name: "Emily Rodriguez",
    title: "Chief Financial Officer",
    image: "/Icons/person.svg",
    bio: "Ensuring financial stability and sustainable growth.",
    fullBio: [
      "Emily Rodriguez is a strategic financial leader with extensive experience in corporate finance, M&A, and investor relations. As CFO, she manages all financial operations and drives strategic planning initiatives.",
      "With a background in investment banking and private equity, Emily brings a unique perspective to financial management. She has successfully led multiple funding rounds and strategic acquisitions that have accelerated company growth.",
      "Emily is a CPA and holds an MBA from Wharton School of Business. She serves on the board of several non-profit organizations focused on financial literacy.",
    ],
    education: [
      "MBA, Wharton School of Business",
      "B.S. Accounting, University of Texas at Austin",
      "Certified Public Accountant (CPA)",
    ],
    experience: [
      "CFO, Current Company (2018 - Present)",
      "VP of Finance, Growth Ventures (2013 - 2018)",
      "Director of Corporate Development, Investment Partners (2008 - 2013)",
    ],
    contact: {
      email: "emily.rodriguez@company.com",
      linkedin: "linkedin.com/in/emilyrodriguez",
      twitter: "@emilyrodriguez",
    },
  },
  "david-thompson": {
    name: "David Thompson",
    title: "Chief Operating Officer",
    image: "/Icons/person.svg",
    bio: "Optimizing operations and driving efficiency.",
    fullBio: [
      "David Thompson is an operations expert with a passion for process optimization and organizational excellence. As COO, he oversees all operational functions and ensures seamless execution of business strategies.",
      "David has a proven track record of implementing lean methodologies and driving operational efficiency across global organizations. His leadership has resulted in significant cost savings and improved customer satisfaction.",
      "He holds a Master's degree in Operations Management from Northwestern University and is a certified Six Sigma Black Belt.",
    ],
    education: [
      "M.S. Operations Management, Northwestern University",
      "B.S. Industrial Engineering, Georgia Tech",
      "Six Sigma Black Belt Certification",
    ],
    experience: [
      "COO, Current Company (2017 - Present)",
      "VP of Operations, Manufacturing Solutions (2012 - 2017)",
      "Director of Process Improvement, Efficiency Corp. (2007 - 2012)",
    ],
    contact: {
      email: "david.thompson@company.com",
      linkedin: "linkedin.com/in/davidthompson",
      twitter: "@davidthompson",
    },
  },
  "lisa-martinez": {
    name: "Lisa Martinez",
    title: "Chief Marketing Officer",
    image: "/Icons/person.svg",
    bio: "Building brand presence and market leadership.",
    fullBio: [
      "Lisa Martinez is a creative marketing strategist with expertise in brand development, digital marketing, and customer engagement. As CMO, she leads all marketing initiatives and brand positioning efforts.",
      "Lisa has successfully launched numerous award-winning campaigns that have significantly increased brand awareness and customer acquisition. Her data-driven approach to marketing has consistently delivered exceptional ROI.",
      "She holds an MBA in Marketing from Columbia Business School and has been recognized as one of the top marketing executives in the industry.",
    ],
    education: [
      "MBA Marketing, Columbia Business School",
      "B.A. Communications, UCLA",
    ],
    experience: [
      "CMO, Current Company (2019 - Present)",
      "VP of Marketing, Brand Innovators (2014 - 2019)",
      "Director of Digital Marketing, Creative Agency (2009 - 2014)",
    ],
    contact: {
      email: "lisa.martinez@company.com",
      linkedin: "linkedin.com/in/lisamartinez",
      twitter: "@lisamartinez",
    },
  },
  "james-wilson": {
    name: "James Wilson",
    title: "Chief Human Resources Officer",
    image: "/Icons/person.svg",
    bio: "Cultivating talent and organizational culture.",
    fullBio: [
      "James Wilson is a people-focused leader dedicated to building high-performing teams and fostering inclusive workplace cultures. As CHRO, he oversees all aspects of human resources, talent acquisition, and organizational development.",
      "James has implemented innovative HR programs that have significantly improved employee engagement, retention, and diversity. His strategic approach to talent management has been key to the company's success.",
      "He holds a Master's degree in Human Resources Management from Cornell University and is a certified Senior Professional in Human Resources (SPHR).",
    ],
    education: [
      "M.S. Human Resources Management, Cornell University",
      "B.A. Psychology, University of Michigan",
      "Senior Professional in Human Resources (SPHR)",
    ],
    experience: [
      "CHRO, Current Company (2018 - Present)",
      "VP of Human Resources, People First Inc. (2013 - 2018)",
      "Director of Talent Management, Workforce Solutions (2008 - 2013)",
    ],
    contact: {
      email: "james.wilson@company.com",
      linkedin: "linkedin.com/in/jameswilson",
      twitter: "@jameswilson",
    },
  },
};

interface TrusteePageProps {
  params: { id: string };
}

export default function ExecutiveDetailPage({ params }: TrusteePageProps) {
  const { id } = params;
  const [trustee, setTrustee] = useState<Trustee[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchExecutives() {
      try {
        const res = await fetch("https://innovation.muhoko.org/api/trustees");

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setTrustee(data.data); // assuming API returns { data: [...] }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchExecutives();
  }, []);

  if (loading) {
    return (
      <section className="p-4 md:p-8 lg:p-10 xl:p-12 relative bottom-45 md:bottom-45 lg:bottom-45">
        <div className="flex flex-col items-center justify-center p-5 sm:p-8 md:p-10 lg:p-12 rounded-tl-[45px] sm:rounded-tl-[65px] md:rounded-tl-[75px] lg:rounded-tl-[85px] rounded-br-[45px] sm:rounded-br-[65px] md:rounded-br-[75px] lg:rounded-br-[85px] min-h-[400px]">
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 border-4 border-white/20 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-transparent border-t-[#F47C20] rounded-full animate-spin"></div>
            </div>
            <p className="text-lg font-medium text-[#F47C20]">Loading</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) return <p className="text-red-500">Error: {error}</p>;

  // Find the executive by id
  const Trustee = trustee?.find((e) => e.id === Number(id)) ?? null;

  if (!Trustee) {
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
                  src={Trustee.profile_image_url || "/placeholder.svg"}
                  alt={Trustee.full_name}
                  className="w-full object-contain rounded-lg"
                />
              </div>

              <div className="mt-8">
                <h1 className="text-3xl font-bold text-foreground md:text-4xl">
                  {Trustee.full_name}
                </h1>
                <p className="mt-2 text-lg font-medium text-accent">
                  {Trustee.position}
                </p>

                {/* Contact Information */}
                <div className="mt-8 space-y-4">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Contact
                  </h3>
                  <div className="space-y-3">
                    <a
                      href={`mailto:${Trustee.email}`}
                      className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                      <span className="text-sm">{Trustee.email}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="lg:col-span-3 space-y-12">
            {/* Biography */}
            <div>
              <h2 className="text-4xl text-[#F47C20] font-bold  mb-6">
                Biography
              </h2>
              <div
                dangerouslySetInnerHTML={{ __html: Trustee.full_bio_html }}
                className="space-y-4 text-muted-foreground text-justify leading-relaxed"
              ></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
