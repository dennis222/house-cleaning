/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: [
      'cms.absolutedomestics.com.au',
      'www.absolutedomestics.com.au',
      'ext.same-assets.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms.absolutedomestics.com.au',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'www.absolutedomestics.com.au',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'ext.same-assets.com',
        pathname: '/**'
      }
    ]
  }
};

module.exports = nextConfig;
