# Setting Up Sass

## Convert to Sass + Webpack!

Changed the names of the css files to end with `.scss`

Deleted the stylesheet links in html

Require in stylesheets in js file

Installed the needed loaders

- `npm install --save-dev node-sass style-loader css-loader sass-loader`

Since there are svg images in your CSS files,I also installed a specific loader called [svg-url-loader](https://github.com/bhovhannes/svg-url-loader)

- `npm install —savesvg-url-loader`

Configured new loaders for webpack

Ran `npm run build` to bundle assets and make sure it works

## Resources

* [Webpack Demystified Lesson](http://frontend.turing.io/lessons/webpack-demystified.html)
* [sass-loader](https://docs.omniref.com/js/npm/sass-loader/0.4.2)