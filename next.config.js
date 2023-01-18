/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    ALERTMOON_API: process.env.ALERTMOON_API,
    ALERTMOON_EMAIL_CONTACT: process.env.ALERTMOON_EMAIL_CONTACT,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
