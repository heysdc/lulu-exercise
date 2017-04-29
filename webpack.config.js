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
        }
      ]
    }
}
