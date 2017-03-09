/*eslint-disable no-console, no-var */
var express = require('express')
var rewrite = require('express-urlrewrite')
var webpack = require('webpack')
var webpackDevMiddleware = require('./middleware.js')
process.env.NODE_ENV = "dev"
var WebpackConfig = require('./webpack.config')
var compiler = webpack(WebpackConfig)

var app = express()
var p = webpackDevMiddleware(webpack(WebpackConfig),{
    publicPath: '/dist/',
    stats:"minimal",    //http://webpack.github.io/docs/node.js-api.html#stats
})

// need change webpackDevMiddleware
// var filename = webpackDevMiddleware.getFilenameFromUrl(req.url);
p.getFilenameFromUrl = function(url){
    return path.join(__dirname,"/app"+url.replace(/https?:\/\/[^\/]+/,''))
}
app.use(p)

var fs = require('fs')
var path = require('path')

app.use(express.static("app/"))
var port = process.argv[2]||8090
p.waitUntilValid(function(){
    //console.log(p.fileSystem.data.Volumes.Transcend.tederen.wxss.app)
    app.listen(port, function() {
        console.log('Server listening on http://localhost:'+port+', Ctrl+C to stop')
    })
});
