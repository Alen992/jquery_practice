$(document).ready(function () {
    $('img').click(function() {
        $(this).addClass('focused');
        $(this).parent().addClass('focused-parent');  
        $(this).prev().addClass('focused-bg');
    })

    $('.img__bg').click(function() {
       $(this).removeClass('focused-bg');
       $(this).next().removeClass('focused');
        $(this).parent().removeClass('focused-parent'); 
    })
    
});
