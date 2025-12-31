import type { NextConfig } from "next";

const repoName = '/PuraChata';
const isProd = process.env.NODE_ENV === 'production';

// We will use the basePath in production to match GitHub Pages project url.
// In development, we can keep it as root OR use the same path.
// For consistency, let's use it in both, but if the user prefers root in dev, we can toggle.
// However, to fix the user's issue "images not seen", it is likely due to lack of restart.
// We will expose the basePath as an env var for manual CSS handling.

const nextConfig: NextConfig = {
  output: 'export',
  basePath: repoName,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: repoName,
  },
};

export default nextConfig;
