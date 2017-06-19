module.exports = function(){
  $(function() {

    var menu_item='home';
    container_ajax(menu_item);	//load content
    $(function() {
      //menu div(click) AJAX
        $('.about_us,.footer_terms,.footer_privacy').click(function(){
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
      $('.footer_terms,.footer_smile,.footer_privacy,.footer_corpopation_license,.footer_hr').css('top',0);
      $('#container').html(data);

      var foot_hr=$(document).height();
      $('.footer_terms,.footer_smile,.footer_privacy,.footer_corpopation_license').css('top',foot_hr + 40 +'px');
      $('.footer_hr').css('top',foot_hr +'px');
      /*if (menu_item==menu_array[1]) {
        pages.wedding_flowers();
      }
      if (menu_item==menu_array[2]) {
        pages.bouquets();
      }
      if (menu_item==menu_array[3]) {
        pages.flower_composition();
      }
      if (menu_item==menu_array[4]) {
        pages.contacts();
      }*/
    }
  });
}

};
