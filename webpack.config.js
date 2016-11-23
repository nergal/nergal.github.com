var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/main.jsx',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        preLoaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'jshint-loader'
        }],
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            { test: /\.json$/, loader: 'json-loader' },
            { test: /\.(le|c)ss$/, loader: 'style-loader!css-loader!less-loader' },
            { test: /\.svg$/, loader: 'url-loader' },
            { test: /\.(woff2?|ttf|eot|png)$/, loader: 'file-loader!url?limit=10000' }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        })
    ]
};
