/** @type {import('next').NextConfig} */

const nextConfig = {
  transpilePackages: ["next-mdx-remote"],
  reactStrictMode: true,
  webpack: (config) => {
    config.module?.rules?.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

// Merge MDX config with Next.js config
export default nextConfig;
