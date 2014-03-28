$(document).ready(function(){

    $('.fast-animation').removeClass('fast-animation');

    //Спрятать/показать кнопку Вверх
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn("slow");
        } else {
            $('.scrollup').fadeOut("slow");
        }
    });

    //Прокрутить страницу вверх кнопкой Вверх
    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600, /*"swing"*/"easeOutCubic");
        return false;
    });

    //Оранжевые иконки
    $('.hi-icon').on('click', function(e){
        var $alreadySelected = $('.iconGoDown'),
            $toSelect = $(this),
            $allItems = $('.hi-icon'),
            section = $toSelect.attr('data-section'),
            $title = $('h1[data-section=' + section + ']'),
            $round = $('.roundShadow');

        e.preventDefault();
        if ($toSelect.hasClass('iconGoDown')) {
             return;
        }

        //Переключать страницы
        $('.page').hide();
        $('.page[data-section=' + section + ']').show();

        //Стартовать анимацию оранжевой иконки
        $allItems.removeClass('iconGoDown iconGoUp');
        $alreadySelected.addClass('iconGoUp');
        $toSelect.addClass('iconGoDown');

        //Стартовать анимацию заголовка оранжевой иконки
        $('.rotateUp').removeClass('rotateUp');
        $('.hinge2.animated2').removeClass('hinge2 animated2').addClass('rotateUp');
        $title.addClass('hinge2 animated2');

        //Стартовать анимацию выемки
        $round.attr('data-section', section);
    })

    //Заголовки оранжевых иконок
    $('.animTitle').on('click', function(e){
            var $toSelect = $(this),
                $allItems = $('.animTitle'),
                section = $(this).attr('data-section'),
                $icon = $('.hi-icon[data-section=' + section + ']');

        e.preventDefault();
        $icon.trigger('click');
    })



    //Кнопка поиска
    $('#button').on('click', function(){
        var searchText = $('#search').val(),
            url = 'https://www.google.com/search?as_q=' + searchText + '&as_epq=&as_oq=&as_eq=&as_nlo=&as_nhi=&lr=&cr=&as_qdr=all&as_sitesearch=http%3A%2F%2Fstackoverflow.com%2F&as_occt=any&safe=images&as_filetype=&as_rights=';
        window.location.href = url;
    });


});