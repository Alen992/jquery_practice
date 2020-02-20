$(function() {
// $('#list').find('li').filter(':even').css('background-color', 'lightgreen');
// $('#list').children('li').filter(':even').css('background-color', 'red');
// $('li').filter(function(index) {
//   return index % 3 === 2;
// }).css('background-color', 'lightgreen');

// $('li').first().css('background-color', 'lightgreen');
// $('li').last().css('background-color', 'orangered');
// $('li').eq(4).css('background-color', 'orangered');
// $('li').eq(-2).css('background-color', 'yellow');

// $('li').not(':first').css('background-color', 'lightgreen');
// $('li').not('#list ul li').css('background-color', 'blue');
  $('li').not(function(index) {
    return index % 3 === 2;
  }).css('background-color', 'purple');
});
