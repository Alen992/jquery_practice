$(function() {
  // $('ul ul:first').append('<li>I\'m gonna be the last sub item</li>');
  // $('<li>I\'m gonna be the last item</li>').appendTo($('ul ul:last'));

  // $('ul ul:first').prepend('<li>I\'m gonna be the first sub item</li>');
  // $('<li>I\'m gonna be the first sub item</li>').prependTo('ul ul:last');

  // $('<h4>Peter Somehoff</h4>').prependTo('#content');

  // $('.red-box').after('<div class="red-box">Another Red</div>');
  // $('.green-box').before('<div class="green-box">Another green</div>');

  // $('.blue-box').before(function() {
  //   return '<div class="blue-box">Blue 2</div>'
  // })

  $('.blue-box').before($('.red-box'));
});
