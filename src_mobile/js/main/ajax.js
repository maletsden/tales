module.exports = function(){
  $(function() {
    $('.footer_corpopation_license,.footer_hr').css('top',0);
    footer_resize();

    $(window).resize(function functionName() {
      $('.footer_corpopation_license,.footer_hr').css('top',0);
      footer_resize();
    });
    var menu_item='home';
    container_ajax(menu_item);	//load content
    $('.menu div').css('color','#fff')
    $('.menu div[href="'+menu_item+'"]').css('color','#f9b93e')
    $(function() {
      //menu div(click) AJAX
        $('.menu_cont > div > div').click(function(){
          if($(this).attr('href')!=menu_item){
            menu_item=$(this).attr('href');
            $('.menu div').css('color','#fff')
            $('.menu div[href="'+menu_item+'"]').css('color','#f9b93e')
            container_ajax(menu_item);	//load content
            }
            return false;
        });


    });

  });

function container_ajax(menu_item) {
  $.ajax({
    url: 'mobile/pages/' + menu_item + '.html',
    method:'GET',
    success: function(data){
      $('.footer_corpopation_license,.footer_hr').css('top',0);

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
  $('#container').ready(function() {
    var foot_hr=$(document).height()+80;
    console.log(foot_hr);
    $('.footer_corpopation_license').css('top',foot_hr + 40 +'px');
    $('.footer_hr').css('top',foot_hr +'px');

  });
}

};
