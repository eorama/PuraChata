import type { NextConfig } from "next";

// Define the repository name for GitHub Pages
const repoName = '/PuraChata';

// Robustly detect if we are building for GitHub Pages
// We set GH_PAGES_BUILD='true' in the workflow
const isGitHubPages = process.env.GH_PAGES_BUILD === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  // Only apply basePath on GitHub Pages
  basePath: isGitHubPages ? repoName : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  env: {
    // Expose correct basePath to client
    NEXT_PUBLIC_BASE_PATH: isGitHubPages ? repoName : '',
  },
};

export default nextConfig;
