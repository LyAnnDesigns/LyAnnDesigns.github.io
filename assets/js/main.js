'use strict';

console.log('main.js was loaded');

var $arrow = $('.down-arrow');

function moveDown() {
  $arrow.animate({bottom: '20px'}, 1600, function() {
    moveUp();
  });
}

function moveUp() {
  $arrow.animate({bottom: '30px'}, 1600, function() {
    moveDown();
  });
}

moveDown();

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
