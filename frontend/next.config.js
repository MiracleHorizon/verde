const StylelintPlugin = require('stylelint-webpack-plugin')

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
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

module.exports = nextConfig
