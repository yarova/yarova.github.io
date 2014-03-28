$.i18n = {
    en:{
        services: "Services",
        aboutMe: "About me",
        portfolio: "Portfolio",
        contacts: "Contacts",
        guestBook: "Guest book",
        services_title: "XXXXXXXXXXXX",
        services_column_service: "XXXXXXXXXXXX",
        services_column_price: "XXXXXXXXXXXX",
        services_row_createHtmlTemplate: "XXXXXXXXXXXX",
        services_row_createWebSiteByPicture: "XXXXXXXXXXXX",
        services_row_workWithPicture: "XXXXXXXXXXXX",
        aboutMe_MainText: "XXXXXXXXXXXX"
    },
    ru: {
        services: "Услуги",
        aboutMe: "Обо мне",
        portfolio: "Портфолио",
        contacts: "Контакты",
        guestBook: "Гостевая книга",
        services_title: "Список предоставляемых услуг",
        services_column_service: "Услуга",
        services_column_price: "Стоимость в $",
        services_row_createHtmlTemplate: "Создание html-шаблона по готовому эскизу",
        services_row_createWebSiteByPicture: "Создание веб-сайта по готовому эскизу",
        services_row_workWithPicture: "Подготовка рисунков и фотографий (за 1 изображение)",
        aboutMe_MainText: "Здесь придется что-то рассказать о себе, кратко."
    },
    ua: {
        services: "Сервiси",
        aboutMe: "Про мене",
        portfolio: "Портфолiо",
        contacts: "Контакти",
        guestBook: "Вiдгуки",
        services_title: "XXXXXXXXXXXX",
        services_column_service: "XXXXXXXXXXXX",
        services_column_price: "XXXXXXXXXXXX",
        services_row_createHtmlTemplate: "XXXXXXXXXXXX",
        services_row_createWebSiteByPicture: "XXXXXXXXXXXX",
        services_row_workWithPicture: "XXXXXXXXXXXX",
        aboutMe_MainText: "XXXXXXXXXXXX"
    }
};

$(function(){
    function localize($el, options) {
        var key = $el.attr('data-i18n'),
            dic = $.i18n[options.lang] || {},
            value = dic[key];

        if (!value) {
           alert('Has no translation of ' + key + ' for ' + options.lang + ' language')
        }

        $el.html(value);
    };

    function getDefaultLanguage(){
        var lang = (localStorage.getItem('lang') || navigator.language || navigator.userLanguage).substring(0, 2);
        return $.i18n[lang] ? lang : "en";
    }

    function UpdateLangDropDown(lang){
        var $first = $('#language li:first'),
            $currentLang = $('[data-lang=' + lang + ']');

        $currentLang.attr('data-lang', $first.attr('data-lang'));
        $first.attr('data-lang', lang);
    }

    $.fn.i18n = function(options){
        return $(this).each(function(){
            $(this).find('[data-i18n]').each(function() {
                localize($(this), options);
            });
        });
    }

    var currentLanguage = getDefaultLanguage();
    $(document).i18n({lang: currentLanguage});
    UpdateLangDropDown(currentLanguage);

    $('#language li').on('click', function(){
        var lang = $(this).attr('data-lang');
        UpdateLangDropDown(lang);
        localStorage.setItem('lang',lang);
        $(document).i18n({lang: lang});
    });
});