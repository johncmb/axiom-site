/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { appDir: true }, // ensure App Router is enabled if /app exists
};
module.exports = nextConfig;
