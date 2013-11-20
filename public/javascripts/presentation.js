(function(){
  var length = 0;

  var initialize = function(){
    $(document).ready(function(){
      length = $('section.slide').length;
      bindEvents();
      changePage();
    });
  };

  var bindEvents = function(){
    $('nav button').click(function(){
      if ($(this).hasClass('next')) {
        $('nav input').val(parseInt($('nav input').val()) + 1);
      } else{
        $('nav input').val(parseInt($('nav input').val()) - 1);
      };
      changePage();
    });
    $('nav input').bind('keypress', function(e) {
      var code = e.keyCode || e.which;
      if(code == 13) {
        changePage(); 
      }
    });
    $("body").keydown(function(e) {
      if(e.keyCode == 37) { // left
        $('nav input').val(parseInt($('nav input').val()) - 1);
        changePage();
      } else if(e.keyCode == 39) { // right
        $('nav input').val(parseInt($('nav input').val()) + 1);
        changePage();
      };
    });
  };

  var changePage = function(){
    var index = parseInt($('nav input').val());
    if (index < 1) {
      index = 1;
    };
    if (index > length) {
      index = length;
    };
    $('nav input').val(index);
    var previus = $('section.slide.current');
    var next = $('section.slide:eq('+ (index-1) +')');

    $('nav button').prop("disabled",true);
    previus.hide('slide', {direction: 'left'}, 'slow', function(){
    // previus.effect('slide', {direction: 'left', mode: 'hide'}, function(){
      $(this).removeClass('current');
      next.show('slide', {direction: 'rigth'}, 'slow', function(){
        $(this).addClass('current');
        $('nav button').prop("disabled",false);
      });
    });
  };

  initialize();
})();