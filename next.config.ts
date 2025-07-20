import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  eslint: {
    // Don't run ESLint during builds (use only locally)
    ignoreDuringBuilds: true,
  },
   typescript: {
    ignoreBuildErrors: true
  },

   transpilePackages: ['three'],
  webpack: (config) => {
    config.externals.push({
      'utf-8-validate': 'commonjs utf-8-validate',
      'bufferutil': 'commonjs bufferutil',
    })
    return config
  },
  
};

export default nextConfig;
