/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
basePath: process.env.NODE_ENV === 'production' ? '/my-startup' : '', 
assetPrefix: process.env.NODE_ENV === 'production' ? '/my-startup' : '',
};
module.exports = nextConfig;
