var webpack=require('webpack');
var webpackDevServer=require('webpack-dev-server');
var config=require('./webpack.config/webpack.dev');
new webpackDevServer(webpack(config),{
    publicPath:config.output.publicPath,
    historyApiFallback:true,
    hot:true,
    inline:true,
    progress:true,
    contentBase:'src'
}).listen(8080,'localhost',function(err,res){
        if(err)console.log(err);
        console.log('Listening port 8080');
});
/*
*   contentBase:"",*/