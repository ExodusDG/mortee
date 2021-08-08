var bodyWidth = $('body').width();

/* PRELOADER */

setTimeout(preLoader, 1500);

function preLoader() {
    setTimeout(loadingHide(), 1000);

    function loadingHide() {
        $('.loader').css('display', 'none')
    }
    $('.preloader__left').addClass('preloader__left_hidden');
    $('.preloader__right').addClass('preloader__right_hidden');

    window.setTimeout(function() {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 1000);
}

/* TOP BUTTON */

var progressValue = document.querySelector('.progress');
var RADIUS = 50;
var CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function progress(value) {
    var progress = value / 100;
    var dashoffset = CIRCUMFERENCE * (1 - progress);
    progressValue.style.strokeDashoffset = dashoffset;
}
progressValue.style.strokeDasharray = CIRCUMFERENCE;
var pageHeight = $(document).outerHeight(true);

$(window).on('scroll', function() {
    var distanceScrolled = $(window).scrollTop();
    var scrollPercent = (distanceScrolled * 100) / pageHeight;
    progress(scrollPercent);
});

$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('resize scroll', function() {
    if ($('.header').isInViewport()) {
        $('.scroll_up').removeClass('scroll_up_visible');
    } else {
        $('.scroll_up').addClass('scroll_up_visible');
    }
});

/* END */

if (bodyWidth < 951 && bodyWidth > 769) {
    $('.section__title').attr('style', 'width:50%');
    $('#changeTariff').text('Сменить категорию')
} else if (bodyWidth < 768) {
    $('.section__title').attr('style', 'width:80%');
}
/* TOP BUTTON */

var progressValue = document.querySelector('.progress');
var RADIUS = 50;
var CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function progress(value) {
    var progress = value / 100;
    var dashoffset = CIRCUMFERENCE * (1 - progress);
    progressValue.style.strokeDashoffset = dashoffset;
}
progressValue.style.strokeDasharray = CIRCUMFERENCE;
var pageHeight = $(document).outerHeight(true);

$(window).on('scroll', function() {
    var distanceScrolled = $(window).scrollTop();
    var scrollPercent = (distanceScrolled * 100) / pageHeight;
    progress(scrollPercent);
});



/* FAQ SPOILER */
$('.faq__body_item').click(function() {
    var currentList = $(this).find('.faq_body_desc > p');
    currentList.toggleClass('faq__active');
    var currentBlock = $(this).find('.faq_body_desc');

    $(this).find('.faq__body_answer > img').toggleClass('faq_icon_rotate_inactive');
    var faqIcon = $(this).find('.faq__body_answer > img');

    if (currentList.hasClass('faq__active')) {
        faqIcon.removeClass('faq_icon_rotate_inactive');
        faqIcon.addClass('faq_icon_rotate_active');
    } else {
        faqIcon.removeClass('faq_icon_rotate_active');
        faqIcon.addClass('faq_icon_rotate_inactive');
    }

    if (currentList.hasClass('faq__active')) {
        currentBlock.css('transition', '0.3s');
        currentBlock.css('height', '100px');

    } else {
        currentBlock.css('transition', '0.3s');
        currentBlock.css('height', '0px');
    }
});
/* END */

/* PORTFOLIO SLIDER */

setInterval(() => {
    var slideCount = $('.portfolio-cards > div').not('.porfolio-card-hidden').length;
    var slideWidth = Number($('.porfolio-card').width()) + Number($('.porfolio-card').css('margin-right').replace('px', ''));
    var maxWrapperWidth = (slideCount - 5) * slideWidth;
    var currentSlideWidth = Number($('.portfolio-cards').attr('style').replace('transform: translateX(-', '').replace('px);', ''))
    var finalSlideWidth = Math.round(Number(currentSlideWidth + slideWidth)) * -1
    console.log(slideWidth)
    if (currentSlideWidth > maxWrapperWidth) {
        finalSlideWidth = Math.round(Number(currentSlideWidth - slideWidth))
        $('.portfolio-cards').attr('style', 'transform: translateX(-0px);');
    } else {
        finalSlideWidth = Math.round(Number(currentSlideWidth + slideWidth)) * -1;
        $('.portfolio-cards').attr('style', 'transform: translateX(' + Number(finalSlideWidth) + 'px);');
    }


}, 3000);

var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 600);
    return false;
}); //плавный скролл


$('.portfolio-wrapper > button').click(function() {
    var currentButton = $(this).attr('id').replace('-button', '');
    $('.portfolio-wrapper > button').removeClass('portfolio-sorter-b-active')
    $(this).addClass('portfolio-sorter-b-active')
    if (currentButton == 'all') {
        $('.porfolio-card').removeClass('porfolio-card-hidden');
        $('.portfolio-cards').attr('style', 'transform: translateX(-0px);');
    } else {
        $('.porfolio-card').addClass('porfolio-card-hidden');
        $('.' + currentButton + '-block').removeClass('porfolio-card-hidden');
        $('.portfolio-cards').attr('style', 'transform: translateX(-0px);');
    }
})


var wrapperWidth = $('.ticket__body_wrapper').width();
var stepWidth = $('.ticket__body_step-1').width()
var TickettranslateWidth = (wrapperWidth - stepWidth) * -1
$('.ticket__choise_select').click(function() {
    $('.ticket__body_wrapper').attr('style', 'transform: translateX(' + TickettranslateWidth + 'px)');
    $('.ticket').attr('style', 'height: auto !important')
})
$('#changeTariff').click(function() {
    $('.ticket__body_wrapper').attr('style', 'transform: translateX(0px)');
    $('.ticket').attr('style', 'height: 700px !important')
})
$('.ticket__block_contact > i').click(function() {
    $('.ticket__block_contact > i').not($(this)).css('color', 'white')
    $(this).css('color', '#9F16F8')

})

/* TICKET SLIDER */
var ticketSliderWrapper = Math.round($('.ticket__choise_slider').width())
var ticketCarouselWidth = Math.round($('.ticket__carousel_text').width())
var leftValue = (ticketSliderWrapper - ticketCarouselWidth) / 2
$('.ticket__carousel_text').css('left', +leftValue + 'px')

var ticketSliderWrapperH = Math.round($('.ticket__choise_slider').height())
var ticketCarouselHeight = Math.round($('.ticket__carousel_text').height())
var topValue = (ticketSliderWrapperH - ticketCarouselHeight) / 2
if (bodyWidth < 768) {
    var topValue = (ticketSliderWrapperH - ticketCarouselHeight) / 3
}
$('.ticket__carousel_text').css('top', +topValue + 'px')


$('.ticket__choise_slider').slick({
    adaptiveHeight: true,
    arrows: true,
    dots: true,
    prevArrow: $('.ticket-left'),
    nextArrow: $('.ticket-right'),
    appendDots: $('.ticket__choise-dots')
});

var currentDot = 1;

function dotUpdate() {
    currentDot = currentDot + 1;
    if (currentDot == 7) {
        currentDot = 1
        $('.nav-dot').removeClass('nav-dot-active');
        $('#dot' + currentDot).addClass('nav-dot-active')
    } else if (currentDot == 0) {
        currentDot = 6
        $('.nav-dot').removeClass('nav-dot-active');
        $('#dot' + currentDot).addClass('nav-dot-active')
    } else {
        $('.nav-dot').removeClass('nav-dot-active');
        $('#dot' + currentDot).addClass('nav-dot-active')
    }
}
$('.ticket__choise_slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    dotUpdate()
});

/* SKILLS SLIDER */

function skillsSlider() {
    var skillsWidth = Number($('.skills__wrapper').width() - $('.skills_slide-1').width())
    var skillsWrapper = $('.skills__wrapper');

    var skillsIsTranslated = 0;

    setInterval(() => {
        if (skillsIsTranslated == 0) {
            skillsWrapper.attr('style', 'transform: translateX(-' + skillsWidth + 'px');
            skillsIsTranslated = 1;
            $('.about__skills_dot').removeClass('about__dot_active')
            $('#slide-2-dot').addClass('about__dot_active')
        } else {
            skillsWrapper.attr('style', 'transform: translateX(0px');
            skillsIsTranslated = 0;

            $('.about__skills_dot').removeClass('about__dot_active')
            $('#slide-1-dot').addClass('about__dot_active')
        }


    }, 5000);
}

/* SKILLS LINE */

var target = $('.about__skills');
var targetPos = target.offset().top;
var winHeight = $(window).height();
var scrollToElem = targetPos - winHeight;
var lineLoaded = 0;
$(window).scroll(function() {
    var winScrollTop = $(this).scrollTop();
    if (lineLoaded == 1) {
        return false;
    } else {
        if (winScrollTop > scrollToElem) {
            var currentWebPercent = 0
            var maxWebPercent = $('#web__percent').text().replace('%', '');
            setInterval(() => {
                currentWebPercent = currentWebPercent + 0.5;
                if (currentWebPercent > maxWebPercent) {
                    return false;
                }
                $('#web__line').attr('style', 'width:' + currentWebPercent + '%');
                $('#web__percent').text(Math.round(currentWebPercent) + '%')
            }, 0.1);

            var currentGamePercent = 0
            var maxGamePercent = $('#game__percent').text().replace('%', '');
            setInterval(() => {
                currentGamePercent = currentGamePercent + 0.5;
                if (currentGamePercent > maxGamePercent) {
                    return false;
                }
                $('#game__line').attr('style', 'width:' + currentGamePercent + '%');
                $('#game__percent').text(Math.round(currentGamePercent) + '%')
            }, 0.07);
            skillsSlider()
            lineLoaded = 1;
        }
    }
});

/* NAVIGATION BAR */


$(window).on('resize scroll', function() {
    function navBarHide() {
        $('.nav__block_line').css('width', '0px');
        $('.nav__block_number').css('font-size', '18px').css('color', '#9F16F8');
    }

    if ($('.header').isInViewport()) {
        navBarHide()
        $('#nav-header').find('.nav__block_line').css('width', '60px');
        $('#nav-header').find('.nav__block_number').css('font-size', '22px').css('color', 'white');
    } else if ($('.about').isInViewport()) {
        navBarHide()
        $('#nav-about').find('.nav__block_line').css('width', '60px');
        $('#nav-about').find('.nav__block_number').css('font-size', '22px').css('color', 'white');
    } else if ($('.services').isInViewport()) {
        navBarHide()
        $('#nav-services').find('.nav__block_line').css('width', '60px');
        $('#nav-services').find('.nav__block_number').css('font-size', '22px').css('color', 'white');
    } else if ($('.ticket').isInViewport()) {
        navBarHide()
        $('#nav-ticket').find('.nav__block_line').css('width', '60px');
        $('#nav-ticket').find('.nav__block_number').css('font-size', '22px').css('color', 'white');
    } else if ($('.portfolio').isInViewport()) {
        navBarHide()
        $('#nav-portfolio').find('.nav__block_line').css('width', '60px');
        $('#nav-portfolio').find('.nav__block_number').css('font-size', '22px').css('color', 'white');
    } else if ($('.faq').isInViewport()) {
        navBarHide()
        $('#nav-faq').find('.nav__block_line').css('width', '60px');
        $('#nav-faq').find('.nav__block_number').css('font-size', '22px').css('color', 'white');
    } else if ($('.contacts').isInViewport()) {
        navBarHide()
        $('#nav-contacts').find('.nav__block_line').css('width', '60px');
        $('#nav-contacts').find('.nav__block_number').css('font-size', '22px').css('color', 'white');
    }
});
$('.burger__button').click(function() {
    $('.mobile__menu').css('left', '55vw');

    if (bodyWidth < 769 && bodyWidth > 492) {
        $('.mobile__menu').css('left', '45vw');
    }
    if (bodyWidth < 491) {
        $('.mobile__menu').css('left', '25vw');
    }
})
$('.button-close').click(function() {
    $('.mobile__menu').css('left', '100vw');
})
$(".services__card").click(function() {
    $('.ticket__body_wrapper').attr('style', 'transform: translateX(' + TickettranslateWidth + 'px)');
    $('.ticket').attr('style', 'height: auto !important')

    var currentServ = $(this).attr('id');
    console.log(currentServ)

    if (currentServ == 'web_card') {
        $('#category').text('Web - разработка');
    } else if (currentServ == 'game_card') {
        $('#category').text('Game - develop');
    } else if (currentServ == 'seo_card') {
        $('#category').text('SEO - оптимизация');
    } else if (currentServ == 'soft_card') {
        $('#category').text('Разработка ПО');
    } else if (currentServ == 'mobile_card') {
        $('#category').text('Mobile develop');
    } else if (currentServ == 'another_card') {
        $('#category').text('Прочее');
    }


    $('html, body').animate({
        scrollTop: $("#ticket").offset().top
    }, 800);
});

/* HEADER SLIDER */
var currentSlide = 1;
var slideCount = $('.header__slider_image img').length;
setInterval(() => {
    currentSlide = currentSlide + 1;
    if (currentSlide == 1) {
        webActive()
    } else if (currentSlide == 2) {
        gameActive()
    } else if (currentSlide == 3) {
        softActive()
    } else if (currentSlide == 4) {
        phoneActive()
    } else if (currentSlide > 5) {
        currentSlide = 0;
    }

}, 8000);

$('.number_1').click(function() {
    webActive()
})
$('.number_2').click(function() {
    gameActive()
})
$('.number_3').click(function() {
    softActive()
})
$('.number_4').click(function() {
    phoneActive()
})
var slideWrapper = $('.header__slider_image')
var translateWidth = (100 * (currentSlide - 1)) * -1;


function webActive() {
    slideWrapper.attr('style', 'transform: translateX(0vw');

    $('.card__shapes').removeClass('shape__active')
    $('.number_1').find('.card__shapes').addClass('shape__active')

    $('.header__card_line').attr('style', 'width: 0%');
    $('.number_1').find('.header__card_line').attr('style', 'width: 100%;')
}


function gameActive() {
    slideWrapper.attr('style', 'transform: translateX(-100vw');

    $('.card__shapes').removeClass('shape__active')
    $('.number_2').find('.card__shapes').addClass('shape__active')


    $('.header__card_line').attr('style', 'width: 0%');
    $('.number_2').find('.header__card_line').attr('style', 'width: 100%;')
}

function softActive() {
    slideWrapper.attr('style', 'transform: translateX(-200vw');

    $('.card__shapes').removeClass('shape__active')
    $('.number_3').find('.card__shapes').addClass('shape__active')


    $('.header__card_line').attr('style', 'width: 0%');
    $('.number_3').find('.header__card_line').attr('style', 'width: 100%;')
}

function phoneActive() {
    slideWrapper.attr('style', 'transform: translateX(-300vw');

    $('.card__shapes').removeClass('shape__active')
    $('.number_4').find('.card__shapes').addClass('shape__active')


    $('.header__card_line').attr('style', 'width: 0%');
    $('.number_4').find('.header__card_line').attr('style', 'width: 100%;')
}