/** @type {import('next').NextConfig} */

const urlPrefix = process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : ''

const nextConfig = {
  trailingSlash: true,
  publicRuntimeConfig: { urlPrefix },
}

module.exports = nextConfig
