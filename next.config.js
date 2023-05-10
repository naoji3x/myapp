/** @type {import('next').NextConfig} */

const urlPrefix = '/myapp'

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: urlPrefix,
  basePath: urlPrefix,  
}

module.exports = nextConfig
