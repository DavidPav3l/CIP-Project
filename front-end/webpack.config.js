const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
module.exports = {
  entry: {
    index: './src/js/index.js',
    rezumat: './src/js/rezumat.js',
    imagine: './src/js/imagine.js',
    diagnostic: './src/js/diagnostic.js',
  },
  mode: 'development',
  devServer: {
    watchFiles: ['src/**/*'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },

      {
        test: /\.html$/i,
        loader: 'html-loader',
      },

      {
        test: /\.(jpg|png|jpeg|svg|gif|pdf)$/,
        type: 'asset/resource',
      },

      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
    ],
  },
  optimization: {
    minimizer: [`...`, new CssMinimizerPlugin()],
  },
  resolve: {
    extensions: ['*', '.js'],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      // Also generate a test.html
      filename: 'index.html',
      template: 'src/html/index.html',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      // Also generate a test.html
      filename: 'rezumat.html',
      template: 'src/html/rezumat.html',
      chunks: ['rezumat'],
    }),
    new HtmlWebpackPlugin({
      // Also generate a test.html
      filename: 'imagine.html',
      template: 'src/html/imagine.html',
      chunks: ['imagine'],
    }),
    new HtmlWebpackPlugin({
      // Also generate a test.html
      filename: 'diagnostic.html',
      template: 'src/html/diagnostic.html',
      chunks: ['diagnostic'],
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
    clean: true,
  },
};
