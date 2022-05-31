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

homeSlider.on('afterChange', function (event, slick, currentSlide) {
    $(".counter-slide__cp").text(currentSlide < 10 ? `${currentSlide + 1}` : currentSlide + 1);
});

// mobile menu
$('.btn-burger').on('click', function () {
    $('.mobile-menu').fadeToggle();
});


// mask phone
$('[name="phone"]').mask('+7(999) 999 - 99 - 99');

//Сменим язык календаря на русский
$.datepicker.setDefaults(
    {
        closeText: 'Закрыть',
        prevText: '',
        currentText: 'Сегодня',
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthNamesShort: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
        dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
        dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        weekHeader: 'Не',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: '',
        changeMonth: true,
        changeYear: true,
    });


$('.datepicker').datepicker();

$(window).on("load", function () {
    $(".mCustomScrollbar-wrap").mCustomScrollbar({
        // theme: "light-thick",
        alwaysShowScrollbar: 2,
        scrollButtons: {enable: true}
    });
});

$(window).scroll(function () {
    var heightHeader = $('header').height();
    if ($(this).scrollTop() > heightHeader) {
        $('.work-home-navigation').addClass('fixed');
    } else {
        $('.work-home-navigation').removeClass('fixed');
    }
});

// подсвечивание активной ссылке при скролле + плавный скролл к секции по клику на пункт меню
var sections = $('.section-anchor'),
    nav = $('.work-home-navigation'),
    nav_height = nav.outerHeight();

$(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function () {
        var top = $(this).offset().top - nav_height,
            bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('.work-home-navigation__links').removeClass('active');
            sections.removeClass('active');

            $(this).addClass('active');
            nav.find('.work-home-navigation__links[href="#' + $(this).attr('id') + '"]').addClass('active');
        }
    });
});

nav.find('.work-home-navigation__links').on('click', function () {
    var $el = $(this),
        id = $el.attr('href');

    $('html, body').animate({
        scrollTop: $(id).offset().top - nav_height
    }, 500);

    return false;
});

new WOW().init();


