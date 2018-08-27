const path = require('path');

module.exports = {
  mode: 'production',
  //entryパス
  entry: './src/main.js',
  //dist
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js, .vue$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  }
};
