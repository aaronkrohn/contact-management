// Karma configuration
const webpackConfig = require('./webpack.config.js');
//https://github.com/sethmcl/typescript-webpack-karma-mocha

module.exports = function (config) {
  config.set({
    // ... normal karma configuration
    frameworks: ['mocha', 'chai'],

    // list of files to exclude
    exclude: [
      'node_modules/**/*Spec.js'
    ],

    files: [
      // all files ending in "_test"
      {pattern: 'reducers/contactsSpec.js', watched: true}
      //{pattern: 'test/**/*_test.js', watched: false}
      // each file acts as entry point for the webpack configuration
    ],

    preprocessors: {
      // add webpack as preprocessor
      'reducers/contactsSpec.js': ['webpack']
    },

    // karma watches the test entry points
    // (you don't need to specify the entry option)
    // webpack watches dependencies

    // webpack configuration
    webpack: {
      devtool: 'eval-source-map',
      debug: true,
      module: webpackConfig.module.loaders,
      resolve: webpackConfig.resolve
    },

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      stats: 'errors-only'
    }
  });
};
