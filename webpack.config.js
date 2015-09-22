var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");

module.exports = {
    entry: "./js/entry.js",
    output: {
        filename: "frontend.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loaders: "style-loader!css-loader" },
            { test: /\.png$/, loader: "url-loader?limit=100000" },
            { test: /\.jpg$/, loader: "file-loader" }
        ]
    }
};