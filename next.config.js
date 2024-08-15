/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  experimental: {
    serverActions: {
      allowedOrigins: [
        "https://faaiz-portfolio-pre-prod.vercel.app",
        "https://faaiz-portfolio-prod.vercel.app",
      ],
      bodySizeLimit: "2mb",
    },
  },
};

module.exports = nextConfig;
