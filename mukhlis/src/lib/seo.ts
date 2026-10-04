import type { Metadata } from "next";

// Canonicals and structured data always identify the production site.
export const SITE_URL = "https://ahmadullahmukhlis.com";
export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const GA_MEASUREMENT_ID = "G-CXHQDQFNTM";
export const SITE_NAME = "Mukhlis Software Solution";
export const SITE_TITLE =
  "Ahmadullah Mukhlis | Full-Stack & Fintech Software Engineer";

export const SITE_DESCRIPTION =
  "Ahmadullah Mukhlis is a Full Stack, Fintech and Software Engineer specializing in web, mobile, desktop, online and offline applications, payment systems, banking platforms, enterprise software, APIs, cloud systems and secure digital products.";

export const OG_IMAGE = `${SITE_URL}/opengraph-image.jpg`;
export const TWITTER_IMAGE = `${SITE_URL}/twitter-image.jpg`;
export const X_HANDLE = "@ahmadullahmukhi";
export const OG_ALT = "Mukhlis Software Solution by Ahmadullah Mukhlis";

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

export const PERSON_NAME_VARIANTS = ["Ahmadullah Mukhlis", "Ahmad Ullah Mukhlis"];

export const PROFESSIONAL_TOPICS = [
  "Full-stack software engineering",
  "Payment systems and ISO 8583",
  "Digital banking",
  "Enterprise software",
  "Web and mobile application development",
  "API design and integration",
  "Cloud infrastructure and CI/CD",
];

export const SITE_KEYWORDS = ["Ahmadullah Mukhlis", ...PROFESSIONAL_TOPICS];

export interface PageSeo {
  title: string;
  description: string;
  keywords: string[];
  path: string;
  image?: string;
  article?: { publishedTime: string; modifiedTime: string; tags: string[] };
}

export function buildMetadata({ title, description, keywords, path, image, article }: PageSeo): Metadata {
  const pageTitle = title.includes("Ahmadullah Mukhlis") ? title : `${title} | Ahmadullah Mukhlis`;
  const canonical = new URL(path, SITE_URL).toString();
  const socialImage = image ? new URL(image, SITE_URL).toString() : SOCIAL_IMAGE;

  return {
    metadataBase: new URL(SITE_URL),
    title: pageTitle,
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      title: pageTitle,
      description,
      url: canonical,
      siteName: SITE_NAME,
      ...(article
        ? { type: "article" as const, ...article, authors: [`${SITE_URL}/author/ahmadullah-mukhlis`] }
        : { type: "website" as const }),
      locale: "en_US",
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      site: X_HANDLE,
      creator: X_HANDLE,
      images: {
        url: image ? new URL(image, SITE_URL).toString() : TWITTER_IMAGE,
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
