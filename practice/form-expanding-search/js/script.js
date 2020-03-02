$(document).ready(function() {
  // $('#form').submit(function() {

  //   if ( $('.input').hasClass('activeForm')) {
  //     if($('.input').val().trim() == '') {
  //       $('.input').removeClass('activeForm');
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   } else {
  //     $('.input').addClass('activeForm');
  //   }
  // })
  
  $('#form').submit(function() {
    if ($('.input').hasClass('activeForm')) {
      if ($.trim($('.input').val()) === '') {
        $('.input').removeClass('activeForm');
        return false;
      }
    } else {
      $('.input').addClass('activeForm');
      return false;
    }
  });
});
