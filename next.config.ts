import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Site is served at omar-alkc.github.io/portfoliosite
  basePath: "/portfoliosite",
  // GitHub Pages has no image optimization server
  images: { unoptimized: true },
};

export default nextConfig;
