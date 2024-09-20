/** @type {import('next').NextConfig} */
import { withContentlayer } from "next-contentlayer2";

const nextConfig = {
    output: 'export',
    reactStrictMode: false,
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                port: '',
                pathname: '**'
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                port: '',
                pathname: '**'
            },
            {
                protocol: 'https',
                hostname: '*.twimg.com',
                port: '',
                pathname: '**'
            },
            {
                protocol: 'https',
                hostname: '*.amazonaws.com',
                port: '',
                pathname: '**'
            }
        ]
    }
};

export default withContentlayer(nextConfig);

