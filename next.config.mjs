/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "i.scdn.co",
        protocol: "https",
      },
      {
        hostname: "cdn.sanity.io",
        protocol: "https",
      },
      {
        hostname: "books.google.com",
        protocol: "http",
      },
    ],
  },
};

export default nextConfig;
