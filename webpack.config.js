var webpack = require('webpack');
var path = require('path');

var resolveBowerPath = function(componentPath) {
    return path.join(__dirname, 'bower_components', componentPath);
};


module.exports = {
    cache: true,

    entry: './src/entry.js',

    output: {
        filename: "frontend.js"
    },

    resolve: {
        alias: {
            jquery: resolveBowerPath('/jquery/dist/jquery.min.js'),
            underscore : resolveBowerPath('/underscore/underscore-min.js'),
            backbone : resolveBowerPath('/backbone/backbone-min.js')
        }
    },

    module: {
        loaders: [
            { test: /\.css$/, loaders: "style-loader!css-loader" },
            { test: /\.png$/, loader: "url-loader?limit=100000" },
            { test: /\.jpg$/, loader: "file-loader" }
        ]
    },

    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            _: 'underscore',
            Backbone: 'backbone'
        })
    ]
};