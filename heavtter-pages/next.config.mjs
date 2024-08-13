/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'heavtter-pages/out',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/my-repo-name/' : '',
    images: {
      unoptimized: true,
  },
}

export default nextConfig;
