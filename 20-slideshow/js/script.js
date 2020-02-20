$(function() {
 var galleryImage = $('.gallery').find('img').first();
 
 var images = [
   'images/laptop-mobile_small.jpg',
   'images/laptop-on-table_small.jpg',
   'images/people-office-group-team_small.jpg'
 ];
const next = $('.btn__next');
const prev = $('.btn__prev');

 var i = 0;
 setInterval(function() {
  i = (i + 1) % images.length; //0, 1, 2, 0, 1, 2, 0, 1, ...
  
  galleryImage.fadeOut(function() {
    $(this).attr('src', images[i]);
    $(this).fadeIn();
  });
  console.log(galleryImage.attr('src'));
 }, 10000);

 next.click(function() {
  i = (i + 1) % images.length;
  console.log(i);
  galleryImage.fadeOut(function() {
    $(this).attr('src', images[i]);
    $(this).fadeIn();
  });
  console.log(galleryImage.attr('src'));
})
prev.click(function() {
  i = (i +2) % images.length;
  console.log(i);
  galleryImage.fadeOut(function() {
    $(this).attr('src', images[i]);
    $(this).fadeIn();
  });
  console.log(galleryImage.attr('src'));
})
  
});
