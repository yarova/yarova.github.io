// /*global $:false */
// /*global moment:true */
(function($) {
    "use strict";

    // $window.GLOB = {};
    var $window = $(window),
        $winWidth = $window.width(),
        $page = $("#page");

    // ==============================================
    // Auto Close Responsive Navbar on Click for small devices
    // =============================================== 
    var $MobileNav = $("#mobile-navbar-collapse"),
        $MobileNavAnchor = $MobileNav.find("li:not(.has-dropdown)");

    function init_autoclose_navbar() {
        if ($winWidth <= 767) {
            $MobileNavAnchor.on("click", function() {
                $MobileNav.collapse("hide");
                $animatedNavicon.removeClass("opened");
            });
        } else {
            $MobileNavAnchor.off("click");
        }
    }

    // ======================================
    // Animate navicon class toggler
    // ======================================
    var $animatedNavicon = $("#animated-navicon");

    function init_animate_navIcon() {
        $animatedNavicon.on("click", function() {
            $animatedNavicon.toggleClass("opened");
        });
    }

    // ==============================================
    //     Collapse transparent and elastic navbar
    // ==============================================
    var $nav = $("#nav"),
        $navWrapper = $("#nav-wrapper");

    function init_transparent_nav() {
        if ($navWrapper.hasClass("transp-nav")) {
            if ($window.scrollTop() < 130) {
                $nav.addClass("navbar-transparent");
            } else {
                $nav.removeClass("navbar-transparent");
            }
        }
        $window.scroll(function() {
            var scroll = $window.scrollTop();
            if ($navWrapper.hasClass("transp-nav")) {
                if (scroll < 130) {
                    $nav.addClass("navbar-transparent");
                } else {
                    $nav.removeClass("navbar-transparent");
                }
            }
            if ($navWrapper.hasClass("elastic-nav")) {
                if (scroll < 1) {
                    $nav.addClass("navbar-elastic");
                } else {
                    $nav.removeClass("navbar-elastic");
                }
            }
        });
    }

    // ======================================
    //      Portfolio
    // ======================================
    var $isotopePortfolioContainer = $("#portfolio-container"),
        $isotopePortfolioFilters = $("#portfolio-filters"),
        $isotopePortfolioFilter = $isotopePortfolioFilters.find('a'),
        filterValue = '.web';

    function init_portfolio_isotope() {
        if ($isotopePortfolioContainer.length) {
            (function($) {
                // "use strict";
                // 
                // setting the layout mode
                var isotope_mode;
                if ($isotopePortfolioContainer.hasClass("masonry")) {
                    isotope_mode = "masonry";
                } else {
                    isotope_mode = "fitRows";
                }
                // initial state
                $isotopePortfolioContainer.imagesLoaded(function() {
                    $isotopePortfolioContainer.isotope({
                        // options
                        itemSelector: ".portfolio-item",
                        layoutMode: isotope_mode,
                        filter: filterValue
                    });
                });
                // });
                // when filter are clicked
                $isotopePortfolioFilters.on("click", "a", function() {
                    var $this = $(this);
                    // setting the selected button
                    $isotopePortfolioFilter.removeClass("selected");
                    $this.addClass("selected");
                    // setting the filter
                    filterValue = $this.attr("data-filter");
                    $isotopePortfolioContainer.isotope({
                        // options
                        itemSelector: ".portfolio-item",
                        layoutMode: isotope_mode,
                        filter: filterValue,
                        transitionDuration: ".5s"
                    });
                });
            })(jQuery);
        }
    }

    // ==============================================
    //   Animsition | Page loading effects
    // ==============================================
    var $animsition = $(".animsition");
    var initAnimation = function() {
        $(".init-animation-1").addClass("fadeInDown").css("opacity", 1);
        $(".init-animation-2").addClass("fadeInUp").css("opacity", 1);
        $(".init-animation-3").addClass("fadeInRight").css("opacity", 1);
        $(".init-animation-4").addClass("fadeInLeft").css("opacity", 1);
        $(".init-animation-5").addClass("fadeIn").css("opacity", 1);
    };

    function init_animsition() {
        if ($animsition.length) {
            $animsition.animsition({
                timeout: true,
                timeoutCountdown: 5000,
                // inClass               :   'fade-in',
                // outClass              :   'fade-out',
                inDuration: 1200,
                outDuration: 800,
                linkElement: '.animsition-link', // e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
                loading: true,
                loadingParentElement: 'body', //animsition wrapper element
                loadingClass: 'animsition-loading',

                //The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
                overlay: false,
                overlayClass: 'animsition-overlay-slide',
                overlayParentElement: 'body'
            }).one('animsition.inStart', function() {
                setTimeout(initAnimation, 800);
            });
        }
    }



    /*|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

      =======      Below are functions that are dedicated only for large devices     ========

      |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
    if (!isMobile && screen.width >= 768) {

        // ==============================================
        //    WOW | Animation on scroll
        // ==============================================
        var wow = new WOW({
                boxClass: 'wow', // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset: 0, // distance to the element when triggering the animation (default is 0)
                mobile: false, // trigger animations on mobile devices (default is true)
                live: true // act on asynchronously loaded content (default is true)
            }),

            // ==============================================
            //     Ripple effect
            // ==============================================
            //Ripple effect for group buttons and menues
            elem, ink, d, x, y, $rippleGroup = $(".ripple-group"),
            $rippleAlone = $(".ripple-alone"),
            init_ripple = function() {
                $rippleGroup.on("click", function(e) {
                    var parent = $(this).parents(".ripple-group-parent");
                    //create .ink element if it doesn't exist
                    if (parent.find(".ink").length === 0) {
                        parent.append("<span class='ink'></span>");
                    }
                    ink = parent.find(".ink");
                    //incase of quick double clicks stop the previous animation
                    ink.removeClass("animate");
                    //set size of .ink
                    if (!ink.height() && !ink.width()) {
                        //use parent's width or height whichever is larger for the diameter to make a circle which can cover the entire element.
                        d = Math.max(parent.outerWidth(), parent.outerHeight());
                        ink.css({
                            height: d,
                            width: d
                        });
                    }
                    //get click coordinates
                    //logic = click coordinates relative to page - parent's position relative to page - half of self height/width to make it controllable from the center;
                    x = e.pageX - parent.offset().left - ink.width() / 2;
                    y = e.pageY - parent.offset().top - ink.height() / 2;
                    //set the position and add class .animate
                    ink.css({
                        top: y + 'px',
                        left: x + 'px'
                    }).addClass("animate");
                });
                //Ripple effect for single elements
                $rippleAlone.on("click", function(e) {
                    elem = $(this);
                    //create .ink element if it doesn't exist
                    if (elem.find(".ink").length === 0) {
                        elem.append("<span class='ink'></span>");
                    }
                    ink = elem.find(".ink");
                    //incase of quick double clicks stop the previous animation
                    ink.removeClass("animate");
                    //set size of .ink
                    if (!ink.height() && !ink.width()) {
                        //use elem's width or height whichever is larger for the diameter to make a circle which can cover the entire element.
                        d = Math.max(elem.outerWidth(), elem.outerHeight());
                        ink.css({
                            height: d,
                            width: d
                        });
                    }
                    //get click coordinates
                    //logic = click coordinates relative to page - elem's position relative to page - half of self height/width to make it controllable from the center;
                    x = e.pageX - elem.offset().left - ink.width() / 2;
                    y = e.pageY - elem.offset().top - ink.height() / 2;
                    //set the position and add class .animate
                    ink.css({
                        top: y + 'px',
                        left: x + 'px'
                    }).addClass("animate");
                });
            },

            // ======================================
            // Smooth scrolling for in page links
            // ======================================
            $root = $("html, body"),
            $smoothScrollAnchor = $(".in-page-scroll").find("a[href*=#]"),
            init_inpage_scroll = function() {
                $smoothScrollAnchor.on("click", function(event) {
                    $root.animate({
                        scrollTop: $($.attr(this, "href")).offset().top
                    }, 2000, "easeInCubic");
                    event.preventDefault();
                });
            },

            // ==============================================
            //     Page scroll progress bar
            // ==============================================
            $scrollProgressBar = $("#scroll-progressbar").find("div"),
            init_page_scrollBar = function() {
                $window.scroll(function() {
                    var value = $(document).scrollTop(),
                        max = $(document).height() - $window.height();
                    $scrollProgressBar.width((value / max) * 100 + "%");
                });
            },

            // ==============================================
            //     Blur on scroll header
            // ==============================================
            $blur = $("#blur"),
            init_blurScrl = function() {
                if ($blur.length) {
                    var blH = $blur.height(),
                        blHS = blH + 1,
                        blurVal = $blur.attr("data-blur");
                    var attrs = {};
                    attrs['data-top'] = 'filter: blur(0px); translate3d(0px,0px,0px);';
                    attrs['data--' + blH + '-top'] = 'filter: blur(' + blurVal + ' ); translate3d(0px,0px,0px);';
                    attrs['data--' + blHS + '-top'] = 'filter: blur(0px); translate3d(0px,0px,1px);';
                    $blur.attr(attrs);
                }
            },

            // ======================================
            // Sticky Particles
            // ======================================
            init_particlesB = function() {
                if ($("#particles-js").length) {
                    particlesJS("particles-js", {
                        "particles": {
                            "number": {"value": 80, "density": {"enable": true, "value_area": 800}},
                            "color": {"value": "#ffffff"},
                            "shape": {
                                "type": "circle",
                                "stroke": {"width": 0, "color": "#000000"},
                                "polygon": {"nb_sides": 5},
                                "image": {"src": "img/github.svg", "width": 100, "height": 100}
                            },
                            "opacity": {
                                "value": 0.5,
                                "random": false,
                                "anim": {"enable": false, "speed": 1, "opacity_min": 0.1, "sync": false}
                            },
                            "size": {
                                "value": 1,
                                "random": true,
                                "anim": {"enable": false, "speed": 40, "size_min": 0.1, "sync": false}
                            },
                            "line_linked": {
                                "enable": true,
                                "distance": 150,
                                "color": "#ffffff",
                                "opacity": 0.3,
                                "width": 1
                            },
                            "move": {
                                "enable": true,
                                "speed": 6,
                                "direction": "none",
                                "random": false,
                                "straight": false,
                                "out_mode": "bounce",
                                "bounce": false,
                                "attract": {"enable": false, "rotateX": 0, "rotateY": 0}
                            }
                        },
                        "interactivity": {
                            "detect_on": "canvas",
                            "events": {
                                "onhover": {"enable": true, "mode": "grab"},
                                "onclick": {"enable": true, "mode": "push"},
                                "resize": true
                            },
                            "modes": {
                                "grab": {"distance": 24.3, "line_linked": {"opacity": 1}},
                                "bubble": {"distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3},
                                "repulse": {"distance": 200, "duration": 0.4},
                                "push": {"particles_nb": 4},
                                "remove": {"particles_nb": 2}
                            }
                        },
                        "retina_detect": true
                    });
                }
            },

            // ======================================
            // Number Counter
            // ======================================

            $counter = $('.counter'),
            init_numberCounter = function() {
                if ($counter.length) {
                    $counter.counterUp({
                        delay: 10,
                        time: 2000
                    });
                }
            },

            // ======================================
            //   Go top button pop-up
            // ======================================
            $goTop = $("#go-top"),
            init_gotop_pop = function() {
                $window.scroll(function() {
                    if ($window.scrollTop() + $window.height() > $(document).height() - 200) {
                        $goTop.addClass("go-top-out");
                    } else {
                        $goTop.removeClass("go-top-out");
                    }
                });
            }

        // ======================================
        // Refreshing Nav Status On Scroll
        // ======================================
        $root.each(function() {
            var $spy = $(this).scrollspy('refresh');
        });

        // ======================================
        // Nav dropdown placement
        // ======================================
        var dropdown_placement = function() {
            $('.navbar-nav > .has-dropdown > ul').each(function() {
                var $this = $(this),
                    outer_width = $this.outerWidth(true),
                    nav_offset = $this.offset(),
                    right_edge = nav_offset.left + outer_width,
                    dd_num = 1;

                if ($this.find('.has-dropdown .has-dropdown .has-dropdown .has-dropdown').length) {
                    dd_num = 5;
                } else if ($this.find('.has-dropdown .has-dropdown .has-dropdown').length) {
                    dd_num = 4;
                } else if ($this.find('.has-dropdown .has-dropdown').length) {
                    dd_num = 3;
                } else if ($this.find('.has-dropdown').length) {
                    dd_num = 2;
                }

                var offside = nav_offset.left + dd_num * outer_width - $window.width();

                if (offside < 0.8 * outer_width && offside > 0 && !$this.hasClass('mega-menu')) {
                    $this.css('margin-left', -(offside));
                } else if (offside > 0.8 * outer_width && !$this.hasClass('mega-menu')) {
                    $this.addClass('to-right');
                    $this.find('.has-dropdown > ul').css({
                        left: 'auto',
                        right: '100%'
                    });

                } else if (right_edge > $window.width() && $this.hasClass('mega-menu')) {
                    var isOnScreen = $window.width() - nav_offset.left;
                    var difference = right_edge - $window.width();
                    $this.css('margin-left', -(difference));
                }
                dd_num = 0;
            });
        };

        dropdown_placement();
        var hh;
        $(window).resize(function(event) {
            if ($(window).width() > 767) {
                $('.navbar-nav > .has-dropdown > ul').css('margin-left', 0);
                $('.navbar-nav > .has-dropdown > ul').removeClass('to-right');
                $('.navbar-nav > .has-dropdown > ul').find('.has-dropdown > ul').css({
                    left: '100%',
                    right: 'auto'
                });
                clearTimeout(hh);
                hh = setTimeout(function() {
                    dropdown_placement();
                }, 500);

            } else {
                $('.navbar-nav > .has-dropdown > ul').css('margin-left', 0);
                $('.navbar-nav > .has-dropdown > ul').removeClass('to-right');
                $('.navbar-nav > .has-dropdown > ul').find('.has-dropdown > ul').css({
                    left: '0',
                    right: 'auto'
                });
            }
        });

        // init function on large devices
        init_page_scrollBar();
        init_ripple();
        init_gotop_pop();
        init_animate_navIcon();
        init_transparent_nav();
        wow.init();
        init_portfolio_isotope();
        init_inpage_scroll();
        init_blurScrl();
        init_animsition();
        init_particlesB();
        init_numberCounter()

        if (!isMobile) {
            // set the timer
            var timer;
            $window.resize(function() {
                clearTimeout(timer);
                timer = setTimeout(function() {
                    // Preparing the skrollr to be triggered on resize
                    var s = skrollr.init({
                        forceHeight: false,
                        smoothScrolling: false
                    }).refresh();
                    init_blurScrl();
                }, 1200);
            });
        }
    } else {
        // init function on small devices
        init_transparent_nav();
        init_autoclose_navbar();
        init_animate_navIcon();
        init_portfolio_isotope();
        init_animsition();
    }
})(jQuery);

$(function () {
    $('.progress-bar').each(function() {
        const bar_value = $(this).attr('aria-valuenow') + '%';
        $(this).animate({ width: bar_value }, { duration: 2000, easing: 'easeInCirc' });
    });

    /*if(isMobile) {
        ('#mobile-navbar-collapse a').on('click', function() {
            $('#animated-navicon').trigger('click')
        });
    }*/

    /*$('#mobile-navbar-collapse a').on('click', function() {
        $('#animated-navicon').trigger('click')
    });*/

    $.fn.scrollTo = function(duration, easing, complete) {
        return $.each(this, function() {
            $('html, body').animate({
                scrollTop: $(this).offset().top
            }, duration, easing, complete)
        })
    };

    $(document).on('click', '.navbar-nav > li > a, #contactBtn, #cvBtn, #contactLink, #arrow-down, #arrow-up', function(e) {
        e.preventDefault();
        $($(this).attr('href')).scrollTo(600, 'swing')
    });
})


/* Animate counters on scroll */
/*function detect_visibility(elem){
    var top_of_element = elem.offset().top;
    var bottom_of_element = elem.offset().top + elem.outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();

    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
        //init_numberCounter();

        $counter = $('.counter');
        if ($counter.length) {
            $counter.counterUp({
                delay: 10,
                time: 2000
            });
        }

        // Element is visible write your codes here
        // You can add animation or other codes here
    }
}

$(window).scroll(function() {
    detect_visibility($('#skills-section'));
    detect_visibility($('#facts-section'));
});

detect_visibility($('#skills-section'));
detect_visibility($('#facts-section'));*/
/* Animate sections //*/