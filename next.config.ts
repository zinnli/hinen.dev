import path from "path";
import { Configuration } from "webpack";

/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  transpilePackages: ["next-mdx-remote"],
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  webpack: (config: Configuration) => {
    config.module?.rules?.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

// Merge MDX config with Next.js config
export default nextConfig;
