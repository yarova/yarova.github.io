$(function(){


    //Angle of lp start
    $(window).on('resize', function(){
        $('#landing-page svg').css('height', Math.floor(window.outerWidth * 0.1));
    });

    $('#landing-page svg').css('height', Math.floor(window.outerWidth * 0.1));
    //Angle of lp end


    $('body').on('activate.bs.scrollspy', function(e){
        $('header').toggleClass('dark-header', $('a', e.target).attr('href') !== '#landing-page')
    });

    $('header .animated-menu li').on('click', function(){
        $('.active').removeClass('active');
        $(this).addClass('active');
        $('header .animated-menu').collapse('hide', { animation: true })
        $('.icon-bar').toggleClass('button-cross');
    });

    $('.navbar').on('click', function(){
        $('.icon-bar').toggleClass('button-cross');
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

//masonry start
    var $container = $('.projects');
    $container.masonry({
        itemSelector: '.item',
        singleMode: false,
        isResizable: true,
        isAnimated: true,
        animationOptions: {
            queue: false,
            duration: 500
        }
    }).masonry("reloadItems").masonry();

    $('.projects img').on('load',function(){
        $container.masonry("reloadItems").masonry();
    });
//masonry end

// circles-experience start
    function animateCircles(){
        $('.circle-html').circleProgress({
            value: 0.90,
            size: 150,
            startAngle: 11,
            thickness: 15,
            fill: { color: "#554F60" },
            emptyFill: "rgba(255, 255, 255, .5)",
            animation: { duration: 3800 }
        });

        $('.circle-css').circleProgress({
            value: 0.82,
            size: 150,
            startAngle: 11,
            thickness: 15,
            fill: { color: "#554F60" },
            emptyFill: "rgba(255, 255, 255, .5)",
            animation: { duration: 3500 }
        });

        $('.circle-javascript').circleProgress({
            value: 0.35,
            size: 150,
            startAngle: 11,
            thickness: 15,
            fill: { color: "#554F60" },
            emptyFill: "rgba(255, 255, 255, .5)",
            animation: { duration: 1500 }
        });
    };

    function animateNumbers(){
        var percent_html_animation = $.animateNumber.numberStepFactories.append('%');
        $('.circle-html .percent').animateNumber({
                number: 90,
                easing: 'easeInQuad',
                numberStep: percent_html_animation
            }, 3800
        );

        var percent_css_animation = $.animateNumber.numberStepFactories.append('%');
        $('.circle-css .percent').animateNumber({
                number: 82,
                easing: 'easeInQuad',
                numberStep: percent_css_animation
            }, 3500
        );

        var percent_javascript_animation = $.animateNumber.numberStepFactories.append('%');
        $('.circle-javascript .percent').animateNumber({
                number: 35,
                easing: 'easeInQuad',
                numberStep: percent_javascript_animation
            }, 1500
        );
    };

    var isFunctionInvoked = true;
    $(window).scroll(function(){
        if  ($(window).scrollTop() > $('.my-experience .small-title').offset().top - $(window).height() && isFunctionInvoked){
            //console.log('Animations started');
            animateCircles();
            animateNumbers();
            isFunctionInvoked = false;
        }
    });

// circles-experience end



    function codeForIE() {
        if(detectBrowser() == 'IE') {
            $('.moveY, .moveX').css({ 'animation': 'none' });
        }
    };
    codeForIE();

    function detectBrowser(){
        var ua = navigator.userAgent;
        if (ua.match(/Chrome/)) return 'Chrome';
        if (ua.match(/Firefox/)) return 'Firefox';
        if (ua.match(/Opera/)) return 'Opera';
        if (ua.match(/Safari/)) return 'Safari';
        if (ua.match(/Mozilla/)) return 'IE';
    };


    //console message start
    var char = unescape('%u' + '2603'); /*2723*/ /*2740*/ /*2603*/
    console.log('%c' + char + ' Welcome! ' + char, 'color: #585F6C; font-size: 4em; font-family: Raleway');
    //console message end



    //SMOOTH SCROLLING start
    if ($('html').hasClass('desktop')) {
        $.srSmoothscroll();
    }
    //SMOOTH SCROLLING end

});