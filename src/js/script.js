//scripts
import ajax from './main/ajax';
import responsive from './main/responsive';

//css
import  '../postcss/style.css';
//fonts
import CSSFontLoader from 'css-font-loader';
CSSFontLoader.loadFromCSS ( 'postcss/fonts/myfonts.css',function () {
});

ajax();
responsive();
