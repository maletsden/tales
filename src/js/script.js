//scripts
import ajax from './main/ajax';
import responsive from './main/responsive';
import alphabet_bg from './main/alphabet_bg';

//css
import  '../postcss/style.css';
//fonts
import CSSFontLoader from 'css-font-loader';
CSSFontLoader.loadFromCSS ( 'postcss/fonts/myfonts.css',function () {
  console.log('success');
});

ajax();
responsive();
alphabet_bg();
