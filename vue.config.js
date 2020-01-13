module.exports = {
  publicPath: '',
  productionSourceMap: false,
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        // Loads SCSS-variables into each component
        prependData: `@import "@/scss/_settings.scss";`,
      },
    },
  },
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer('terser').tap(args => {
        // Doc: https://github.com/terser/terser
        args[0].terserOptions = {
          ...args[0].terserOptions,
          output: {
            comments: false,
          },
        };
        return args;
      });
    }
  }
};
