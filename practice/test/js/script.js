$(function() {
    const btn = $('.btn');
    const width = $(window).width();
    const height = $(window).height();
    const content =  $('.content');
    btn.click(function() {
       const width = $(document).width();
       const height = $(document).height();
       
        console.log(width, height);
        const value = $('option:selected').val();
        console.log(value);
        if (value != '') {
            $('body').css('background-color', value)
        } else {
            alert ('you didnt pick color')
        }
    })

    $('select').change(function() {
        const value = $('option:selected').val();
        console.log(value);
        if (value != '') {
            $('body').css('background-color', value)
        } 

      content.html('<p> You chose '+ value +' color as your background</p>');
       
    });
    
    

});