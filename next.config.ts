import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scorethat.info',
        port: '',
        pathname: '/scoring/images/**'
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      }
    ]
  }
};

export default nextConfig;
