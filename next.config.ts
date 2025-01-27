import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  images: {
    domains: ["cloudflare-ipfs.com", "https://fastly.picsum.photos", "https://loremflickr.com", "https://picsum.photos"], // 허용할 도메인 목록을 지정
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cloudflare-ipfs.com",
        port: "",
        pathname: "/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/",
      },
      {
        protocol: "https",
        hostname: "https://fastly.picsum.photos/",
        port: "",
        pathname: "/id/",
      },
      {
        protocol: "https",
        hostname: "loremflickr.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
