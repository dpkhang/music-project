module.exports = {
    css: {
        loaderOptions: {
          scss: {
            additionalData: `
              @import "@/scss/color.scss";
            `
          }
        }
      }
}