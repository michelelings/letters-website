import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    // Export as static assets; no Image Optimization API in this deployment path.
    unoptimized: true,
  },
};

export default nextConfig;
