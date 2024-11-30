import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    images: {
        unoptimized: true,
    },
    output: 'export',
    distDir: 'build',
};

const withMDX = createMDX({});
   
export default withMDX(nextConfig);