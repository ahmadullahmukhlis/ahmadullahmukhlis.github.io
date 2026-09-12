import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { HomeServices } from "@/components/HomeServices";
import { HomeFeatured } from "@/components/HomeFeatured";
import { HomeExperience } from "@/components/HomeExperience";
import { Testimonials } from "@/components/Testimonials";
import { CTABand } from "@/components/CTABand";
import {
  SITE_TITLE,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  buildMetadata,
} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  path: "/",
});

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="page-shell">
        <Hero />
        <Ticker />
        <HomeServices />
        <HomeFeatured />
        <HomeExperience />
        <Testimonials />
        <CTABand />
      </main>
      <Footer />
    </>
  );
}