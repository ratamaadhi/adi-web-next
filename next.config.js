/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      new URL('https://s3.us-west-2.amazonaws.com/**'),
      new URL('https://res.cloudinary.com/**'),
    ],
  },
};

module.exports = nextConfig;
