const webpack = require("webpack");
const path = require("path");

const config = {
  entry: __dirname + "/js/index.jsx",
  output: {
    path: __dirname + "/webpack_bundle",
    filename: "webpack_bundle.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx", ".css"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: "file-loader",
      },
      // TODO: .css files don't actually work with loader, fix this.
      {
        test: /\.css?/,
        use: "css-loader",
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: "[local]___[hash:base64:5]",
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              includePaths: [path.resolve(__dirname)],
              modules: true,
              localIdentName: "[local]___[hash:base64:5]",
            },
          },
          { loader: "postcss-loader" },
        ],
      },
    ],
  },
};

module.exports = config;
