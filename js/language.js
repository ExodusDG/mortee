function browserLocale() {
    var lang

    if (navigator.languages && navigator.languages.length) {
        // latest versions of Chrome and Firefox set this correctly
        lang = navigator.languages[0]
    } else if (navigator.userLanguage) {
        // IE only
        lang = navigator.userLanguage
    } else {
        // latest versions of Chrome, Firefox, and Safari set this correctly
        lang = navigator.language
    }

    return lang
}

if (browserLocale().indexOf('ru') !== 1) {
    //
} else {
    engLang()
}

function engLang() {

    $.getJSON('js/eng.json', function(data) {
        var items = [];
        $.each(data, function(key, val) {
            items.push(data);
            return false;
        });
        var engText = items[0]
            /* HEADER */
        $('.header__main').text(engText.header__main)
        $('.header__about').text(engText.header__about)
        $('.header__services').text(engText.header__services)
        $('.header__ticket').text(engText.header__ticket)
        $('.header__portfolio').text(engText.header__portfolio)
        $('.header__faq').text(engText.header__faq)
        $('.header__contacts').text(engText.header__contacts)

        $('.header__text-subtitle').text(engText.header__substitle)
        $('.header__text-title').text(engText.header__title)
        $('.header__text-button').text(engText.header__button)

        /* CARDS */

        $('.card__web_title').text(engText.header__web_title)
        $('.card__web_desc').text(engText.header__web_desc)

        $('.card__game_title').text(engText.header__game_title)
        $('.card__game_desc').text(engText.header__game_desc)

        $('.card__soft_title').text(engText.header__soft_title)
        $('.card__soft_desc').text(engText.header__soft_desc)

        $('.card__mob_title').text(engText.header__mob_title)
        $('.card__mob_desc').text(engText.header__mob_desc)

        $('.card__seo_title').text(engText.header__seo_title)
        $('.card__seo_desc').text(engText.header__seo_desc)

        $('.card__another_title').text(engText.header__another_title)
        $('.card__another_desc').text(engText.header__another_desc)

        /* ABOUT US */
        $('.about__title').text(engText.header__about)
        $('.about__text_losung').text(engText.about__losung)
        $('.about__text_title').text(engText.about__text_title)
        $('.ceo__text_1').text(engText.about__ceo_1)
        $('.ceo__text_2').text(engText.about__ceo_2)
        $('.ceo__author_1').text(engText.about__author_1)
        $('.ceo__author_2').text(engText.about__author_2)
        $('.ceo__role_1').text(engText.about__role_1)
        $('.ceo__role_2').text(engText.about__role_2)


        /* TICKET */
        $('.ticket__step_1_text').text(engText.ticket__step_1_text)
        $('.ticket__step_2_text').text(engText.ticket__step_2_text)

        $('.ticket__choise_select > p').text(engText.ticket__choise)
        $('.company__name').text(engText.company__name)
        $('.work__name').text(engText.work__name)
        $('.budget__count').text(engText.budget__count)
        $('.answer__design').text(engText.answer__design)
        $('.answer__anim').text(engText.answer__anim)
        $('.answer__support').text(engText.answer__support)
        $('.ticket-send-button').text(engText.ticket_send_button)
        $('#changeTariff').text('Change')
        $('.ticket__category').text(engText.ticket__category)

        $('.customer-name').attr('placeholder', engText.customer_name)
        $('.customer-surrname').attr('placeholder', engText.customer_surrname)
        $('.ticket__email_input').attr('placeholder', engText.ticket__email_input)
        $('.ticket-link-input').attr('placeholder', engText.ticket__link_input)
        $('.ticket__block-text').attr('placeholder', engText.ticket__block_text)

        /* PORTFOLIO */
        $('.porfolio-subtitle').text(engText.porfolio_subtitle)
        $('.portfolio-title').text(engText.portfolio_title)
        $('.all__button_sort').text(engText.all__button_sort)
        $('.portfolio-card-hover-text').text(engText.portfolio_card_hover_text)
            //    $('.review__author').text(engText.review__author)
        $('.portfolio-card-title').text(engText.portfolio_card_title)
        $('.portfolio__card_category').text(engText.portfolio__card_category)

        /* FAQ */

        $('.answer_1_title').text(engText.answer_1_title)
        $('.answer_1_desc').text(engText.answer_1_desc)
        $('.answer_2_title').text(engText.answer_2_title)
        $('.answer_2_desc').text(engText.answer_2_desc)
        $('.answer_3_title').text(engText.answer_3_title)
        $('.answer_3_desc').text(engText.answer_3_desc)
        $('.answer_4_title').text(engText.answer_4_title)
        $('.answer_4_desc').text(engText.answer_4_desc)
        $('.answer_5_title').text(engText.answer_5_title)
        $('.answer_5_desc').text(engText.answer_5_desc)
        $('.faq_answer_not_found').text(engText.faq_answer_not_found)
        $('.faq__answer_not_found a').text('Write to us!')
        $('.contact__subtitle').text(engText.contact__subtitle)
        $('.footer_coryping').text(engText.footer_coryping)
    });
}