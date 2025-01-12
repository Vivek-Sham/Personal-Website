import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
