//var webpack = require('webpack'); //TODO プラグインを使用する場合

module.exports = {
    devServer: {
        inline: true,
        contentBase: './src',
        port: 3001
    },
    entry: './dev/js/index.js',
    //entry: ["babel-polyfill", "./dev/js/index.js"], //TODO Polyfillを使用する場合
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    output: {
        path: __dirname + '/src',
        filename: 'js/bundle.min.js'
    },
    plugins: [
        //new webpack.optimize.OccurrenceOrderPlugin() //TODO プラグインを使用する場合
    ]
};