// sliders
$('.partners-slider').slick({
    slidesToShow: 5,
    appendArrows: '.partners-slider-nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
});

$('.cases-slider').slick({
    slidesToShow: 3,
    dots: true,
    arrows: false,
});

// mask phone
$('[name="phone"]').mask('+7(999) 999 - 99 - 99');