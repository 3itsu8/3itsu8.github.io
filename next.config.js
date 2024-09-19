/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix:
    process.env.NODE_ENV === 'production' ? '/3itsu8.github.io/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/3itsu8.github.io' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
