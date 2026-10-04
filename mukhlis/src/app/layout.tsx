import type { Metadata } from "next";
import localFont from "next/font/local";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { JsonLd } from "@/components/JsonLd";
import {
  SITE_URL,
  SITE_NAME,
  SITE_TITLE,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  PERSON_NAME_VARIANTS,
  SOCIAL_DESCRIPTION,
  SOCIAL_IMAGE,
  TWITTER_IMAGE,
  X_HANDLE,
  OG_ALT,
} from "@/lib/seo";
import { PROFILE } from "@/lib/data";
import "./globals.css";

const archivo = localFont({
  src: "../fonts/archivo-400-800.woff2",
  variable: "--font-archivo",
  weight: "400 800",
  display: "swap",
  fallback: ["system-ui", "Arial", "sans-serif"],
});

const ibmPlexMono = localFont({
  src: [
    { path: "../fonts/plexmono-400.woff2", weight: "400" },
    { path: "../fonts/plexmono-500.woff2", weight: "500" },
    { path: "../fonts/plexmono-600.woff2", weight: "600" },
  ],
  variable: "--font-ibm-plex-mono",
  display: "swap",
  fallback: ["ui-monospace", "SFMono-Regular", "monospace"],
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

  alternates: {
    canonical: SITE_URL,
  },

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
  name: PROFILE.name,
  alternateName: PERSON_NAME_VARIANTS.filter((name) => name !== PROFILE.name),
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
  publisher: {
    "@type": "Organization",
    name: "Mukhlis Software Solution",
    logo: `${SITE_URL}/brand/mukhlis-software-solution-mark-transparent.png`,
  },
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
      className={`${archivo.variable} ${ibmPlexMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen antialiased">
        <JsonLd data={PERSON_JSONLD} />
        <JsonLd data={WEBSITE_JSONLD} />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
