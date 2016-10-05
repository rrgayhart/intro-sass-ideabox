const path = require('path');

module.exports = {
  entry: {
    main: "./js/script.js",
    test: "mocha!./test/index.js"
  },
  output: {
    path: __dirname,
    filename: "[name].bundle.js"
  }
}