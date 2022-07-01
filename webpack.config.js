const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
    watch: true,
    experiments: {topLevelAwait: true},
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "index.bundle.js",
        path: path.resolve(__dirname, "./public")
    },
    devtool: false,
    plugins: [
        new webpack.SourceMapDevToolPlugin({}),
        new HtmlWebpackPlugin(),
        new MiniCssExtractPlugin({filename: "styles.css"}),
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_module/,
                use : {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                }
            },
            {
                test: /\.(scss|css)$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: ["autoprefixer"],
                            } 
                        }
                    }, "sass-loader", 
                ]
            },
        ]
    },
    resolve : {
        extensions: ['.tsx', '.ts', '.js'],
    }
}