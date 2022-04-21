/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracing: false,
  swcMinify: true,
  react: {
    useSuspense: true
  },
  compiler: {
    styledComponents: true
  }
}

module.exports = nextConfig
