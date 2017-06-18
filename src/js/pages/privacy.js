module.exports = function(){
  $(function() {

    resize();

    $(window).resize(function() {
      resize();
    });
  });
};

function resize() {
  //h_i_w_height
      $('.column_h_i_w').css('margin-top',$(window).height()*0.05);
      var h_i_w_height=$('#How_it_work_div').height() + $('#How_it_work_text').height() + parseInt($('.column_h_i_w').css('margin-top').slice(0,-2));
      $('.column_h_i_w').css('margin-top').slice(0,-2);
      $('.How_it_work').attr({'style':'height:' + h_i_w_height + 'px;','margin-bottom':$(window).height()*0.1});
  //We offer div
      $('#div_offer').css({'font-size':$(window).height()*0.05,'padding':$(window).height()*0.02});
      //$('.transparent').attr('style','height:' + h_i_w_height + 'pxs');
      $('.offer_1').css({'font-size':$(window).width()*0.035});
}
