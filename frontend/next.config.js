/** @type {import('next').NextConfig} */

module.exports = {
  output: 'standalone',
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
        destination: '/sv',
        permanent: true,
      },
    ];
  },
};
