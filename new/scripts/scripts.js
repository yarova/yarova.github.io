
$(function(){

    $('body').on('activate.bs.scrollspy', function(e){
        $('header').toggleClass('dark-header', $('a', e.target).attr('href') !== '#landing-page')
    });

    $('.animated-menu li').on('click', function(){
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

    // parallax start
    $(".parallax-layer1").parallax(
        {
            xparallax: '30px',
            yparallax: '20px',
            width: 1,
            height: 1,
            mouseport: jQuery(".cloud-img")
        }
    );
    $(".parallax-layer2").parallax(
        {
            xparallax: '20px',
            yparallax: '10px',
            width: 1,
            height: 1,
            invertX: false,
            invertY: false,
            mouseport: jQuery(".cloud-img")
        }
    );
    // parallax end

    var $container = $('.projects');
    // init
    $container.isotope({
        // options
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });


});