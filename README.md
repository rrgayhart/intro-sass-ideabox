# Intro to Sass Ideabox - Setting Up Sass

[Base Sass Setup](https://github.com/rrgayhart/intro-sass-ideabox/tree/base-sass-setup) adds and configures Sass and Webpack

## Steps Gone Through - [Comparison Diff](https://github.com/rrgayhart/intro-sass-ideabox/compare/webpack...base-sass-setup)

- [Changed the names of the css files to end with `.scss`](https://github.com/rrgayhart/intro-sass-ideabox/commit/a4a535bb2a376657b3205b2cd195fa4b9c706881)

- [Deleted the stylesheet links in html](https://github.com/rrgayhart/intro-sass-ideabox/commit/887b52c12b22b41c6b6025741eaf599e1551776f)

- [Require in stylesheets in js file](https://github.com/rrgayhart/intro-sass-ideabox/commit/6f6f427bea22f927d0d771f15da47bb7c46b7ee4)

- [Installed the needed loaders](https://github.com/rrgayhart/intro-sass-ideabox/commit/1d3346ee8db0ac8bda339e906fee9659e4fbd5ff)

`npm install --save-dev node-sass style-loader css-loader sass-loader`

Since there are svg images in your CSS files,I also installed a specific loader called [svg-url-loader](https://github.com/bhovhannes/svg-url-loader)

`npm install —savesvg-url-loader`

- [Configured new loaders for webpack](https://github.com/rrgayhart/intro-sass-ideabox/commit/82ce2ca9bdf21a8f8d53d2576452a598f0c1d787)

- [Ran `npm run build` to bundle assets and make sure it works](https://github.com/rrgayhart/intro-sass-ideabox/commit/89691f90083f25121a658f33eb65ec97e546d0e4)

## Resources

* [Webpack Demystified Lesson](http://frontend.turing.io/lessons/webpack-demystified.html)
* [sass-loader](https://docs.omniref.com/js/npm/sass-loader/0.4.2)

## Next Branch

[Add Sass Magic](https://github.com/rrgayhart/intro-sass-ideabox/tree/add-sass-magic) adds some Sass functionality to the existing css

## Development

`npm install` to install all dependencies

`npm run build` to bundle

`npm start` to launch the webpack-dev-server

`npm test` to run tests in the terminal