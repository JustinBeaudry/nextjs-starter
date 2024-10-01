import { withPigment } from '@pigment-css/nextjs-plugin'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
}

export default withPigment(nextConfig)
