/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io", "i.scdn.co"],
  },
};

module.exports = nextConfig;
