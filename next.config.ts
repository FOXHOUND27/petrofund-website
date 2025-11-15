// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "innovation.muhoko.org",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "petrofund.org",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
