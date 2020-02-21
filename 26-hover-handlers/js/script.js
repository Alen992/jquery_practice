$(function() {
  // :hover
  $('#btn-hover').hover(function() {
    alert('button is hovered!');
  })

  //mini challenge
  $('.green-box').hover(function() {
    $(this).text('I was hovered!');
  });
}); 
