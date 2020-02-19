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
}) 
