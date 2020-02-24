$(document).ready(function() {
    const api = 'https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';

    $.getJSON(api, {
        tags: 'mountain, lion',
        tagmode: 'any',
        format: 'json'

    }).done(function(data) {
        $.each(data.items, function(index, item) {
            $('<img>').attr('src', item.media.m).appendTo('.gallery');
            if (index == 11) {
                return false;
            }
            $('.gallery img').click(function() {
               const lightBoxImgSrc =  $(this).attr('src');
                $('.lightbox__img').attr('src', lightBoxImgSrc);    
                $('.lightbox').css('display', 'block');    
            });
            console.log();
        })

    }).fail(function() {
        console.log('fail');
        
    })

    $('.lightbox__background').click(function() {
        $('.lightbox').css('display', 'none');
    })
});