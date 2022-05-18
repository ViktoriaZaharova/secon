// sliders
$('.partners-slider').slick({
    slidesToShow: 5,
    appendArrows: '.partners-slider-nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 420,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
});

$('.cases-slider').slick({
    slidesToShow: 3,
    dots: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,

            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.home-slider').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    dots: true,
    appendDots: '.home-slider-dots'
});

$('.home-slider-navigation').slick({
    slidesToShow: 4,
    arrows: false,
    focusOnSelect: true,
    asNavFor: '.home-slider',
    responsive: [
        {
            breakpoint: 850,
            settings: {
                slidesToShow: 3,

            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                autoplay: true,
                autoplaySpeed: 3000,
            }
        },
        {
            breakpoint: 420,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

let homeSlider = $('.home-slider');

$('.counter-slide__default').text("/" + homeSlider.slick("getSlick").slideCount);

homeSlider.on('afterChange', function(event, slick, currentSlide){
    $(".counter-slide__cp").text(currentSlide<10?`${currentSlide+1}`:currentSlide+1);
});

// mobile menu
$('.btn-burger').on('click', function () {
   $('.mobile-menu').fadeToggle();
});


// mask phone
$('[name="phone"]').mask('+7(999) 999 - 99 - 99');