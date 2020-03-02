$(function() {
  // $('p').on('click', function() {
  //   $(this).slideUp();
  // })

  // $('#content').append('<p>This is appended paragraph</p>');

  // Delegeated Events
  $('#content').on('click', 'p', function() {
    $(this).slideUp();
  })

  $('#content').append('<p>This is appended paragraph</p>');

  $('body').on('mouseenter', 'li', function() {
    $(this).css('color', 'red');
  });
}); 

