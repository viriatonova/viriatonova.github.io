/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
    assetPrefix: isProd ? `https://${process.env.NEXT_PUBLIC_BASE_PATH}` : '',
    reactStrictMode: true,
    images: {
        loader: "custom"
    },
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH
}

module.exports = nextConfig
