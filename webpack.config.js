const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: ["./app/js/index.js", "./app/css/main.scss"],
  devtool: "source-map",
  output: {
    filename: "dist/bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }, {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{
            loader: "css-loader", options: { sourceMap: true }
          }, {
            loader: "postcss-loader", options: { sourceMap: true }
          }, {
            loader: "sass-loader", options: { sourceMap: true }
          }]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("dist/style.css")
  ]
};
