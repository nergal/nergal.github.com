/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    images: {
        unoptimized: true,
    },
    output: 'export',
    distDir: 'build',
    experimental: {
        useLightningcss: true,
    },
  }
   
  module.exports = nextConfig