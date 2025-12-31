import type { NextConfig } from "next";

// Define the repository name for GitHub Pages
const repoName = '/PuraChata';

// Detect GitHub Actions environment
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true' || process.env.GITHUB_ACTIONS === '1';
// Also keep our custom flag just in case
const isCustomBuild = process.env.GH_PAGES_BUILD === 'true';

const shouldUseBasePath = isGitHubActions || isCustomBuild;

const nextConfig: NextConfig = {
  output: 'export',
  // Only apply basePath on GitHub Pages
  basePath: shouldUseBasePath ? repoName : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  env: {
    // Expose correct basePath to client
    NEXT_PUBLIC_BASE_PATH: shouldUseBasePath ? repoName : '',
  },
};

export default nextConfig;
