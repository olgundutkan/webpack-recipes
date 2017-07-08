# Webpack recipes
> A collection of webpack configurations

## [Basics](basic)
> Bundle javascript
* [readme](basic/#readme)
* [webpack.config](basic/webpack.config.babel.js)

---

## [CSS](css)

### [CSS](css/css)
> Bundle & inject CSS

* [readme](css/css/#readme)
* [webpack.config](css/css/webpack.config.babel.js)

### [PostCSS](css/postcss)
> Bundle & inject [PostCSS](http://postcss.org/) processed CSS

* [readme](css/postcss/#readme)
* [webpack.config](css/postcss/webpack.config.babel.js)

### [Sass](css/sass) with PostCSS
> Bundle & inject Sass preprocessed CSS and use [PostCSS](http://postcss.org/) to post-process

* [readme](css/sass/#readme)
* [webpack.config](css/sass/webpack.config.babel.js)

---

## [JavaScript](javascript)

### [ES2015+ (Babel) > JavaScript](javascript/babel)
> Bundle ES2015+ Javascript with Babel transpiler

* [readme](javascript/babel/#readme)
* [webpack.config](javascript/babel/webpack.config.babel.js)

### Typescript > JavaScript (coming soon)

---

## HTML

### [Simple HTML](html/simple)
> Simplify creation of HTML files to serve your webpack bundles

* [readme](html/simple/#readme)
* [webpack.config](html/simple/webpack.config.babel.js)

### Complex HTML (coming soon)
> More complex version of previous example

---

## Assets

### Images (coming soon)
### SVGs (coming soon)
### Fonts (coming soon)
### Icons (coming soon)

---

## Testing

### Jest (coming soon)

## Linting

### ESLint (coming soon)
### Standard (coming soon)
### A11y (coming soon)

---

## Advanced

### Optimisation
#### [Code splitting - Commons Chunks](optimisation/common-chunks)
> Split all `node_module` vendor code into separate file

* [readme](optimisation/common-chunks/#readme)
* [webpack.config](optimisation/common-chunks/webpack.config.babel.js)

### Progressive Web Apps (coming soon)

---

## Useful plugins
* [Case Sensitive Paths](https://github.com/Urthen/case-sensitive-paths-webpack-plugin#case-sensitive-paths---webpack-plugin) - Enforces case sensitive paths in Webpack requires. Extremely useful for larger teams and continuous integration setups work without issues.
* [npm Install Webpack Plugin](https://github.com/webpack-contrib/npm-install-webpack-plugin) - Speed up development by **automatically installing & saving dependencies** with Webpack.
