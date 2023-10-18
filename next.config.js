/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  assetPrefix: "/nextjs-tailwind-event-landing-page/",
  basePath: "/nextjs-tailwind-event-landing-page",
};

module.exports = nextConfig;
