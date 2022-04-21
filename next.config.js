/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
    assetPrefix: isProd ? '/personalpage' : '',
    reactStrictMode: true,
    images: {
        loader: "custom"
      }
}

module.exports = nextConfig
