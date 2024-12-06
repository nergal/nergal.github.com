/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
    images: {
        unoptimized: true,
    },
    output: 'export',
    distDir: 'build',
};

   
export default nextConfig;