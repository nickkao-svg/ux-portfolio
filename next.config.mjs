import { withContentlayer } from "next-contentlayer";

const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    typedRoutes: true,
  },
};

export default withContentlayer(nextConfig);
