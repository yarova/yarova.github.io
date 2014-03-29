i18n = (function(){
    var dics = {
            en:{
                services: "Services",
                aboutMe: "About me",
                portfolio: "Portfolio",
                contacts: "Contacts",
                guestBook: "Guest book",

                services_title: "List of services provided",
                services_column_service: "Services",
                services_column_price: "Price, $",
                services_row_createHtmlTemplate: "Create html-template from mock-up",
                services_row_createWebSiteByPicture: "Create web-site from sketch",
                services_row_workWithPicture: "Preparation of drawings and photos (1 image)",
                services_row_negotiated: "Negotiated",

                aboutMe_Title: "About me",
                aboutMe_MainText: "XXXXXXXXXXXX",

                portfolio_Title: "My work",
                portfolio_work_samples: "Examples of my work:",

                search_placeholder: "Search",
                warning_temporary_unavailable: "Unfortunately this functionality is temporary unavailable"
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
                services_row_negotiated: "Договорная",

                aboutMe_Title: "Обо мне",
                aboutMe_MainText: "Здесь придется что-то рассказать о себе, кратко.",

                portfolio_Title: "Мои работы",
                portfolio_work_samples: "Примеры моих работ:",

                contacts_Title: "Контакты",
                contacts_services: "Верстка, дизайн, создание сайтов",
                contacts_location: "Украина, Киев",
                contacts_phone: "Телефон: 0981203884",
                contacts_email: "E-mail: katesun18@gmail.com",
                contacts_skype: "Skype: katesun-18",
                contacts_contact_me: "Также Вы можете оставить заявку на сайте и я свяжусь с Вами в течение дня.",
                contacts_placeholder_name: "Ваше имя",
                contacts_placeholder_phone: "Телефон",
                contacts_placeholder_email: "E-mail",
                contacts_placeholder_terms: "Сроки исполнения заказа",
                contacts_placeholder_price: "Бюджет заказа",
                contacts_placeholder_site_type: "Тип сайта (визитка, каталог, корпоративный, другой)",
                contacts_placeholder_send: "Отправить",





                search_placeholder: "Поиск",
                warning_temporary_unavailable: "К сожалению, этот функционал временно недоступен"
            },
            ua: {
                services: "Сервiси",
                aboutMe: "Про мене",
                portfolio: "Портфолiо",
                contacts: "Контакти",
                guestBook: "Вiдгуки",

                services_title: "Список послуг, що надаються",
                services_column_service: "Послуга",
                services_column_price: "Вартість",
                services_row_createHtmlTemplate: "Створення html-шаблону по готовому ескізу",
                services_row_createWebSiteByPicture: "Створення веб-сайту по готовому ескізу",
                services_row_workWithPicture: "Підготовка малюнків і фотографій (за 1 зображення)",
                services_row_negotiated: "Договірна",

                aboutMe_Title: "Про мене",
                aboutMe_MainText: "XXXXXXXXXXXX",

                portfolio_Title: "Мої роботи",
                portfolio_work_samples: "Приклади моїх робіт:",

                search_placeholder: "Пошук",
                warning_temporary_unavailable: "На жаль цей функціонал тимчасово недоступний"
            }
        },
        defaultLang = (localStorage.getItem('lang') || navigator.language || navigator.userLanguage).substring(0, 2),
        lang = dics[defaultLang] ? defaultLang : 'en';

    return {
        get: function(key, language){
            return (dics[language || lang] || {})[key];
        },
        getLanguage: function(){
            return lang;
        },
        setLanguage: function(language){
            lang = language;
            localStorage.setItem('lang',language);
        }
    };
})();


$(function(){
    $.fn.i18n = function(options){
        return $(this).each(function(){
            $(this).find('[data-i18n]').each(function() {
                localize($(this), options);
            });
        });
    }

    function localize($el, options) {
        var attr = $el.attr('data-i18n-attr'),
            value = i18n.get($el.attr('data-i18n'), (options || {}).lang);

        attr ? $el.attr(attr, value) : $el.html(value);
    };

    function UpdateLangDropDown(){
        var lang = i18n.getLanguage(),
            $first = $('#language li:first');

        $('[data-lang=' + lang + ']').attr('data-lang', $first.attr('data-lang'));
        $first.attr('data-lang', lang);
    }

    $('#language li').on('click', function(){
        i18n.setLanguage($(this).attr('data-lang'));
        UpdateLangDropDown();
        $(document).i18n();
    });

    $(document).i18n();
    UpdateLangDropDown();
});