$(function() {
  const api = 'https://my-json-server.typicode.com/brankostancevic/products/products'
  $.getJSON(api, function(data) {
      console.log(data);
      var test = '';
    $.each(data, function(key, value) {
        $('<div>').addClass('card').html('<p class="card__title">'+ value.title + '</p>'
        + 
        // '<img class="card__image" src="' + value.image +'"/>'
        '<div class="card__image" style="background:url(' + value.image + ');"></div>'
        + '<div class="card__content"><div class="card__description">'+ value.description + '</div>'
        + '<div class="card__price"> <p class="card__price-text">Price: </p><p class="card__price-box"><span class="card__price-value">' + value.price + '</span><span class="card__valute"> $</span></p></div></div>' )
        .appendTo('.content');
        
    })
  });
});
