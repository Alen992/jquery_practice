$(function() {
  $('.red-box').fadeTo(1000, .2);
  $('.green-box').delay(1000).fadeTo(1000, .5);
  $('.blue-box').delay(2000).fadeTo(1000, .8).delay(1000).fadeOut().delay(1000).fadeIn();
});