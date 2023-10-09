const path = require('path');
const {CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
      all: ["./modules/header/header.js", "./modules/body/body.js", "./modules/footer/footer.js"],
},
    mode: "development",
    devtool: 'inline-source-map',
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, "public"),
      //clean: true,
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
        hot: true,
      },
      compress: true,
      port: 8564,
      open: true
    },
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
  },
  plugins: [new HtmlWebpackPlugin(), new CleanWebpackPlugin()],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
    }
  },
    module: {
    rules: [{
    test: /\.css$/i,
    use: ["style-loader", "css-loader"],
    },
    {
      test: /\.(gif|png|jpe?g|svg)$/i,
      use: [
        'file-loader',
        {
          loader: 'image-webpack-loader',
          options: {
            bypassOnDebug: true, // webpack@1.x
            disable: true, // webpack@2.x and newer
          },
        },
      ],
    }]
    },
};
