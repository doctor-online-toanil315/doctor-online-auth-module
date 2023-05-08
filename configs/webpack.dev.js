const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonConfigs = require("./webpack.common");
const packageJson = require("../package.json");

const devConfigs = {
  mode: "development",
  entry: "./src/main.tsx",
  output: {
    publicPath: "https://doctor-online-auth-module.vercel.app/",
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
