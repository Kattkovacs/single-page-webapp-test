module.exports = {
  server: {
    baseDir: ".",
    index: "index.html"
  },
  files: ["*.html", "*.css", "*.js"],
  ignore: ["node_modules", ".git"],
  watchOptions: {
    ignored: /node_modules|\.git|Windows\/System32/
  }
};
