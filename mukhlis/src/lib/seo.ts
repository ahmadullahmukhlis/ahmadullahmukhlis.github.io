import type { Metadata } from "next";

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const SITE_URL = (configuredSiteUrl || "https://ahmadullahmukhlis.com").replace(/\/$/, "");
export const SITE_NAME = "Ahmadullah Mukhlis";
export const SITE_TITLE =
  "Ahmadullah Mukhlis | Full Stack, Fintech & Software Engineer";

export const SITE_DESCRIPTION =
  "Ahmadullah Mukhlis is a Full Stack, Fintech and Software Engineer specializing in web, mobile, desktop, online and offline applications, payment systems, banking platforms, enterprise software, APIs, cloud systems and secure digital products.";

export const OG_IMAGE = `${SITE_URL}/opengraph-image.jpg`;
export const TWITTER_IMAGE = `${SITE_URL}/twitter-image.jpg`;
export const X_HANDLE = "@ahmadullahmukhi";
export const OG_ALT = "Ahmadullah Mukhlis - Full Stack, Fintech & Software Engineer";

export const SOCIAL_DESCRIPTION =
  "Full Stack, Fintech and Software Engineer building secure web, mobile, desktop, online and offline applications, payment systems and enterprise platforms.";

export const SOCIAL_IMAGE = {
  url: OG_IMAGE,
  secureUrl: OG_IMAGE,
  width: 1200,
  height: 630,
  alt: OG_ALT,
  type: "image/jpeg",
};

export const SITE_KEYWORDS = [
  "Ahmadullah Mukhlis",
  "Ahmad Ullah Mukhlis",
  "Full Stack Developer",
  "Full Stack Software Engineer",
  "Fintech Developer",
  "Fintech Software Engineer",
  "Payment Systems Developer",
  "Banking Software Developer",
  "Enterprise Software Engineer",
  "Web Developer",
  "Mobile App Developer",
  "Desktop Application Developer",
  "Flutter Developer",
  "React Developer",
  "Next.js Developer",
  "Laravel Developer",
  "Spring Boot Developer",
  "ASP.NET Core Developer",
  "API Developer",
  "Microservices Developer",
  "Cloud Developer",
  "AWS Developer",
  "Docker Developer",
  "Online Application Developer",
  "Offline Application Developer",
  "Offline First Applications",
  "Cross Platform Developer",
  "Android Developer",
  "iOS Developer",
  "Windows Desktop Developer",
  "Financial Systems Developer",
  "Digital Payment Developer",
  "Payment Gateway Integration",
  "Payment Switch Integration",
  "ISO 8583 Developer",
  "Mobile Banking Developer",
  "USSD Banking Developer",
  "ERP Developer",
  "MIS Developer",
  "Ecommerce Developer",
  "Secure Software Engineer",
  "Full Stack Developer Afghanistan",
  "Software Engineer Afghanistan",
];

export interface PageSeo {
  title: string;
  description: string;
  keywords: string[];
  path: string;
}

export function buildMetadata({ title, description, keywords, path }: PageSeo): Metadata {
  const canonical = new URL(path, SITE_URL).toString();

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
      images: [SOCIAL_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
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
}
