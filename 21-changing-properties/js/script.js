$(function() {
  $('.gallery').css('display', 'none'); // .hide()

  var redBox = $('.red-box');
  console.log(redBox.css('width'));
  console.log(redBox.width());

  redBox.css('background-color', 'orange');
  $('p').css('font-size', '18px');
  console.log($('p').css('font-size'));
  
  redBox.css('width', '+=20px')

  var properties = $('p').css(['font-size', 'line-height', 'color']);
console.log(properties);
console.log(properties['font-size']);

// redBox.css('user-select', 'none');
// console.log(redBox.css('user-select'));

redBox.css('user-select', function() {
  return 'none';
})

}); 
