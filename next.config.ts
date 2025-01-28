import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['example.com', 'img1.kakaocdn.net'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;
