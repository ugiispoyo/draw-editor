const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

const devConfig = {
    entry: "./src/index.ts",
    mode: "development",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })],
};


module.exports = merge(commonConfig, devConfig);