import type { NextConfig } from "next";

// Define the repository name for GitHub Pages
const repoName = '/PuraChata';

const nextConfig: NextConfig = {
  output: 'export',
  // Hardcoded basePath to ensure it works on GitHub Pages. 
  // Localhost will always require /PuraChata prefix.
  basePath: repoName,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  env: {
    // Expose basePath to the client side
    NEXT_PUBLIC_BASE_PATH: repoName,
  },
};

export default nextConfig;
