import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d3d57fbyf4vdnc.cloudfront.net",
      },
      {
        protocol: "http",
        hostname: "d3d57fbyf4vdnc.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "*.cloudfront.net",
      },
      {
        protocol: "http",
        hostname: "*.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;
