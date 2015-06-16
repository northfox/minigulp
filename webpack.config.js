var webpack = require("webpack");
module.exports = {
    watchDelay: 500,
    output: {
        filename: "[name].js",
        sourceMapFilename: 'map/[file].map',
        publicPath: "/js/"
    },
    devtool: '#source-map',
    resolve: {
        modulesDirectories: ["bower_components", "node_modules"],
        alias: {
            bower: 'bower_components'
        }
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_component)/,
                loader: "jshint-loader"
            }
        ],
        loaders: [
            { test: /\.html$/, loader: 'html-loader' },
        ]
    },
    jshint: {
        bitwise: true,
        camelcase: true,
        eqnull: true,
        unused: true
    },
    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        ),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            _: 'lodash'
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.CommonsChunkPlugin('common','common.js'),
        new webpack.optimize.DedupePlugin()
    ]
};
