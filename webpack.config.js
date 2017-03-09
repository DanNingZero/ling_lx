var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

function clearDist(){
    var path = "app/dist/"
    var files = fs.readdirSync(path)
    files.forEach(function(file){
        var curPath = path+file
        if(!fs.statSync(curPath).isDirectory())
            fs.unlinkSync(curPath)
    })
}
//clearDist()
var srcDir = path.resolve(process.cwd(), './');
//获取多页面的每个入口文件，用于配置中的entry
function getEntry() {
    var jsPath = path.resolve(srcDir, 'src');
    var dirs = fs.readdirSync(jsPath);
    var res = {},matchs = [], entry = {};
    res.entry = entry
    res.plugins = []
    dirs.forEach(function(item) {
        matchs = item.match(/(.+)\.js$/);
        if (matchs) {
            console.log(matchs[0]);
            entry[matchs[1]] = ['babel-polyfill','fetch-ie8','asha/polyfill.js',path.resolve(srcDir, 'src', item)];
            res.plugins.push(getHtml(matchs[1]))
        }
    });
    return res;
}

function getHtml(name){
    return new HtmlWebpackPlugin({
        template: './index.html',
        filename: '../'+name+'.html',
        chunks: [name, 'vendors'],
        inject: 'body',
        minify:{    //压缩HTML文件
            removeComments:true,    //移除HTML中的注释
            collapseWhitespace:true    //删除空白符与换行符
        }
    })
}
var apps = getEntry()

if(process.env.NODE_ENV!="dev"){
    apps.plugins.push(new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        compress: {
            warnings: false
        }
    }))
}

var config = {
    devtool: process.env.NODE_ENV=="dev"?"eval":"",
    entry: apps.entry,
    resolve: {
        root: [path.normalize(process.cwd() + '/src'),path.normalize(process.cwd() + '/node_modules')],
        alias: {
            "asha/_.less": path.normalize(process.cwd() + "/src/asha/css/_.less")
        }
    },
    output: {
        path: path.join(__dirname, 'app/dist'),
        publicPath: 'dist/',
        filename: '[name].js',
    },
    module: {
        noParse: [/^react/],
        loaders: [
            {
                test:/\.jsx?$/,
                exclude:/node_modules/,
                loader:'babel?'+JSON.stringify({
                    presets:['es2015','react']
                })
            },
            { test: /\.css$/, loader: "style!css" },
            { test: /\.less$/, loader: "style!css!less" },
            { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=8192&name=[path][name].[ext]'},
            { test: /\.jsx?$/, include: /src\/views/, loaders: ['react-router?name=[name].chunk','babel?{"presets":["es2015","react"]}'], }
        ]
    },
    externals: {
      'bmob': 'Bmob'
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        // kills the compilation upon an error.
        // this keeps the outputed bundle **always** valid
        //new webpack.NoErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    ].concat(apps.plugins)
};
module.exports = config
