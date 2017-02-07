const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        layout: './index.js',
        example: './example.js',
    },
    output: {
        path: './dist',
        filename: '[name].js',
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
        new ExtractTextPlugin('[name].css'),
    ],
};
