/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  compiler: {
    reactRemoveProperties: isProd,
    removeConsole: isProd ? { exclude: ["error"] } : false,
  },
  reactStrictMode: true,
  eslint: {
    dirs: ["src"],
  },
};

export default nextConfig;
