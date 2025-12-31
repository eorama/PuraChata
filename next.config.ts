import type { NextConfig } from "next";

// Define the repository name for GitHub Pages
const repoName = '/PuraChata';

// Check environment states
const isProd = process.env.NODE_ENV === 'production';
const isCI = process.env.CI === 'true';

// We use the basePath only when building for production (CI or local build)
// valid for GitHub Pages.
const useBasePath = isProd || isCI;

const nextConfig: NextConfig = {
  output: 'export',
  // Dynamic basePath based on environment
  basePath: useBasePath ? repoName : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  env: {
    // Expose basePath to the client side
    NEXT_PUBLIC_BASE_PATH: useBasePath ? repoName : '',
  },
};

export default nextConfig;
