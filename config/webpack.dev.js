const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports = webpackMerge(commonConfig, {
    mode: 'development',

    devtool: 'cheap-module-eval-source-map',

    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                include: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require('autoprefixer')
                                ];
                            }
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.(css|scss)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require('autoprefixer')
                                ];
                            }
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },

    output: {
        publicPath: '/',
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },

    devServer: {
        inline: true,
        historyApiFallback: true,
        contentBase: './dist',
        clientLogLevel: 'none',
        host:'https://protected-shore-51945.herokuapp.com',
        port: process.env.PORT,
        stats: 'minimal',
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'static/css/[name].[contenthash:8].css',
            chunkFilename: 'static/css/[name].[contenthash:8].chunk.css'
        }),
        new webpack.DefinePlugin({
            "BASE_URL": JSON.stringify("https://dev-myddins.deltadev.ent:19601")
        })
    ]
});
