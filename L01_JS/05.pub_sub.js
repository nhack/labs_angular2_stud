init1 = function($) {
  $('.color').click(function() {
    $('table.simple td').each(function() {
      $(this).toggleClass('selected');
    });
  });
};

init2 = function($) {
  $('.color').click(function() {
    $.publish('SELECTED')
  });

  $.subscribe('SELECTED', function(){
    $('table.simple td').each(function() {
      $(this).toggleClass('selected');
    });
  });
};

$('document').ready(function() {
  init2(jQuery);
});
