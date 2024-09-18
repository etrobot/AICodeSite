/** @type {import('next').NextConfig} */
import createMDX from "@next/mdx";

const nextConfig = {
    output:'export',
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

const withMDX = createMDX({
  extension: /\.mdx?$/
});

export default withMDX(nextConfig);

