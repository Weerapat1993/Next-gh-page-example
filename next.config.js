const path = require('path')
const debug = process.env.NODE_ENV !== "production";

module.exports = {
  exportPathMap: function () {
    return {
      "/": { page: "/", query: { title: 'Home' } },
      "/about": { page: "/about", query: { title: 'About' } },
    }
  },
  //assetPrefix: '',
  assetPrefix: !debug ? '/Next-gh-page-example/' : '',
  webpack: (config, { dev }) => {
    // Perform customizations to webpack config
    // console.log('webpack');
    // console.log(config.module.rules, dev);
    config.module.rules = config.module.rules.map(rule => {
      if(rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false
      }
      return rule
    })

    config.module.rules.push(
      {
        test: /\.css$/,
        use: [
          {
            loader: 'emit-file-loader',
            options: {
              name: 'dist/[path][name].[ext].js',
            },
          },
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              extends: path.resolve(__dirname, './.babelrc'),
            },
          },
          'styled-jsx-css-loader',
        ],
      }
    );
    // Important: return the modified config
    return config
  }/*,
  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // console.log('webpackDevMiddleware');
    // console.log(config);
    // Important: return the modified config
    return config
  }, */
}
