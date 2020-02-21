$(function() {

  const blueBox = $('.blue-box');

  blueBox.mouseenter(function () { 
    $(this).stop().fadeTo(500, .7);
  });

  blueBox.mouseleave(function() {
    $(this).stop().fadeTo(500, 1);
  })

  // hover(handlerIn, handlerOut)
  // mini challenge
  const redBox = $('.red-box');
  redBox.hover(function() {
    $(this).stop().fadeTo(500, .7);
  }, function() {
    $(this).stop().fadeTo(500, 1);
  });
}); 
