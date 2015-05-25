
$(function(){

    $('header .main-menu li').on('click', function(){
        $('.active').removeClass('active');
        $(this).addClass('active');
    });

    $('.navbar').on('click', function(){
        $('.my-button').toggleClass('button-animate');
    });

    $.fn.scrollTo = function(duration, easing, complete){
        return $.each(this, function(){
            $('html, body').animate({ scrollTop: $(this).offset().top }, duration, easing, complete);
        })
    };

    $(document).on('click', 'a[href^=#]:not([role="button"])', function(e){
        e.preventDefault();
        $($(this).attr('href')).scrollTo(600, 'swing');
    });

    window.sr = new scrollReveal();

});
