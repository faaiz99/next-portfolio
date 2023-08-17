/** @type {import('next').NextConfig} */
const nextConfig = {
   // output: 'export',
   images: { unoptimized: true },
   async headers() {
      return [
        {
          source: '/api/',
          headers: [
            {
              key: 'X-Content-Type',
              value: 'application/json',
            },
          ],
        },
      ]
    },

}

module.exports = nextConfig
