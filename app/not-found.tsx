import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen mb-5 flex items-center justify-center text-[#F47C20] px-4">
      <div className="text-center space-y-8 max-w-2xl">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/Logo/PetroLogo.png"
            alt="Logo"
            width={600}
            height={600}
            className="h-16 w-auto"
          />
        </div>

        {/* 404 Text */}
        <div className="space-y-4">
          <h1 className="text-9xl font-bold tracking-tight">404</h1>
          <div className="h-1 w-32 bg-[#F47C20] mx-auto rounded-full" />
        </div>

        {/* Message */}
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold ">{"Page Not Found"}</h2>
          <p className="text-lg  max-w-md mx-auto leading-relaxed">
            {
              "Oops! The page you're looking for seems to have wandered off. Let's get you back on track."
            }
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-4">
          <Link href="/">
            <Button
              size="lg"
              className="bg-[#F47C20] hover:bg-[#F47C20]/90 text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all hover:scale-105"
            >
              {"Return Home"}
            </Button>
          </Link>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#F47C20]/20 rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#F47C20]/20 rounded-full blur-3xl" />
      </div>
    </div>
  );
}
