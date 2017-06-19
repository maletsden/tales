module.exports = function(){
  $(function() {
    $('#main').ready(function() {
      console.log($(document).height());
      resize();

      $(window).resize(function() {
        resize();
      });

    });

  });
};

function resize() {
  var alphabet = ['A','B','C','D','E','F','G','H','I','K','L','M','N','O','P','R','S','T','U','V','W','X','Y','Z'];
  console.log(Math.random());
  $.each(alphabet, function (index,value) {
    $('.alphabet_bg').append('<div class="'+index+'_alphabet"" style="top:'+ $(document).height()*Math.random()+'px;left:'+$(document).width()*Math.random()+'px;font-size:'+100*Math.random() + 100 +'%;opacity:'+Math.random()+';">'+value+'</div>')
  });
  setInterval(function() {
    $.each(alphabet, function (index,value) {
      $('div [class="'+index+'_alphabet"]').animate({'top':+ $(document).height()*Math.random(),'left':+$(document).width()*Math.random(),'font-size':+100*Math.random() + 100+'%','opacity':+Math.random()},12000);
    });
  },500);
}
