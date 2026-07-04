/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  images: {
    // static export has no image server to resize/re-encode at request time
    unoptimized: true,
    qualities: [75, 80, 85],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig


