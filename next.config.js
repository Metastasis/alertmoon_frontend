/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    ORY_SDK_URL: process.env.ORY_SDK_URL,
    ALERTMOON_LOGIN_URL: process.env.ALERTMOON_LOGIN_URL,
    ALERTMOON_API: process.env.ALERTMOON_API,
    ALERTMOON_EMAIL_CONTACT: process.env.ALERTMOON_EMAIL_CONTACT,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
