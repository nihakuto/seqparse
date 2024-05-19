const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");

const packageJson = require("./package.json");

const webBuild = {
  entry: path.join(__dirname, "src", "index.ts"),
  target: "web",
  mode: "production",
  devtool: "source-map",
  optimization: {
    minimize: true,
  },
  output: {
    filename: "index.js",
    library: {
      name: packageJson.name,
      type: "umd",
    },
    path: path.join(__dirname, "dist"),
    globalObject: 'this', // Ensuring correct global object in different environments
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
    fallback: {
      buffer: require.resolve("buffer"),
      path: require.resolve("path-browserify"),
      stream: require.resolve("stream-browserify"),
      timers: require.resolve("timers-browserify"),
      url: require.resolve("url"),
    },
  },
  externals: {
    // Ensuring Node.js built-in modules are not bundled
    buffer: 'buffer',
    path: 'path',
    stream: 'stream',
    timers: 'timers',
    url: 'url',
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
};

const cliBuild = {
  ...webBuild,
  entry: path.join(__dirname, "src", "cli.ts"),
  target: "node",
  output: {
    filename: "cli.js",
    path: path.join(__dirname, "dist"),
    chunkFormat: 'commonjs',
  },
  externals: [
    // Using nodeExternals to avoid bundling node_modules in CLI build
    nodeExternals({ modulesDir: path.join(__dirname, "node_modules") }),
  ],
  plugins: [
    new webpack.BannerPlugin({
      banner: '#!/usr/bin/env node',
      raw: true,
    }),
  ],
};

module.exports = [webBuild, cliBuild];
