/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/music163/:path*',
        destination: 'https://music.163.com/:path*',
      },
    ]
  },
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
