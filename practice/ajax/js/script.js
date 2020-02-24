$(function() {
    // $('button').click(function() {
    //     $.get('test.txt', function(data, status) {
    //         console.log(data, status);
    //         $('#test').html('<p>' + data + '</p>')
    //         alert(status)
    //     })
    // })

   const input = $('input').keyup(function() {
       const name = $('input').val();
       $.post('suggestion.php', {
           suggestion: name
       }, function(data, status) {
           
       });
    console.log(input);
   });
    
});