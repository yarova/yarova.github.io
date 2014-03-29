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

                contacts_Title: "Contacts",
                contacts_services: "Layout, design, creating website",
                contacts_location: "Kyiv, Ukraine",
                contacts_phone: "Phone: 0981203884",
                contacts_email: "E-mail: katesun18@gmail.com",
                contacts_skype: "Skype: katesun-18",
                contacts_contact_me: "You can also submit your application online and I will contact you during the day.",
                contacts_placeholder_name: "Your name",
                contacts_placeholder_phone: "Phone",
                contacts_placeholder_email: "E-mail",
                contacts_placeholder_terms: "Terms of order execution",
                contacts_placeholder_price: "Budget order",
                contacts_placeholder_site_type: "Site type (business card, catalog, corporate, other)",
                contacts_placeholder_send: "Send",

                guestbook_titile: "Guest book",
                guestbook_you_can_leave_ur_message: "Here you can write a review.",
                guestbook_placeholder_name: "Your name",
                guestbook_placeholder_email: "E-mail",
                guestbook_placeholder_comment: "Leave a comment ...",
                guestbook_send: "Send",

                leftpanel_tweet: "Tweet",
                leftpanel_google: "+1",
                leftpanel_facebook: "Like",

                footer_menu_main: "Main",
                footer_menu_services: "Services",
                footer_menu_aboutme: "About me",
                footer_menu_comments: "Comments",
                footer_menu_portfolio: "Portfolio",
                footer_menu_newssite: "News site 1",
                footer_menu_newssite2: "News site 2",
                footer_menu_videosite: "Video site",
                footer_menu_usefull: "Useful link",
                footer_menu_advice: "Advices",
                footer_menu_etc: "Another ...",
                footer_menu_contacts: "Contacts",
                footer_menu_contactme: "Contact me",
                footer_menu_order: "Make order",

                search_placeholder: "Search",
                warning_temporary_unavailable: "Unfortunately this functionality is temporary unavailable",
                scrollup: "Top",
                website_signature: "© 2014 mysite.com",
                website_signature_text: "Any use by other persons of materials posted on this site is prohibited"
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

                guestbook_titile: "Гостевая книга",
                guestbook_you_can_leave_ur_message: "Здесь Вы можете оставить отзыв.",
                guestbook_placeholder_name: "Ваше имя",
                guestbook_placeholder_email: "E-mail",
                guestbook_placeholder_comment: "Оставить отзыв...",
                guestbook_send: "Отправить",

                leftpanel_tweet: "Tweet",
                leftpanel_google: "+1",
                leftpanel_facebook: "Нравится",

                footer_menu_main: "Главная",
                footer_menu_services: "Услуги",
                footer_menu_aboutme: "Обо мне",
                footer_menu_comments: "Отзывы",
                footer_menu_portfolio: "Портфолио",
                footer_menu_newssite: "Сайт новостей 1",
                footer_menu_newssite2: "Сайт новостей 2",
                footer_menu_videosite: "Видео-сайт",
                footer_menu_usefull: "Полезности",
                footer_menu_advice: "Советы",
                footer_menu_etc: "Прочее",
                footer_menu_contacts: "Контакты",
                footer_menu_contactme: "Связаться со мной",
                footer_menu_order: "Сделать заказ",

                search_placeholder: "Поиск",
                warning_temporary_unavailable: "К сожалению, этот функционал временно недоступен",
                scrollup: "Наверх",
                website_signature: "© 2014 mysite.com",
                website_signature_text: "Любое использование иными лицами размещенных на сайте материалов запрещено"
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

                contacts_Title: "Контакти",
                contacts_services: "Верстка, дизайн, створення сайтів",
                contacts_location: "Україна, Київ",
                contacts_phone: "Телефон: 0981203884",
                contacts_email: "E-mail: katesun18@gmail.com",
                contacts_skype: "Skype: katesun-18",
                contacts_contact_me: "Також Ви можете залишити заявку на сайті і я зв'яжуся з Вами протягом дня.",
                contacts_placeholder_name: "Ваше ім'я",
                contacts_placeholder_phone: "Телефон",
                contacts_placeholder_email: "E-mail",
                contacts_placeholder_terms: "Терміни виконання замовлення",
                contacts_placeholder_price: "бюджет замовлення",
                contacts_placeholder_site_type: "Тип сайту (візитка, каталог, корпоративний, Інший)",
                contacts_placeholder_send: "Надіслати",

                guestbook_titile: "Гостьова книга",
                guestbook_you_can_leave_ur_message: "Тут Ви можете залишити відгук.",
                guestbook_placeholder_name: "Ваше ім'я",
                guestbook_placeholder_email: "E-mail",
                guestbook_placeholder_comment: "Залишити відгук ...",
                guestbook_send: "Надіслати",

                leftpanel_tweet: "Tweet",
                leftpanel_google: "+1",
                leftpanel_facebook: "Подобається",

                footer_menu_main: "Головна",
                footer_menu_services: "Послуги",
                footer_menu_aboutme: "Про мене",
                footer_menu_comments: "Відгуки",
                footer_menu_portfolio: "Портфоліо",
                footer_menu_newssite: "Сайт новин 1",
                footer_menu_newssite2: "Сайт новин 2",
                footer_menu_videosite: "Відео-сайт",
                footer_menu_usefull: "Корисності",
                footer_menu_advice: "Поради",
                footer_menu_etc: "Iнше",
                footer_menu_contacts: "Контакти",
                footer_menu_contactme: "Зв'язатися зі мною",
                footer_menu_order: "Зробити замовлення",

                search_placeholder: "Пошук",
                warning_temporary_unavailable: "На жаль, цей функціонал тимчасово недоступний",
                scrollup: "Наверх",
                website_signature: "© 2014 mysite.com",
                website_signature_text: "Будь-яке використання іншими особами розміщених на сайті матеріалів заборонено"
            }
        },
        defaultLang = ((localStorage ? localStorage.getItem('lang') : null) || navigator.language || navigator.userLanguage).substring(0, 2),
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
            localStorage && localStorage.setItem('lang',language);
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