$(function() {
  // JSON, $.getJSON()
  const flickrApiUrl = 'https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';

  $.getJSON(flickrApiUrl, {
    tags: 'sun, beach', 
    tagmode: 'any',
    format: 'json'
  }).done(function(data) {
    //success
    console.log(data);
    $.each(data.items, function(index, item) {
      console.log(item);
      $('<img>').attr('src', item.media.m).addClass('image').appendTo('#flickr');

      if(index == 4 ) {
        return false;
      }
    });
    
  }).fail(function() {
    alert('ajax call failed');
  })


  let images = $('.gallery img');

  $('.image').click(function() {
    console.log('zaza');
    
  })
  
}); 

