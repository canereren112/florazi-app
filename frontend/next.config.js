/** @type {import('next').NextConfig} */

module.exports = {
  distDir: 'build',
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // Required:
    appDir: true,
  },
  ...(process.env.NODE_ENV === 'production' && {
    typescript: {
      ignoreBuildErrors: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
  }),
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true,
      },
    ];
  },
};
