module.exports = function(){
  $(function() {
    $(window).resize(function functionName() {
      $('.footer_terms,.footer_smile,.footer_privacy,.footer_corpopation_license,.footer_hr').css('top',0);
      footer_resize();
    });
    var menu_item='privacy';
    container_ajax(menu_item);	//load content
    $(function() {
      //menu div(click) AJAX
        $('.about_us,.footer_terms,.footer_privacy,.header_img,.tales').click(function(){
          if($(this).attr('href')!=menu_item){
            menu_item=$(this).attr('href');
            container_ajax(menu_item);	//load content
            }
            return false;
        });


    });
    //window.location.replace('../src/index.html');

  });

function container_ajax(menu_item) {
  $.ajax({
    url: 'pages/' + menu_item + '.html',
    method:'GET',
    success: function(data){
      $('.alphabet_bg').empty();
      $('.footer_terms,.footer_smile,.footer_privacy,.footer_corpopation_license,.footer_hr').css('top',0);

      $('#container').html(data);

      footer_resize();
        if (menu_item=='home') {
        pages.home();
      }
      if (menu_item=='about') {
        pages.about();
      }
      if (menu_item=='terms') {
        pages.terms();
      }
      if (menu_item=='privacy') {
        pages.privacy();
      }
    }
  });
}


function footer_resize() {
  var foot_hr=$(document).height();
  $('.footer_terms,.footer_smile,.footer_privacy,.footer_corpopation_license').css('top',foot_hr + 40 +'px');
  $('.footer_hr').css('top',foot_hr +'px');
}
};
