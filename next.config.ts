import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // GitHub Pages has no image optimization server
  images: { unoptimized: true },
};

export default nextConfig;
