/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/Heavtter.github.io/' : '',
    images: {
      unoptimized: true,
  },
}

export default nextConfig;
