const {resolve} = require('path')

module.exports = {
  context: resolve(__dirname, 'src'),
  entry: {
    app: './index.js',
  },
  output: {
    filename: 'bundle.[name].js',
    path: resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true
            }
          },
          'postcss-loader',
          'sass-loader',
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     sourceMap: true
          //   }
          // },
          // {
          //   loader: 'sass-loader',
          //   options: {
          //     sourceMap: true
          //   }
          // }
        ]
      }
    ]
  },
}
