/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: "/nextjs-tailwind-event-landing-page/",
  basePath: "/nextjs-tailwind-event-landing-page",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
