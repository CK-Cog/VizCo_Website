import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/ai-exclusions",
        destination: "/the-problem",
        permanent: true,
      },
      {
        source: "/approach",
        destination: "/#process",
        permanent: false,
      },
      {
        source: "/team",
        destination: "/about#team",
        permanent: true,
      },
      {
        source: "/platform",
        destination: "/",
        permanent: false,
      },
      {
        source: "/platform/:path*",
        destination: "/",
        permanent: false,
      },
      {
        source: "/careers",
        destination: "/",
        permanent: false,
      },
      {
        source: "/blog",
        destination: "/",
        permanent: false,
      },
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/trust",
        destination: "/",
        permanent: true,
      },
      {
        source: "/use-cases",
        destination: "/",
        permanent: true,
      },
      {
        source: "/products",
        destination: "/",
        permanent: true,
      },
      {
        source: "/products/:path*",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
