const path = require('path');
const Minify = require('babel-minify-webpack-plugin');

module.exports = [
  {
    entry: ['./src/index.js'],
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new Minify(),
    ],
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: ['/node_modules/'],
          query: {
            presets: [
              [
                'env', {
                  modules: false,
                  targets: {
                    chrome: '62',
                  },
                },
              ],
            ],
          },
        },
      ],
    },
  },
];
