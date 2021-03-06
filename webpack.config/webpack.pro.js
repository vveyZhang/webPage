var  webpack=require('webpack');
var helper=require("./helper");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractStyle = new ExtractTextPlugin({
    filename: "style.css"
});
module.exports={
    devtool:"nosources-source-map",
    entry:[
        helper.root('src/app')
    ],
    output:{
        path:helper.root('dist'),
        filename:'app.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader'
        }, {
            test: /\.(css|less)$/,
            loader:extractStyle.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "less-loader",
                }],
                fallback: "style-loader",
            }),
            exclude:path.resolve(__dirname,'node_modules'),
        },{
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
            use: 'url-loader?limit=50000&name=[path][name].[ext]'
        },
        ]
    },
    plugins: [
        extractStyle,
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest:require('./../manifest.json')
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        //去掉重复
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
    ],
    resolve: {
        extensions: ['.js', '.json','.css','html']
    }
};
