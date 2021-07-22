const webpackMerge = require("webpack-merge").merge;
const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const loadPresets = require("./build-utils/loadPresets");

module.exports = ({ mode = "development", presets = [] }) => {
  return webpackMerge(
    {
      target: mode === "development" ? "web" : "browserslist",
      entry: "./src/index.tsx",
      mode,
      output: {
        assetModuleFilename: "bundle.js", // same as filename in webpack4
      },
      module: {
        rules: [
          {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            loader: "ts-loader",
          },
          {
            test: /\.css$/,
            include: path.resolve(__dirname, "src"),
            use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
          },
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
            },
          },
          {
            test: /\.(jpg|png|gif|woff|woff2|eot|ttf|svg)$/,
            exclude: /node_modules/,
            use: [
              {
                loader: "url-loader",
                options: {
                  limit: 5000,
                },
              },
            ],
          },
        ],
      },
      resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, "src", "index.html"),
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
          filename: "[name].css",
          chunkFilename: "[id].css",
          ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
      ],
    },
    loadPresets({ mode, presets })
  );
};
