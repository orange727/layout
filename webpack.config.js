const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        path: './dist',
        filename: 'layout.js',
    },
    module: {
        loaders: [
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader?importLoaders=1', 'postcss-loader', 'less-loader'],
                }),
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin('layout.css'),
    ],
};
