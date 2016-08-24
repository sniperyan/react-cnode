var path = require('path');
var webpack = require('webpack');

var config = {
    entry: {
        index: path.resolve(__dirname, 'js/index.js')
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'static'),
        publicPath: '/static' // express: 虚拟目录，真实目录(static, assets)
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)?$/,
            exclude: /node_modules/,
            loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
            query: {
                presets: ["es2015", "react", "stage-0"]
            }
        }, {
            test: /\.css$/,
            exclude: /^node_modules$/,
            loader: 'style-loader!css-loader!autoprefixer-loader'
        }, {
            test: /\.(less)$/,
            exclude: /node_modules/,
            loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'
        },{
            test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
            exclude: /node_modules/,
            loader: 'file-loader?name=[name].[ext]'
        }, {
            test: /\.(png|jpg)$/,
            exclude: /node_modules/,
            loader: 'url?limit=20000&name=[name].[ext]' //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
        }]
    },
    resolve: {
        extensions: ['', '.js', '.css','.less'],
        alias: {
            js: path.join(__dirname, 'js'),
            style: path.join(__dirname, 'style')
        }
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
};

module.exports = config;