import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  async rewrites() {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    // return [
    //   {
    //     source: '/api/v1/:path*',
    //     destination: `${baseUrl}/api/v1/:path*`,
    //   },
    // ];
    return [
      {
        source: '/oauth/:path*',
        destination: `${baseUrl}/oauth/:path*`,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/oauth/:path*',
        headers: [
          {
            key: 'X-Frontend-Host',
            value: process.env.NEXT_PUBLIC_HOST || 'localhost:3000',
          },
        ],
      },
    ];
  },
};

export default nextConfig;

// async rewrites() {
//   const baseUrl = process.env.NEXT_PUBLIC_API_URL;
//   if (process.env.NODE_ENV === 'development') {
//     return [
//       {
//         source: '/api/v1/:path*',
//         destination: `${baseUrl}/api/v1/:path*`,
//       },
//     ];
//   }
//   return [];
// },
