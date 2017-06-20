module.exports = function(){
  $(function() {
    var foot_hr=$(document).height()+80;
    console.log(foot_hr);
    $('.footer_corpopation_license').css('top',foot_hr + 40 +'px');
    $('.footer_hr').css('top',foot_hr +'px');


    $(window).resize(function() {
      all();
    });
    all();

  });

function all(){
  console.log(213);


  var win_h_03=$(window).height()*0.3;
  $('.home_read_write').css('top',win_h_03);

  if($(window).width()<725){
    $('.home_read_write').css('font-size',$(window).width()*0.066);
    $('.home_text').css('font-size',$(document).width()*0.035).css('top',win_h_03 + $('.home_read_write').height()/2 -10);;
  }else {
    $('.home_read_write').css('font-size','48px');
    $('.home_text').css('font-size','20.02px').css('top',win_h_03 + $('.home_read_write').height()/2 +20);
  }


  $('.apps').css('top',$('.home_text').position().top + $('.home_text').height()/2   +30);

  if($(window).width()<450){
    $('.apps img').width($(window).width()*0.3).height($(window).width()*0.101);
  }else {
    $('.apps img').width(184);
  }
  $('.phone_div').css('top',$('.apps').position().top + $('.apps').height() + 65);




}
};
