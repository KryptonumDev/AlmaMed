/** @type {import('next').NextConfig} */
// const path = require('path');

const nextConfig = {
  productionBrowserSourceMaps: true,
  // sassOptions: {
  //   includePaths: [path.join(__dirname, 'styles')],
  // },
  images: {
    domains: ['cdn.sanity.io'],
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
