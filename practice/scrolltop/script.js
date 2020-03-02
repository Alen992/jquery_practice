$(document).ready(function () {
 const navTOp = $(document).scrollTop();
 console.log(navTOp);
 let lastScroll = 0;

    $(window).scroll(function() {
        // if ($(document).scrollTop() > 20) {
        //     $('.nav').addClass('nav__active');
        // } else {
        //    $('.nav').removeClass('nav__active'); 
        // }
        console.log($(document).scrollTop());

        const scroll = $(document).scrollTop();

        if (lastScroll - scroll > 0 || scroll == 0) {
            
            $('.nav').removeClass('nav__active');
        } else {
            $('.nav').addClass(' nav__active');
        }

        lastScroll = scroll;
    })

  
});
