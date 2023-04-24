/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracing: false,
  swcMinify: true,
  compiler: {
    styledComponents: true
  }
}

module.exports = nextConfig
