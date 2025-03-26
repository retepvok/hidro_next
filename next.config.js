/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'hw_backend',  // Replace localhost with your container's service name
        port: '1337',
        pathname: '/uploads/**',
      },
    ],
  }
}

module.exports = nextConfig
