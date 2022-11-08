/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SMS_READER_API: process.env.SMS_READER_API
  },
  reactStrictMode: true,
}

module.exports = nextConfig
