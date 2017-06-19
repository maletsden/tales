//scripts
import ajax from './main/ajax';
//css
import  '../postcss/style.css';
//fonts
import CSSFontLoader from 'css-font-loader';
CSSFontLoader.loadFromCSS ( 'postcss/fonts/myfonts.css',function () {
  console.log('success');
});

ajax();
