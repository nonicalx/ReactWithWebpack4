const path = require('path');


 const HtmlWebpack = require('html-webpack-plugin');
 const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, './dist'),
        filename: "bundled.js",
    },


    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(png|jp(e*)g|gif|pdf|svg|doc|webp)$/i,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: '[hash]-[name].[ext]'
                }
            },

            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // publicPath: './'
                        }
                    }, "css-loader"
                ]
            }


        ]
    },



    plugins:[
        new HtmlWebpack({
            template: './public/index.html',
            hash: true
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFileName: "[id].css"
        }),

    ]
}