module.exports = function(){
  $(function() {
    $(window).resize(function() {
      all_respon();

    });

  });
  all_respon();

function all_respon(){
  var height=0;
  $('.ABOUT_US_text p').each(function () {
    height=height + $(this).height();
  });
  $('.envelope').css('top',$('.ABOUT_US_text').position().top + height + 30);
}
};
