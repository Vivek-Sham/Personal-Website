import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: [
    "page.tsx", // Your custom extension for pages
    "page.ts", // Additional extensions for specific files
    "ts", // Required to resolve `not-found.ts` correctly
  ],
  experimental: {
    turbo: {
      // Use SVGR for all SVG files
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js", // Treats SVGs as JS files to prevent dimension parsing
        },
      },
    },
  },
};

export default nextConfig;
