/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false,
  reactStrictMode: false,
  swcMinify: true,
  basePath: "",
  assetPrefix: "",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
