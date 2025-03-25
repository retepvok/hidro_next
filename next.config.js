/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['hw_backend'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'admin.hidroworks.hu',
        pathname: '/**',
      }
    ],
  }
}

module.exports = nextConfig
