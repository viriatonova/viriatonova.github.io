/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
    assetPrefix: isProd ? '/viriatonova.github.io' : '',
    reactStrictMode: true,
}

module.exports = nextConfig
