const fs = require('fs');
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const prod = process.argv.indexOf('-p') !== -1;
const cssOutputTemplate = prod ? 'stylesheets/[name]-[hash].css' : 'stylesheets/[name].css';
const jsOutputTemplate = prod ? 'javascripts/[name]-[hash].js' : 'javascripts/[name].js';
const WebpackNotifierPlugin = require('webpack-notifier');  // eslint-disable-line global-require, max-len

const date = new Date();
const timeStr = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

module.exports = {
  context: path.join(__dirname, '/app/assets'),
  entry: {
    application: ['./javascripts/application.js', './stylesheets/application.scss'],
  },

  output: {
    path: path.join(__dirname, '/public'),
    filename: jsOutputTemplate,
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['env', 'react', 'stage-1'],
        },
      },
      {
        test: [/\.css$/, /\.scss$/],
        loader: ExtractTextPlugin.extract('css!sass'),
      },
    ],
  },

  plugins: [
    new ExtractTextPlugin(cssOutputTemplate),
    new WebpackNotifierPlugin({
      alwaysNotify: true,
      title: 'Webpack ' + timeStr,
    }),
    function manageTranspiledAssets() {
      // delete previous outputs
      // this.plugin('compile', function() {
      //   let basepath = __dirname + '/public';
      //   let paths = ['/javascripts', '/stylesheets'];
      //
      //   for (let x = 0; x < paths.length; x++) {
      //     const assetPath = basepath + paths[x];
      //
      //     fs.readdir(assetPath, function (err, files) {
      //       if (files === undefined) {
      //         return;
      //       }
      //
      //       for (let i = 0; i < files.length; i++) {
      //         fs.unlinkSync(`${assetPath}/${files[i]}`);
      //       }
      //     });
      //   }
      // });

      // output the fingerprint
      this.plugin('done', function(stats) {
        let output = 'ASSET_FINGERPRINT = \'' + stats.hash + '\''
        fs.writeFileSync('config/initializers/fingerprint.rb', output, 'utf8');
      });
    }
  ],
  resolve: {
    root: [path.resolve(__dirname, 'app/assets'), path.resolve(__dirname, 'node_modules')],
    extensions: ['', '.js'],
  },
};
