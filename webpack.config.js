// Learn more on how to config.
// - https://github.com/ant-tool/atool-build#配置扩展
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')


module.exports = function(webpackConfig) {
  webpackConfig.babel.plugins.push('transform-runtime');
  webpackConfig.babel.plugins.push(['import', {
    libraryName: 'antd',
    style: 'css',
  }]);

  return webpackConfig;
};

// var webpack = require('atool-build/lib/webpack');

// module.exports = function(webpackConfig) {
//   webpackConfig.plugins.push(
//     new webpack.DefinePlugin({
//       __DEV__: JSON.stringify('true')
//     });
//   );
//   return webpackConfig;
// };