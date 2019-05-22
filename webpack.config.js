// webpack.config.js
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        main:'./main.js'
    },
    mode:'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool:'cheap-module-eval-source-map',
  module: {
    rules: [
      // ... other rules
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.styl(us)?$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'stylus-loader'
        ]
      },
      {
        test:/\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jp(e)?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name:'[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
        template:'./index.html'
    })
  ],
  devServer: {
    host: 'localhost',
    open:true,
    port:9000,
    hot:true,
    proxy:{
      '/api':{
        target:'http://localhost:9000',
        pathRewrite:{
          '^/api':'/static/mock'
        }
      }
    }
  }
}