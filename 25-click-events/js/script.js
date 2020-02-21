$(function() {
  $('#btn-click').click(function() {
    alert('Button was clicked.');
  });

  $('.red-box').click(function() {
    $('.red-box').fadeTo(2000, .15);
  });
}); 
