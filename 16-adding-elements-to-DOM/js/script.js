$(function() {
  $('ul ul:first').append('<li>I\'m gonna be the last sub item</li>');
  $('<li>I\'m gonna be the last item</li>').appendTo($('ul ul:last'));

  $('ul ul:first').prepend('<li>I\'m gonna be the first sub item</li>');
  $('<li>I\'m gonna be the first sub item</li>').prependTo('ul ul:last');
});
