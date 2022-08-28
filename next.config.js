/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  optimizeFonts: false,
  env: {
    API_URL: process.env.REACT_APP_API_URL,
    API_KEY: process.env.REACT_APP_API_KEY,
    APP_ENV: process.env.REACT_APP_ENV,
  },
  swcMinify: true,
};

module.exports = nextConfig;
