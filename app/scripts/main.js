var Rainbow  = Rainbow || ( function(){
  'use strict';

  var container = $('ul.rainbow'),
  win           = $(window),
  beamHeight    = 5,
  bob           = $('.bob'),

  init = function () {
    music();
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

    setTimeout(function(){
      $("html, body").animate({ scrollTop: $(document).height() }, 5000);
    }, 2000);

  },

  music = function() {
    var tycho = document.getElementById('tycho'),
    music     = $(tycho);

    music.on('play', function(){
      bob.addClass('start');
    });

    music.on('pause', function(){
      bob.fadeTo(0.5, 500);
    });


    bob.on('click', function(){
      if(tycho.paused){
        tycho.play();
      }else{
        tycho.pause();
      }
      return false;
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