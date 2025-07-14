import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    ppr: 'incremental',
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
};

export default nextConfig;
