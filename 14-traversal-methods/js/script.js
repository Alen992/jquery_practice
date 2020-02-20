$(function() {
  // $('#list').find('li').find('ul').css('background-color', 'red');
  // $('#list').parents().css('background-color', 'lightgreen');
  // $('#list').children().css('background-color', 'purple');
  // $('#list').siblings(':header').css('background-color', 'lightblue');
  // $('#list').prev().css('background-color', 'orange');
  // $('#list').next().css('background-color', 'yellow');
  // console.log($('#list').parents());
  $(':header').next().css('background-color', 'lightgreen');
  $('form').children('input').css({'background-color': 'grey', 'color': 'yellow'});
});