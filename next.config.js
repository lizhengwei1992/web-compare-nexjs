/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['mass.alipay.com'],
  },
};

module.exports = nextConfig;