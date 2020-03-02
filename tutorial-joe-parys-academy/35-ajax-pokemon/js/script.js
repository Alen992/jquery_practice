$(function() {
  const pokeapiUrl = 'https://pokeapi.co/api/v2/generation/1';
  const pokemonByName = 'https://pokeapi.co/api/v2/pokemon/';  

  $.getJSON(pokeapiUrl).done(function(data) {
   console.log(data);
  $.each(data.pokemon_species, function(index, pokemon) {
    const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    const link = $('<a>').attr('id', pokemon.name).attr('href', '#').append($('<strong>').text(name));
    const par = $('<p>').html('Pokemon species no. ' + (index + 1) + ' is ').append(link);
    if (index == 10) {
      return false;
    }

    link.click(function(event) {
      $.getJSON(pokemonByName + pokemon.name).done(function(details) {
        console.log(details);
       const pokemonDiv =  $('.pokemon__details');
        pokemonDiv.empty();
        pokemonDiv.append('<h2>' + name + '</h2>');
        pokemonDiv.append('<img src = "' + details.sprites.front_default +  '">')
        pokemonDiv.append('<img src = "' + details.sprites.back_default +  '">')
        pokemonDiv.append('<img src = "' + details.sprites.front_shiny +  '">')
        pokemonDiv.append('<img src = "' + details.sprites.back_shiny +  '">')
      })
    });


    par.appendTo('.pokemon');
    });
  }).fail(function() {
    console.log('fail');
  }).always(function() {
    console.log('Pokemon is awesome.');
  })
}); 

