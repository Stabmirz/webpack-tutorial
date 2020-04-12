
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:'./src/scripts/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode:'development',
    devServer:{
        port:2222,
        open:true,
        compress:true
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                }
            },
            {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader','sass-loader'],
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                  minimize: {
                    removeComments: false,
                    collapseWhitespace: false,
                  }
                }
            }

        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: '[name].css',
          chunkFilename: '[id].css',
        }),
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]
}