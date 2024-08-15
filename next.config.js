/** @type {import('next').NextConfig} */
const nextConfig = {
  crossOrigin: "anonymous",
  images: { unoptimized: true },
  async headers() {
    return [{
      source: "/(.*)",
      headers: [
        {
          key: 'Access-Control-Allow-Origin',
          value: '*', 
        },
        {
          key: 'Access-Control-Allow-Methods',
          value: 'GET, OPTIONS, POST',
        },
        {
          key: 'Access-Control-Allow-Headers',
          value: 'X-Requested-With, Content-Type, Accept',
        }
      ]
    }]
  },
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
