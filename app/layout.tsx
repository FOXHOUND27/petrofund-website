import type React from "react";
import type { Metadata } from "next";
import { Ubuntu_Sans } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ChatbotWidget from "@/components/chatbot/ChatbotWidget";
import LoadingScreen from "@/components/loadingscreen";
import Script from "next/script";

const ubuntuSans = Ubuntu_Sans({
  subsets: ["latin"],
  variable: "--font-ubuntu-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Petrofund – Empowering Namibia’s Future in Oil & Gas",
  description:
    "Petrofund provides scholarships and training opportunities for Namibians to pursue careers in the oil and gas industry. Our mission is to empower the next generation of professionals with education, skills, and hands-on experience in the petroleum sector.",
  generator: "Petrofund",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${ubuntuSans.variable}`}>
        <Suspense fallback={<LoadingScreen />}>
          <Navbar />
          {children}
          <Footer />
        </Suspense>
        <SpeedInsights />
        <ChatbotWidget />

        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
