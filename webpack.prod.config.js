const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  // entry
  entry: {
    main: './src/index.js',
  },

  // output
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'js/[name].[contenthash].js',
    publicPath: '',
  },

  // mode
  mode: 'production',

  // opt
  optimization: {
    minimize: true,
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },

  // loaders
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'assets',
            publicPath: 'assets/',
          },
        },
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '',
            },
          },
          { loader: 'css-loader', options: {} },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [require('autoprefixer')({})],
            },
          },
          { loader: 'sass-loader', options: {} },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
    ],
  },

  // plugins
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/styles.[contenthash].css',
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        '**/*',
        path.join(process.cwd(), 'build/**/*'),
      ],
    }),

    new HtmlWebpackPlugin({
      title: 'WorldIn',
      template: './public/index.html',
      filename: './index.html',
      description: 'WorldIn - world future lies upon our hands.',
    }),
  ],
};
