var path = require('path')

module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname + '/dist',
        publicPath: '/dist/',
        filename: 'build.js'
    },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.common.js',
        'src': path.resolve(__dirname, '../src'),
        'assets': path.resolve(__dirname, '../src/assets'),
        'components': path.resolve(__dirname, '../src/components')
      }
    },
    module: {
      loaders: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.css$/,
          use: [{
              loader: 'style-loader' // creates style nodes from JS strings
          }, {
              loader: 'css-loader' // translates CSS into CommonJS
          }]
        },
        {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            query: {
                limit: 10000,
                // name: utils.assetsPath('img/[name].[hash:7].[ext]')
            }
        },
        {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            query: {
                limit: 10000,
                // name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
            }
        },
      ]
    }
}
