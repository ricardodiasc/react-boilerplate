const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');



var HtmlWebpackConfigPlugin = new HtmlWebpackPlugin({
    template:"index.html",
    filename:"index.html",
    inject: "body"
});

const webpack = {
    entry: "./src/index.jsx",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    devtool: "source-map",
    resolve: {
        extensions: [".webpack.config.js",".js",".jsx"]
    },
    module:{
        rules:[{
            test:/\.jsx?$/,
            loader: "babel-loader",
            query: {
                presets: ['env','react']
            }
        }]
    },

    plugins: [HtmlWebpackConfigPlugin]

}

module.exports = webpack;