import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  pageExtensions: ["page.tsx", "page.ts", "tsx", "ts", "jsx"],
  webpack(config) {
    // Add SVGR support for SVG imports as React components
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
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
