/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['s3.us-west-2.amazonaws.com', 'res.cloudinary.com'],
  },
};

module.exports = nextConfig;
