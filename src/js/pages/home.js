module.exports = function(){
  $(function() {
    $(window).resize(function() {
      all_respon();

    });

  });
  all_respon();

function all_respon(){
  var google_play_left=$(window).width()*0.09 + 330;
  console.log(google_play_left);
  $('.google_play').attr('style','left:' + google_play_left +'px;');
}
};
