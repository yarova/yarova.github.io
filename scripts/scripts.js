$(function(){

    $(window).on('resize', function(){
        $('#landing-page svg').css('height', Math.floor(window.outerWidth * 0.1));
    });

    $('#landing-page svg').css('height', Math.floor(window.outerWidth * 0.1));


    /*if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
    window.onmousewheel = document.onmousewheel = wheel;

    function wheel(event) {
        var delta = 0;
        if (event.wheelDelta) delta = event.wheelDelta / 120;
        else if (event.detail) delta = -event.detail / 3;

        handle(delta);
        if (event.preventDefault) event.preventDefault();
        event.returnValue = false;
    }

    function handle(delta) {
        var time = 800; // delay time
        var distance = 500; // delta point
        // Dom where it will apply
        $('html, body').stop().animate({
            scrollTop: $(window).scrollTop() - (distance * delta)
        }, time );
    }*/

    /*jQuery.extend(jQuery.easing, {
        easeOutQuint: function(x, t, b, c, d) {
            return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
        }
    });

    var wheel = false,
        $docH = $(document).height() - $(window).height(),
        $scrollTop = $(window).scrollTop();

    $(window).bind('scroll', function() {
        if (wheel === false) {
            $scrollTop = $(this).scrollTop();
        }
    });
    $(document).bind('DOMMouseScroll mousewheel', function(e, delta) {
        delta = delta || -e.originalEvent.detail / 3 || e.originalEvent.wheelDelta / 120;
        wheel = true;

        $scrollTop = Math.min($docH, Math.max(0, parseInt($scrollTop - delta * 30)));
        $('body').stop().animate({
            scrollTop: $scrollTop + 'px'
        }, 2000, 'easeOutQuint', function() {
            wheel = false;
        });
        return false;
    });*/


    // Custom scrolling speed with jQuery
// Source: github.com/ByNathan/jQuery.scrollSpeed
// Version: 1.0.2

    /*(function($) {

        jQuery.scrollSpeed = function(step, speed, easing) {

            var $document = $(document),
                $window = $(window),
                $body = $('html, body'),
                option = easing || 'default',
                root = 0,
                scroll = false,
                scrollY,
                scrollX,
                view;

            if (window.navigator.msPointerEnabled)

                return false;

            $window.on('mousewheel DOMMouseScroll', function(e) {

                var deltaY = e.originalEvent.wheelDeltaY,
                    detail = e.originalEvent.detail;
                scrollY = $document.height() > $window.height();
                scrollX = $document.width() > $window.width();
                scroll = true;

                if (scrollY) {

                    view = $window.height();

                    if (deltaY < 0 || detail > 0)

                        root = (root + view) >= $document.height() ? root : root += step;

                    if (deltaY > 0 || detail < 0)

                        root = root <= 0 ? 0 : root -= step;

                    $body.stop().animate({

                        scrollTop: root

                    }, speed, option, function() {

                        scroll = false;

                    });
                }

                if (scrollX) {

                    view = $window.width();

                    if (deltaY < 0 || detail > 0)

                        root = (root + view) >= $document.width() ? root : root += step;

                    if (deltaY > 0 || detail < 0)

                        root = root <= 0 ? 0 : root -= step;

                    $body.stop().animate({

                        scrollLeft: root

                    }, speed, option, function() {

                        scroll = false;

                    });
                }

                return false;

            }).on('scroll', function() {

                if (scrollY && !scroll) root = $window.scrollTop();
                if (scrollX && !scroll) root = $window.scrollLeft();

            }).on('resize', function() {

                if (scrollY && !scroll) view = $window.height();
                if (scrollX && !scroll) view = $window.width();

            });
        };

        jQuery.easing.default = function (x,t,b,c,d) {

            return -c * ((t=t/d-1)*t*t*t - 1) + b;
        };

    })(jQuery);

    jQuery.scrollSpeed(100, 800);*/

    /*(function(d){d.fn.dzsparallaxer=function(c){if("undefined"==typeof c&&"undefined"!=typeof d(this).attr("data-options")&&""!=d(this).attr("data-options")){var g=d(this).attr("data-options");eval("var aux_opts = "+g);c=aux_opts}c=d.extend({settings_mode:"scroll",mode_scroll:"normal",easing:"easeIn",animation_duration:"20",direction:"normal",js_breakout:"off",breakout_fix:"off",settings_movexaftermouse:"off",settings_makeFunctional:1},c);Math.easeIn=function(c,d,g,v){return-g*(c/=v)*(c-2)+d};Math.easeOutQuad=
        function(c,d,g,v){c/=v;return-g*c*(c-2)+d};Math.easeInOutSine=function(c,d,g,v){return-g/2*(Math.cos(Math.PI*c/v)-1)+d};this.each(function(){function g(){if(!D){D=!0;d(window).bind("resize",W);W();a.hasClass("wait-readyall")&&setTimeout(function(){w()},700);setTimeout(function(){a.addClass("dzsprx-readyall");w();a.hasClass("wait-readyall")&&(q=Number(c.animation_duration))},1E3);0<a.find("*[data-parallaxanimation]").length&&a.find("*[data-parallaxanimation]").each(function(){var a=d(this);if(a.attr("data-parallaxanimation")){null==
    B&&(B=[]);B.push(a);var b=a.attr("data-parallaxanimation");try{eval("window.aux_opts2 = "+b)}catch(c){console.info(c),window.aux_opts2=null}if(window.aux_opts2){for(k=0;k<window.aux_opts2.length;k++)0==isNaN(Number(window.aux_opts2[k].initial))&&(window.aux_opts2[k].initial=Number(window.aux_opts2[k].initial)),0==isNaN(Number(window.aux_opts2[k].mid))&&(window.aux_opts2[k].mid=Number(window.aux_opts2[k].mid)),0==isNaN(Number(window.aux_opts2[k]["final"]))&&(window.aux_opts2[k]["final"]=Number(window.aux_opts2[k]["final"]));
        a.data("parallax_options",window.aux_opts2)}}});a.hasClass("simple-parallax")?l.wrap('<div class="simple-parallax-inner"></div>'):N();setTimeout(function(){},1500);if(a.hasClass("use-loading")){if(0<a.find(".divimage").length||0<a.children("img").length){if(0<a.find(".divimage").length){O&&a.find(".divimage").eq(0).css("background-image","url("+O+")");var f=String(a.find(".divimage").eq(0).css("background-image")).split('"')[1];void 0==f&&(f=String(a.find(".divimage").eq(0).css("background-image")).split("url(")[1],
        f=String(f).split(")")[0]);var b=new Image;b.onload=function(b){a.addClass("loaded")};b.src=f}}else a.addClass("loaded");setTimeout(function(){a.addClass("loaded");X()},1E4)}a.get(0).api_set_update_func=function(a){P=a};"scroll"==c.settings_mode&&(d(window).unbind("scroll",w),d(window).bind("scroll",w),w(),setTimeout(w,1E3),document.addEventListener("touchmove",v,!1));"mouse_body"!=c.settings_mode&&"on"!=c.settings_movexaftermouse||d(document).bind("mousemove",v)}}function W(){C=a.width();x=d(window).height();
        Q=d(window).width();!1!==D&&(760>C?a.addClass("under-760"):a.removeClass("under-760"),R&&clearTimeout(R),R=setTimeout(X,700),"on"==c.js_breakout&&(a.css("width",Q+"px"),a.css("margin-left","0"),0<a.offset().left&&a.css("margin-left","-"+a.offset().left+"px")))}function X(){h=a.height();m=l.height();x=d(window).height();0==a.hasClass("allbody")&&0==a.hasClass("dzsparallaxer---window-height")&&(m<=S&&0<m?(a.height(m),h=a.height(),is_ie()&&10>=version_ie()?l.css("top","0"):l.css("transform","translate3d(0,0px,0)"),
    E&&E.css("opacity","0")):a.height(S));l.attr("data-forcewidth_ratio")&&(l.width(Number(l.attr("data-forcewidth_ratio"))*l.height()),l.width()<a.width()&&l.width(a.width()))}function v(a){if("mouse_body"==c.settings_mode){r=a.pageY;var b=0;if(0==m)return;b=r/x*(h-m);t=r/h;0<b&&(b=0);b<h-m&&(b=h-m);1<t&&(t=1);0>t&&(t=0);J=b}"on"==c.settings_movexaftermouse&&(b=0,b=a.pageX/Q*(C-F),0<b&&(b=0),b<C-F&&(b=C-F),Y=b)}function w(f){r=d(window).scrollTop();u=0;!1===D&&(x=d(window).height(),r+x>=a.offset().top&&
    g());if(0!=m&&!1!==D&&"scroll"==c.settings_mode){"fromtop"==c.mode_scroll&&(u=r/h*(h-m),"reverse"==c.direction&&(u=(1-r/h)*(h-m)));A=a.offset().top;f=(r-(A-x))/(A+h-(A-x));1<f&&(f=1);0>f&&(f=0);if(B)for(k=0;k<B.length;k++){var b=B[k],y=b.data("parallax_options");for(j=0;j<y.length;j++){if(.5>=f){var z=2*f,p=2*f-1;0>p&&(p=-p);z=p*y[j].initial+z*y[j].mid}else z=2*(f-.5),p=z-1,0>p&&(p=-p),z=p*y[j].mid+z*y[j]["final"];p=y[j].value;p=p.replace("{{val}}",z);b.css(y[j].property,p)}}"normal"==c.mode_scroll&&
    (u=f*(h-m),"reverse"==c.direction&&(u=(1-f)*(h-m)),a.hasClass("debug-target")&&console.info(c.mode_scroll,r,A,x,h,A+h,f));T&&(f=Math.abs((r-A)/a.outerHeight()-1),1<f&&(f=1),0>f&&(f=0),T.css("opacity",f));t=r/h;0<u&&(u=0);u<h-m&&(u=h-m);1<t&&(t=1);0>t&&(t=0);J=u;Z=t;0===q&&(n=J,is_ie()&&10>=version_ie()?l.css("top",""+n+"px"):l.css("transform","translate3d(0,"+n+"px,0)"));time=0}}function N(){isNaN(n)&&(n=0);if(0===q)return requestAnimFrame(N),!1;G=n;K=J-G;H=I;L=Z-H;"easeIn"==c.easing&&(n=Number(Math.easeIn(1,
        G,K,q).toFixed(5)),I=Number(Math.easeIn(1,H,L,q).toFixed(5)));"easeOutQuad"==c.easing&&(n=Math.easeOutQuad(1,G,K,q),I=Math.easeOutQuad(1,H,L,q));"easeInOutSine"==c.easing&&(n=Math.easeInOutSine(1,G,K,q),I=Math.easeInOutSine(1,H,L,q));M=0;"on"==c.settings_movexaftermouse&&(U=M,aa=Y-U,M=Math.easeIn(1,U,aa,q));is_ie()&&10>=version_ie()?l.css("top",""+n+"px"):l.css("transform","translate3d("+M+"px,"+n+"px,0)");E&&E.css("opacity",I);P&&P(n);requestAnimFrame(N)}var a=d(this),l=null,E=null,T=null,k=0,F=
        0,m=0,h=0,C=F=0,Q=0,x=0,S=0,R=0,q=0,n=0,M=0,I=0,G=0,U=0,H=0,J=0,Y=0,Z=0,K=0,aa=0,L=0,P=null,r=0,u=0,t=0,A=0,O="",D=!1,B=null;(function(){if(1==c.settings_makeFunctional){var f=!1,b=document.URL,k=b.indexOf("://")+3,n=b.indexOf("/",k),b=b.substring(k,n);-1<b.indexOf("l")&&-1<b.indexOf("c")&&-1<b.indexOf("o")&&-1<b.indexOf("l")&&-1<b.indexOf("a")&&-1<b.indexOf("h")&&(f=!0);-1<b.indexOf("d")&&-1<b.indexOf("i")&&-1<b.indexOf("g")&&-1<b.indexOf("d")&&-1<b.indexOf("z")&&-1<b.indexOf("s")&&(f=!0);-1<b.indexOf("o")&&
    -1<b.indexOf("z")&&-1<b.indexOf("e")&&-1<b.indexOf("h")&&-1<b.indexOf("t")&&(f=!0);-1<b.indexOf("e")&&-1<b.indexOf("v")&&-1<b.indexOf("n")&&-1<b.indexOf("a")&&-1<b.indexOf("t")&&(f=!0);if(0==f)return}l=a.find(".dzsparallaxer--target").eq(0);0<a.find(".dzsparallaxer--blackoverlay").length&&(E=a.find(".dzsparallaxer--blackoverlay").eq(0));0<a.find(".dzsparallaxer--fadeouttarget").length&&(T=a.find(".dzsparallaxer--fadeouttarget").eq(0));a.hasClass("wait-readyall")||setTimeout(function(){q=Number(c.animation_duration)},
        300);h=a.height();"on"==c.settings_movexaftermouse&&(C=a.width());l&&(m=l.height(),"on"==c.settings_movexaftermouse&&(F=l.width()));S=h;"2"==c.breakout_fix&&console.info(a.prev());0<a.find(".dzsprxseparator--bigcurvedline").length&&a.find(".dzsprxseparator--bigcurvedline").append('<svg class="display-block" width="100%"  viewBox="0 0 2500 100" preserveAspectRatio="none" ><path class="color-bg" fill="#FFFFFF" d="M2500,100H0c0,0-24.414-1.029,0-6.411c112.872-24.882,2648.299-14.37,2522.026-76.495L2500,100z"/></svg>');
        0<a.find(".dzsprxseparator--2triangles").length&&a.find(".dzsprxseparator--2triangles").append('<svg class="display-block" width="100%"  viewBox="0 0 1500 100" preserveAspectRatio="none" ><polygon class="color-bg" fill="#FFFFFF" points="1500,100 0,100 0,0 750,100 1500,0 "/></svg>');0<a.find(".dzsprxseparator--triangle").length&&a.find(".dzsprxseparator--triangle").append('<svg class="display-block" width="100%"  viewBox="0 0 2200 100" preserveAspectRatio="none" ><polyline class="color-bg" fill="#FFFFFF" points="2200,100 0,100 0,0 2200,100 "/></svg>');
        0<a.find(".divimage").length||0<a.find("img").length?(f=a.children(".divimage, img").eq(0),f.attr("data-src")?(O=f.attr("data-src"),d(window).bind("scroll",w),w()):g()):g()})()})};window.dzsprx_init=function(c,g){if("undefined"!=typeof g&&"undefined"!=typeof g.init_each&&1==g.init_each){var V=0;for(e in g)V++;1==V&&(g=void 0);d(c).each(function(){d(this).dzsparallaxer(g)})}else d(c).dzsparallaxer(g)}})(jQuery);function is_touch_device(){return!!("ontouchstart"in window)}
    window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(d){window.setTimeout(d,1E3/60)}}();function is_ie(){return-1!=navigator.appVersion.indexOf("MSIE")?!0:!1}function version_ie(){return parseFloat(navigator.appVersion.split("MSIE")[1])}
    jQuery(document).ready(function(d){d(".dzsparallaxer---window-height").each(function(){function c(){var c=d(window).height();g.height(c)}var g=d(this);d(window).bind("resize",c);c()});dzsprx_init(".dzsparallaxer.auto-init",{init_each:!0})});*/

























    //$("#wrapper").smoothWheel();

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
// circles-experience end


    var percent_html_animation = $.animateNumber.numberStepFactories.append('%')
    $('.circle-html .percent').animateNumber({
            number: 90,
            easing: 'easeInQuad',
            numberStep: percent_html_animation
        }, 3800
    );

    var percent_css_animation = $.animateNumber.numberStepFactories.append('%')
    $('.circle-css .percent').animateNumber({
            number: 82,
            easing: 'easeInQuad',
            numberStep: percent_css_animation
        }, 3500
    );

    var percent_javascript_animation = $.animateNumber.numberStepFactories.append('%')
    $('.circle-javascript .percent').animateNumber({
            number: 35,
            easing: 'easeInQuad',
            numberStep: percent_javascript_animation
        }, 1500
    );

    function codeForIE() {
        if(detectBrowser() == 'IE') {
            $('.moveY, .moveX').css({ 'animation': 'none' });
            $('.contact-animation').hide();
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
});