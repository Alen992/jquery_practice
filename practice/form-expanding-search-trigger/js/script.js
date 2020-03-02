$(document).ready(function() {
  $('.btn__submit').click(function(e) {
    e.preventDefault();
  })

  $('.btn__submit').click(function() {
    if ($.trim($('.input').val()) === '') {
      if ($('.input').hasClass('activeForm')) {
        $('.input').removeClass('activeForm');
      } else {
        $('.input').addClass('activeForm');
      }
    } else {
      $('form').trigger('submit');
    }
  });
});
