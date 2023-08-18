/** @type {import('next').NextConfig} */
const nextConfig = {
   output: 'export',
   images: { unoptimized: true },
   async headers() {
      return [
         {
            source: '/api/contact',
            headers: [
               {
                  key: "Access-Control-Allow-Methods",
                  value: "GET,POST"
               },
               {
                  key: "Access-Control-Allow-Credentials",
                  value: "true"
               },
               {
                  key: 'x-another-custom-header',
                  value: 'my other custom header value',
               },

            ]
         }
      ]
   }
}

module.exports = nextConfig


