const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: './src/bundle.js',
    },
    resolve:{
        extensions: ['.js'],
        
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename: './index.html',
        })
    ]
    // devServer: {
    //     contentBase: path.join(__dirname,'dist'),
    //     compress: true,
    //     historyApiFallback: true,
    //     port: 3000
    // }

}