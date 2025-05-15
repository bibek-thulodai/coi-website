/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['images.unsplash.com', 'plus.unsplash.com', 'source.unsplash.com'],
    unoptimized: true,
  },
  // Force light theme by default
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
