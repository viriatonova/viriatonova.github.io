/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
    assetPrefix: isProd ? 'https://viriatonova.github.io/' : '',
    reactStrictMode: true,
    images: {
        loader: "custom"
      }
}

module.exports = nextConfig
