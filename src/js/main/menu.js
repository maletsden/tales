module.exports = function(){
  $(function() {
    $('.menu_icon_div').click(function() {
      $('.menu').animate({'left':0},500);
    });

    $('.fa-arrow-left').click(function() {
      $('.menu').animate({'left':'-100%'},500);
    });


    all();
    $(window).resize(function () {
      all();
    });

  });
function all() {


  $('.footer_corpopation_license').css('font-size',$(document).height()*0.02);
  $('.footer_hr').css('bottom',$(document).height()*0.025 + 40);

  $('.menu_cont > div > div,.socials i').css('font-size',$(document).height()*0.045);
  $('.menu_icon_div').css({'height':$('.logo').height()*0.35,'width':$('.logo').height()*0.47});

  $('.tales').css('font-size',$('.logo').height()*0.67);
  var menu_icon_div_t=$(document).height()*0.09 + (($('.logo').height() - $('.menu_icon_div').height())/2)
  $('.menu_icon_div').css('top',menu_icon_div_t);
}
};
