module.exports = function(){
  $(function() {

    resize();

    $(window).resize(function() {
      resize();
    });
  });
};

function resize() {
}
