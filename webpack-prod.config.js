const path = require("path");
const webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    mode: "production",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: { presets: ["@babel/env"] }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',
                            name: '[name].[ext]'
                        },
                    },
                ]
            },
            {
                test: /\.md$/,
                use: [
                    { loader: 'html-loader'},
                    { loader: path.resolve('./markdown-blogpost-loader.js')}
                ]
            }
        ]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    output: {
        path: path.resolve(__dirname, "dist/"),
        filename: "bundle.js"
    },
    plugins: [new HtmlWebpackPlugin({ template: 'public/prod-index.html' })]
};