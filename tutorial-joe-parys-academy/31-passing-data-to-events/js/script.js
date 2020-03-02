$(function() {
  $('#btn-click').click({
    user: 'Peter',
    domain: 'petersomehoff.com'
  }, function(event) {
    greetUser(event.data);
  });

  function greetUser(userdata) {
    username = userdata.user || 'Anonymous';
    domain = userdata.domain || 'example.com';

    alert(' Welcome back ' + username + ' from ' + domain + '!');
  }
}); 

