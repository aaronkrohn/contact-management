// Karma configuration
var webpack = require('karma-webpack');
var webpackConfig = require('./webpack.config');

webpackConfig.module.loaders = [{
    test: /\.(js|jsx)$/, exclude: /(bower_components|node_modules)/,
    loader: 'babel-loader'
 }];

//webpackConfig.module.postLoaders = [{
//  test: /\.(js|jsx)$/, exclude: /(node_modules|bower_components)/,
//  loader: 'istanbul-instrumenter'
//}];

module.exports = function (config) {
  config.set({
    frameworks: [ 'jasmine' ],
    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      'reducers/**/*_spec.js'
    ],
    plugins: [
      webpack,
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-phantomjs-launcher',
      'karma-coverage',
      'karma-spec-reporter'
    ],
    browsers: [ 'PhantomJS' ],
    preprocessors: {
      'reducers/**/*_spec.js': ['webpack'],
      'src/**/*.js': ['webpack']
    },
    reporters: [ 'spec', 'coverage' ],
    coverageReporter: {
      dir: 'build/reports/coverage',
      reporters: [
        { type: 'html', subdir: 'report-html' },
        { type: 'lcov', subdir: 'report-lcov' },
        { type: 'cobertura', subdir: '.', file: 'cobertura.txt' }
      ]
    },
    webpack: webpackConfig,
    webpackMiddleware: { noInfo: true }
  });
};
