/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // We use local SVGs for the logo/background to keep the page lightweight.
    dangerouslyAllowSVG: true
  }
};

export default nextConfig;

