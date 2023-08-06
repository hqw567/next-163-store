/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**.music.126.net',
      },
      {
        protocol: 'https',
        hostname: '**.music.126.net',
      },
    ],
  },
}

module.exports = nextConfig
