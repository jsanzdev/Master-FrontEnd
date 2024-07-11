import { merge } from "webpack-merge";
import common from "./webpack.common.js";
import Dotenv from "dotenv-webpack";

export default merge(common, {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                exportLocalsConvention: "camelCase",
                localIdentName: "[path][name]__[local]--[hash:base64:5]",
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devtool: "eval-source-map",
  devServer: {
    port: 8080,
    devMiddleware: {
      stats: "errors-only",
    },
  },
  plugins: [
    new Dotenv({
      path: "./.dev.env",
    }),
  ],
});
