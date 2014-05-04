var Rainbow  = Rainbow || ( function(){
  'use strict';

  var container = $('ul.rainbow'),
  win           = $(window),
  beamHeight    = 5,

  init = function () {
    rays();
    interact();
  },

  rays = function () {
    var row = Math.ceil(win.height() / beamHeight),
    count = 0,
    ray = '';


    while (count < row) {
      ray += '<li class="ray"></li>';
      count++;
    };

    container.html(ray);

    container.find('li').each(function(idx){
      $(this).css('AnimationDelay', (idx / 100) + "s");
    });

  },

  interact = function() {
    container.find('li').on('click', function(){
      $(this).removeClass('ray').addClass('active');
    });
  };

  return {
    init: init
  };

})();

$(function(){
  Rainbow.init();
});