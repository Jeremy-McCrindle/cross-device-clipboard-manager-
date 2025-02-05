/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static HTML export
  images: {
    unoptimized: true, // Needed if using Next.js images with static export
  },
};

export default nextConfig;

