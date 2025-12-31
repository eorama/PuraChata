import type { NextConfig } from "next";

const repoName = '/PuraChata';

// Determine if we are running in production mode (build/export)
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  // Apply basePath only during production build (GitHub Actions), 
  // keeping localhost root-relative for easy development.
  basePath: isProd ? repoName : '',
  // Explicitly set assetPrefix to match basePath as recommended
  assetPrefix: isProd ? repoName : '',
  images: {
    // REQUIRED for GitHub Pages (no server-side optimization)
    unoptimized: true,
  },
  trailingSlash: true,
  env: {
    // Expose basePath to the client side for manual links/styles
    NEXT_PUBLIC_BASE_PATH: isProd ? repoName : '',
  },
};

export default nextConfig;
