const path = require('path');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');

module.exports = {

  entry: './src/ddeep.js',
  mode: "production",

  // Currently We are creating tests to make sure everything is working fine
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'dist'),
  },

  // We are using Typescript so We have to use ts-loader so the build works with TS files
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: [/node_modules/],
      },
    ],
  },

  // A simple development server to test the code (in development)
  devServer: {
    static: {
      directory: path.join(__dirname, "test"),
    },
    compress: true,
    port: 9000,
  },

  plugins: [
    // We've had a problem with Gun as It's import a dependency as an expression and that's not supported so we are just filtering the warning for now
    // If you have any solution for this please contact me on https://matrix.to/#/@multineon:gitter.im
    new FilterWarningsPlugin({
        exclude: [/gun/, /Critical dependency/]
    })
  ]

};
