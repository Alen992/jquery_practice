$(document).ready(function () {
    const galleryImages = $(".gallery").find("img");
    const lightbox = $(".lightbox");
    const lightboxImg = $('.lightbox__image');
    let sourceNumber;
    let numbar
    $(galleryImages).click(function () {
        const source = $(this).attr("src");
        $(lightboxImg).attr("src", source);
        $(lightbox)
            .fadeIn(300)
            .css("display", "flex");

        sourceNumber = $(this).attr("src").slice(10).split('.').shift();
        console.log(sourceNumber);
        numbar = parseInt(sourceNumber);       
        });

    const prev = $(".arrow__prev");
    const next = $(".arrow__next");

    $(next).click(function () {   
        numbar++;
        console.log(numbar);
        
        console.log(galleryImages.length);
        if (numbar > galleryImages.length) {
            numbar = 1;
            $(lightboxImg).attr('src', './img/img-' + numbar + '.jpg')
        } else {
        $(lightboxImg).attr('src', './img/img-' + numbar + '.jpg')
        }
        console.log(lightboxImg.attr('src'));
    });

    $(prev).click(function () {   
        numbar--;
        console.log(numbar);
        
        console.log(galleryImages.length);
        if (numbar == 0) {
            numbar = galleryImages.length;
            $(lightboxImg).attr('src', './img/img-' + numbar + '.jpg')
        } else {
        $(lightboxImg).attr('src', './img/img-' + numbar + '.jpg')
        }
        console.log(lightboxImg.attr('src'));
        
    });

    $(".lightbox__background").click(function () {
        $(lightbox).css("display", "none");
    });
});
