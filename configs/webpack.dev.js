const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonConfigs = require("./webpack.common");
const packageJson = require("../package.json");

const devConfigs = {
  mode: "development",
  entry: "./src/main.tsx",
  output: {
    publicPath: "http://localhost:5173/",
  },
  devServer: {
    port: 5173,
    historyApiFallback: {
      index: "/index.html",
    },
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

module.exports = merge(commonConfigs, devConfigs);
