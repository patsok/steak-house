const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // mode: 'development',
    mode: 'production',
    entry: {
      main: './src/js/main.js',
      swiper: './src/js/swiper.js'
    },
    // devtool: 'inline-source-map',
    // devServer: {
    //     static: './dist',
    // },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    optimization: {
      runtimeChunk: 'single',
    },
    performance: {
      maxEntrypointSize: 1024000,
      maxAssetSize: 1024000
  },
    plugins: [
        new HtmlWebpackPlugin({
          template: "./src/index.html"
        })
      ],
    module: {
        rules: [{
            test: /\.s[ac]ss$/i,
            use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
            },
            {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
            },
            {
            test: /\.html$/i,
            loader: 'html-loader',
            },
        ],
          
    },
};