// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "innovation.muhoko.org",
        port: "", // optional, usually empty
        pathname: "/**", // allow all paths from this domain
      },
    ],
  },
};

module.exports = nextConfig;
