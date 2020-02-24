$('select').on('change', function(){
    $('option:selected').each(function() {
        console.log($(this).val());
        
    })
 });