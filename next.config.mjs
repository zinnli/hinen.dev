const isCI = process.env.CI === "true";

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
  assetPrefix: isCI ? "https://zinnli.github.io" : "",
  ...(isCI && { output: "export" }), // CI에서만 static export 모드 사용
};

// Merge MDX config with Next.js config
export default nextConfig;
