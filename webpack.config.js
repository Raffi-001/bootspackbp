var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackLayoutPlugin = require('html-webpack-layout-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {loader: "css-loader"},
                        {loader: "sass-loader"}
                    ]
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader?name=images/[name].[ext]'
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            layout: path.join(__dirname, 'src/layouts/layout.html'),
            title: 'Output Management',
            filename: 'index.html',
            template: 'src/pages/index.html'
        }),

        new HtmlWebpackPlugin({
            layout: path.join(__dirname, 'src/layouts/layout.html'),
            title: 'About',
            filename: 'about.html',
            template: 'src/pages/about.html'
        }),

        new HtmlWebpackLayoutPlugin(),
        new ExtractTextPlugin("style.css"),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]

};
