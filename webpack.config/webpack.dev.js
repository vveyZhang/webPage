var  webpack=require('webpack');
var helper=require("./helper");
module.exports={
    devtool:"cheap-module-eval-source-map",
    entry:[
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        helper.root('src/app.js')
    ],
    output:{
        path:helper.root('dist'),
        filename:'app.js',
        publicPath:"/dist/",
        chunkFilename: '[id].chunk.js'
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            loaders: ['babel-loader']
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        },{
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
            loader: 'url-loader?limit=50000&name=[path][name].[ext]'
        },
        ]
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest:require('./../manifest.json')
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.json','.css','html']
    }

}