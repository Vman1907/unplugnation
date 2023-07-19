const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
module.exports = {
    mode: "development",
    devtool: "cheap-module-source-map",
    entry: { popup: path.resolve("./src/popup/Popup.tsx") },
    module: {
        rules: [
            {
                use: "ts-loader",
                test: /\.tsx$/,
                exclude: /node_modules/,
            },
            {
                use: ["style-loader", "css-loader"],
                test: /\.css$/i,
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve("src/static"),
                    to: path.resolve("dist"),
                },
            ],
        }),
        new HtmlPlugin({
            title: "Unplug Nation",
            filename: "popup.html",
            chunks: ["popup"],
        }),
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "[name].js",
    },
};
