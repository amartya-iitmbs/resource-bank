/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure CSS is properly included in static export
  trailingSlash: true,
};

export default nextConfig;
