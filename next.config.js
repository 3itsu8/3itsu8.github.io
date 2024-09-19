/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/3itsu8.github.io' : '',
  assetPrefix:
    process.env.NODE_ENV === 'production' ? '/3itsu8.github.io/' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
