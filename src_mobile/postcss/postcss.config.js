var postcssCssnext = require('postcss-cssnext');
var cssnano = require('cssnano');
var postcssUrl = require("postcss-url");

module.exports = {
    parser: 'postcss-scss',
    plugins: [
        require('postcss-custom-properties'),
        require('postcss-import'),
        require('autoprefixer'),
        new cssnano ({
          autoprefixer:true,
          core:true,
          discardOverridden:true,
          postcssDiscardComments: true
        }),
        new postcssUrl ({}),
        new postcssCssnext({warnForDuplicates:false}),
        require('postcss-nested'),
        require('postcss-short')
    ]
}
