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
  title: "Ahmadullah Mukhlis · Full-stack Portfolio",
  description:
    "Portfolio of Ahmadullah Mukhlis — full-stack developer, engineer and creative technologist based in Kabul, working worldwide.",
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
