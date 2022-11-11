const path = require('path')

const fs = require('fs')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const CTX = path.resolve(__dirname, 'src')
const PAGES_DIR = `${CTX}/templates`
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))

module.exports = {
  mode: 'production',
  context: CTX,
  entry: './js/index.js',
  devServer: {
    port: 8000,
    open: true,
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(),

    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),

    ...PAGES.map(page => new HTMLWebpackPlugin({
      template: `${PAGES_DIR}/${page}`,
      filename: `./${page.replace(/\.pug/,'.html')}`
    }))
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.pug$/,
        use: ['pug-loader'],
      },
    ]
  },
}