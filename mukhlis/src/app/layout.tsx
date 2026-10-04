import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { CursorHalo } from "@/components/CursorHalo";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { JsonLd } from "@/components/JsonLd";
import {
  SITE_URL,
  SITE_NAME,
  SITE_TITLE,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  PERSON_NAME_VARIANTS,
  PROFESSIONAL_TOPICS,
  PERSON_ID,
  WEBSITE_ID,
  ORGANIZATION_ID,
  GA_MEASUREMENT_ID,
  SOCIAL_DESCRIPTION,
  SOCIAL_IMAGE,
  TWITTER_IMAGE,
  X_HANDLE,
  OG_ALT,
} from "@/lib/seo";
import { PROFILE, SOCIALS } from "@/lib/data";
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
  authors: [{ name: PROFILE.name, url: `${SITE_URL}/author/ahmadullah-mukhlis` }],
  creator: PROFILE.name,
  publisher: SITE_NAME,
  category: "Software Engineering",

  openGraph: {
    title: SITE_TITLE,
    description: SOCIAL_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    images: [SOCIAL_IMAGE],
  },

  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SOCIAL_DESCRIPTION,
    site: X_HANDLE,
    creator: X_HANDLE,
    images: {
      url: TWITTER_IMAGE,
      alt: OG_ALT,
    },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const PERSON_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": PERSON_ID,
  name: PROFILE.name,
  alternateName: PERSON_NAME_VARIANTS.filter((name) => name !== PROFILE.name),
  jobTitle: "Full Stack, Fintech & Software Engineer",
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  email: `mailto:${PROFILE.email}`,
  telephone: `+${PROFILE.phone.replace(/\D/g, "")}`,
  address: { "@type": "PostalAddress", addressLocality: "Kabul", addressCountry: "AF" },
  knowsAbout: PROFESSIONAL_TOPICS,
  sameAs: SOCIALS.filter(({ label }) => ["GitHub", "LinkedIn", "X"].includes(label)).map(({ href }) => href),
};

const WEBSITE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  inLanguage: "en",
  creator: { "@id": PERSON_ID },
  publisher: { "@id": ORGANIZATION_ID },
};

const ORGANIZATION_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/brand/mukhlis-software-solution-mark-transparent.png`,
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
        <JsonLd data={ORGANIZATION_JSONLD} />
        <CursorHalo />
        {children}
        <WhatsAppFloat />
        <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
      </body>
    </html>
  );
}
