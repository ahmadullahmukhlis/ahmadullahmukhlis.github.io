import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { AmbientCircles } from "@/components/AmbientCircles";
import { CursorHalo } from "@/components/CursorHalo";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, SITE_NAME, SITE_TITLE, SITE_DESCRIPTION, SITE_KEYWORDS, OG_IMAGE, OG_ALT, TWITTER_IMAGE } from "@/lib/seo";
import { PROFILE } from "@/lib/data";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: SITE_TITLE,

  description: SITE_DESCRIPTION,

  keywords: SITE_KEYWORDS,

  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Software Engineering",

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    title: SITE_TITLE,
    description:
      "Full Stack and Fintech Software Engineer building secure web, mobile, desktop, online and offline applications, payment systems and enterprise platforms.",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: OG_ALT }],
  },

  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description:
      "Full Stack and Fintech Software Engineer building secure web, mobile, desktop, online and offline applications, payment systems and enterprise platforms.",
    images: [TWITTER_IMAGE],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const PERSON_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PROFILE.name,
  jobTitle: "Full Stack, Fintech & Software Engineer",
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  email: `mailto:${PROFILE.email}`,
  telephone: `+${PROFILE.phone.replace(/\s/g, "")}`,
  address: { "@type": "PostalAddress", addressLocality: "Kabul", addressCountry: "AF" },
  knowsAbout: SITE_KEYWORDS,
  sameAs: [
    "https://github.com/ahmadullahmukhlis",
    "https://www.linkedin.com/in/ahmadullahmukhlis",
    "https://x.com/ahmadullahmukhi",
  ],
};

const WEBSITE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  inLanguage: "en",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="aura-bg grain min-h-screen antialiased">
        <JsonLd data={PERSON_JSONLD} />
        <JsonLd data={WEBSITE_JSONLD} />
        <AmbientCircles />
        <CursorHalo />
        {children}
      </body>
    </html>
  );
}
