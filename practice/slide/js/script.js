$(document).ready(function() {
    
    const images = [
        './img/img-1.jpg',
        './img/img-2.jpg',
        './img/img-3.jpg',
        './img/img-4.jpg',
        './img/img-5.jpg',
        './img/img-6.jpg',
        './img/img-7.jpg',
        './img/img-8.jpg',
        './img/img-9.jpg',
        './img/img-10.jpg',
        './img/img-11.jpg',
        './img/img-12.jpg',
    ];

    let i = 0;
    let slidesChange = setInterval(slidesChanger, 2000);

    $('.slides').mouseenter(function() {
        clearInterval(slidesChange);
    });

    $('.slides').mouseleave(function() {
        slidesChange = setInterval(slidesChanger, 2000);
    });


    function slidesChanger() {
        if ( i == images.length - 1) {
            i = 0;
        } else {
            i++;
        }
        $('.slides__img').fadeOut().attr('src', images[i]).fadeIn();
    
    };
});
