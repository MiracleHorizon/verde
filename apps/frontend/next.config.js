const StylelintPlugin = require('stylelint-webpack-plugin')

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        hostname: 'eda.yandex',
        protocol: 'https'
      },
      {
        hostname: 'avatars.mds.yandex.net',
        protocol: 'https'
      },
      {
        hostname: 'yastatic.net',
        protocol: 'https'
      },
      {
        hostname: 'verde-serve-static-dyu0.onrender.com',
        protocol: 'https'
      }
    ]
  },
  webpack: config => {
    config.plugins.push(
      new StylelintPlugin({
        configFile: '.stylelintrc.json',
        context: 'src',
        files: '**/*.scss',
        fix: false,
        quiet: true,
        failOnError: true
      })
    )

    return config
  }
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false
})

module.exports = withBundleAnalyzer(nextConfig)
