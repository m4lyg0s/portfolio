/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.GITHUB_PAGES ? '/portfolio' : '',
}

module.exports = nextConfig
