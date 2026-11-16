import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages only serves static files: build to ./out and skip the image optimizer.
  output: "export",
  images: { unoptimized: true },
  turbopack: {
    root: __dirname,
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
