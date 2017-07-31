var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: ['babel-polyfill', './client/index.js'],
    output: {
        filename:'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react', 'stage-2', 'stage-3']
                    }
                }
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react', 'stage-2', 'stage-3']
                    }
                }
            },
        ]
    },
    node: {
        console: true,
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },
    plugins: [
        new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
    })
    ]
}
