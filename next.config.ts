import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
    unoptimized: true, // Required for static export
  },
  // Configuration for GitHub Pages
  output: 'export',
  basePath: '/MrWhite',
  assetPrefix: '/MrWhite/',
  trailingSlash: true,
};

export default nextConfig;