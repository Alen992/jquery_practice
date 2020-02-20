$(function() {
  // attr(), prop(), val()
  const specialLink = $('#special-link');
  console.log(specialLink.attr('href'));
  console.log(specialLink.attr('title'));

  specialLink.attr('href', 'http://petersommerhoff.com')
  console.log(specialLink.attr('href'));
});
