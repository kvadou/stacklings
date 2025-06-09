import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["stacklings.com"], // or add other domains as needed
  },
};

export default nextConfig;