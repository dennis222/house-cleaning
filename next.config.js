/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: [
      'cms.www.airtasker.com.com.au',
      'www.www.airtasker.com.com.au',
      'ext.same-assets.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms.www.airtasker.com.com.au',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'www.www.airtasker.com.com.au',
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
