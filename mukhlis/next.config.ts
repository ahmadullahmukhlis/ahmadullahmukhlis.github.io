import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel uses a Next.js deployment adapter and does not need standalone output.
  // Keep standalone output for the existing Docker deployment.
  output: process.env.VERCEL ? undefined : "standalone",
  async redirects() {
    return [
      { source: "/services/web", destination: "/services/web-development", permanent: true },
      { source: "/services/mobile", destination: "/services/mobile-development", permanent: true },
      { source: "/services/enterprise", destination: "/services/enterprise-software", permanent: true },
      { source: "/services/cloud", destination: "/services/cloud-devops", permanent: true },
    ];
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
