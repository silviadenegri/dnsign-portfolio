const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: ['./js/index.js', './style.scss'],
  },

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'prod'),
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    require('postcss-preset-env'),
  ],

  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },

  // defaults to "web", so only required for webpack-dev-server bug
  devtool: 'source-map',
};
