module.exports = {
  // assetsDir: '',
  // publicPath: '',
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        // Loads SCSS-variables into each component
        prependData: `@import "@/scss/_settings.scss";`,
      },
    },
  },
};
