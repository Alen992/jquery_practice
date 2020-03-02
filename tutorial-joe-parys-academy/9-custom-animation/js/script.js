$(function() {
    $('.blue-box').animate({
    'margin-left': '+=200px',
    'opacity': '0',
    'height': '50px',
    'width': '50px',
    'margin-top': '25px'
    }, 2000, 'linear');
    $('.blue-box').animate({
        'margin-left': '-=200px',
        'opacity': '1',
        'height': '80px',
        'width': '80px',
        'margin-top': '10px'
    }, 2000, 'linear');
    $('p').animate({
        'font-size': '20px'
    }, 1000);
    $('p').animate({
        'font-size': '16px'
    }, 1000);
});
