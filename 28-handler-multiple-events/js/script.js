$(function() {
  // .on('click', function() { ... })

  // $('html').on('click keydown', function() {
  //   console.log('Mouse was clicked or key was pressed.');
  // });

  var galleryImage = $('.gallery').find('img').first();

  var images = [
    'images/laptop-mobile_small.jpg',
    'images/laptop-on-table_small.jpg',
    'images/people-office-group-team_small.jpg'
  ];
  var i = 0;

   $('.gallery').on('click', function() {
     i = (i+1) % images.length;
     console.log(i);
     $(galleryImage).fadeOut(function() {
      $(this).attr('src', images[i]);
      $(this).fadeIn();
     })

   })
}); 
