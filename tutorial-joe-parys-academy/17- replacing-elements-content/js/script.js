$(function() {
  // $('li').replaceWith('<li>Replaced</li>')
  // $('li').replaceWith(function() {
  //   return '<li>Replaced with function</li>';
  // })
  // const firstListItem = $('li:first');
  // $('p:first').replaceWith(firstListItem);
  // $('.red-box, .blue-box').replaceWith($('<div class="green-box">green box 1</div>'));
  $('<div class="green-box">green box 1. More green!</div>').replaceAll('.red-box, .blue-box')
});
