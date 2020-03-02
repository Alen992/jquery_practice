$(function() {
  var galleryItems = $('.gallery').find('img');

  galleryItems.css({'width': '30%', 'opacity': '.7'});

  galleryItems.mouseenter(function() {
    $(this).stop().fadeTo(500, 1);
  });

  galleryItems.mouseleave(function() {
    $(this).stop().fadeTo(500, .7);
  })

  galleryItems.click(function() {
    var source = $(this).attr('src');
    console.log(source);
    var image = $('<img>').addClass('newImg').attr('src', source).css('width', '100%');
    $('.lightbox').empty().append(image).fadeIn(2000);
  })

$('.lightbox').not('.arrow').click(function() {
  $(this).css('display', 'none').html('');
})

}); 

