var path = require('path');
var webpack = require('webpack');

var plugins = [];
var devtool = '';
if (process.argv.indexOf('-p') > -1) { //生产环境
    plugins.push(new webpack.DefinePlugin({ //编译成生产版本
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }));
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    );
    plugins.push(
        new webpack.optimize.OccurenceOrderPlugin()
    );
} else {
    //开发环境
    devtool = 'cheap-source-map'
    plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        })
    );
}
var config = {
    devtool,
    entry: {
        index: path.resolve(__dirname, 'js/index.js')
    },
    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/assets/', //文件生成的路径 webpack的build路径
        publicPath: 'assets/',//打包后的js文件基础路径 你require的路径 可以重新合成css路径
        chunkFilename: '[name].[chunkhash:5].chunk.js'
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
        }, {
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
        extensions: ['', '.js', '.css', '.less'],
        alias: {
            js: path.join(__dirname, 'js'),
            style: path.join(__dirname, 'style')
        }
    },
    plugins,
    devServer: {
        //其实很简单的，只要配置这个参数就可以了
        port: 8080,
        proxy: {
            '/api/*': {
                target: 'https://cnodejs.org',
                secure: false
            }
        }
    }
};
module.exports = config;