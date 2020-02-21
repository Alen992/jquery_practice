$(function() {
  //text(), html()
  const firstPar = $('p:first');
  console.log(firstPar.text());
  console.log(firstPar.html());
  console.log($('p').html());

  // firstPar.text('<strong>Hello</strong>');
  // firstPar.html('<strong>Hello World!</strong>');
  
  // mini challenge

  firstPar.html(firstPar.html() + 'This was just appended.');
  
}); 
