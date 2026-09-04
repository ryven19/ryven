import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Static HTML export — generates an `out/` folder you can open directly
  output: "export",

  // Pin the Turbopack root to this project directory
  turbopack: {
    root: path.resolve(__dirname),
  },

  images: {
    // Required for static export — no server to run image optimization
    unoptimized: true,
  },
};

export default nextConfig;
