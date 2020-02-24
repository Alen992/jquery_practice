$(function() {
  const api = "https://swapi.co/api/people";

  $.getJSON(api, function(data) {

   const results = data.results;

    $.each(results, function(key, results) {
     console.log(results);
     $('<div>').addClass('card').html('<p>'+ results.name +'</p>'
     + '<p>Born in: ' + results.birth_year +'</p>').appendTo('.content');
      
  })
  });

  
});
