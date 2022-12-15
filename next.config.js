/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    ALERTMOON_API: process.env.ALERTMOON_API,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
