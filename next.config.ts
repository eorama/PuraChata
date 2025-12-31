import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repoName = '/PuraChata';

const nextConfig: NextConfig = {
  output: 'export',
  // Only use basePath in production to allow standard localhost:3000 behavior in dev
  basePath: isProd ? repoName : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  env: {
    // This var will be '' in dev and '/PuraChata' in prod
    NEXT_PUBLIC_BASE_PATH: isProd ? repoName : '',
  },
};

export default nextConfig;
