$(document).ready(function () {
    $('h1').on('click', function() {
        console.log('clicked h1');
        $('.dog1').text('new dog');
        $('.dogs').append('<li class="doggy">New doggy</li>')
        $('.doggy').on('mouseover', function() {
            $('.doggy').css('color', 'red');
        })
        $('.doggy').on('mouseleave', function() {
            $('.doggy').css('color', 'blue');
        })
        $('.dog1').after('<p>mY favorite dog</p>');
       const text = $('.dog1').text();
       console.log(text + '! 0-0 is it working?');
       $('li:nth-child(1)').html('<span>this is second dog</span>');
    })

    let design = {
        color: 'blue',
        background: 'green',
        border: '3px solid black',
        padding: '15px' 
    }

    $('h1').css(design);
    $('img').css('border', '5px solid black');

    $('.btn').click(function() {
        alert($('.input').val());
        $('.input').val('');
    })

    $('.puppers').addClass('red');

    // $('.remove').click(function() {
    //     $('.puppers').removeClass('red');
    // })

    $('.remove').click(function() {
        $('.puppers').toggleClass('red');
    })

    $('.press').on('keypress', function() {
        $('p').hide();
    })

    $('.show').click(function() {
        $('.puppers2 img').show();
    })

    $('.hide').click(function() {
        $('.puppers2 img').hide();
    })

    $('.bye').click(function() {
        $('.img1').fadeOut('slow');
        $('.img2').fadeOut('fast');
        $('.img3').fadeOut('slow');
    })
    $('.hello').click(function() {
        $('.img1').fadeIn(2000);
        $('.img2').fadeIn(3000);
        $('.img3').fadeIn(4000);
    })

    $('.slideBtn--up').click(function() {
        $('.div1').slideUp('fast');
    })

    $('.slideBtn--down').click(function() {
        $('.div1').slideDown('slow');
    })

    $('.slideBtn--toggle').click(function() {
        $('.div1').slideToggle(2000);
    })

    $(function() {
        $('.drag').draggable();
    });

    $(function() {
        $('.img1drop').draggable();
        $('.drop').droppable({
            drop: function(event, ui) {
                $( this)
                .addClass('ui-state-hightlight')
                .find('p')
                .html('Dropped!');
             }
        })
    })

    $('.datepick').datepicker();
}) 
