const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const paths = require('./paths');
const webpack = require("webpack");

module.exports = webpackMerge(commonConfig, {
    mode: 'production',

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
        path: paths.appBuildPath,
        filename: 'bundle.js'
    },

    plugins: [
        new CleanWebpackPlugin(['dist'], { root: paths.appRootPath }),
        // new MiniCssExtractPlugin({
        //     filename: 'static/css/[name].[contenthash:8].css',
        //     chunkFilename: 'static/css/[name].[contenthash:8].chunk.css'
        // })
    ],

    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    parse: {
                        ecma: 8,
                    },
                    compress: {
                        ecma: 5,
                        warnings: false,
                        comparisons: false,
                        inline: 2,
                    },
                    mangle: {
                        safari10: true,
                    },
                    output: {
                        ecma: 5,
                        comments: false,
                        ascii_only: true,
                    },
                },
                parallel: true,
                cache: true,
                sourceMap: false,
            }),
            new OptimizeCSSAssetsPlugin({
                cssProcessor: require('cssnano'),
                cssProcessorOptions: { discardComments: { removeAll: true } }
            }),
            new webpack.DefinePlugin({
                "BASE_URL": JSON.stringify("https://aw-lx0423:19601")
            })
        ]
    }
});