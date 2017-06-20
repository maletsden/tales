//scripts
import ajax from './main/ajax';
import menu from './main/menu';

//css
import  '../postcss/style.css';
//fonts
import CSSFontLoader from 'css-font-loader';
CSSFontLoader.loadFromCSS ( 'postcss/fonts/myfonts.css',function () {
});

ajax();
menu();
