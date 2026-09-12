import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { AmbientCircles } from "@/components/AmbientCircles";
import { CursorHalo } from "@/components/CursorHalo";
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
  metadataBase: new URL("https://ahmadullahmukhlis.com"),

  title: "Ahmadullah Mukhlis | Full Stack, Fintech & Software Engineer",

  description:
    "Ahmadullah Mukhlis is a Full Stack, Fintech and Software Engineer specializing in web, mobile, desktop, online and offline applications, payment systems, banking platforms, enterprise software, APIs, cloud systems and secure digital products.",

  keywords: [
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
  ],

  applicationName: "Ahmadullah Mukhlis",
  authors: [{ name: "Ahmadullah Mukhlis", url: "https://ahmadullahmukhlis.com" }],
  creator: "Ahmadullah Mukhlis",
  publisher: "Ahmadullah Mukhlis",
  category: "Software Engineering",

  alternates: {
    canonical: "https://ahmadullahmukhlis.com",
  },

  openGraph: {
    title: "Ahmadullah Mukhlis | Full Stack, Fintech & Software Engineer",
    description:
      "Full Stack and Fintech Software Engineer building secure web, mobile, desktop, online and offline applications, payment systems and enterprise platforms.",
    url: "https://ahmadullahmukhlis.com",
    siteName: "Ahmadullah Mukhlis",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ahmadullah Mukhlis | Full Stack, Fintech & Software Engineer",
    description:
      "Full Stack and Fintech Software Engineer building secure web, mobile, desktop, online and offline applications, payment systems and enterprise platforms.",
  },

  robots: {
    index: true,
    follow: true,
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
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="aura-bg grain min-h-screen antialiased">
        <AmbientCircles />
        <CursorHalo />
        {children}
      </body>
    </html>
  );
}
