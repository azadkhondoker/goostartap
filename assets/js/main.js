(function ($) {
	'use strict';

    /*-----------------------------
	=== ALL ESSENTIAL FUNCTIONS ===
	------------------------------*/

    // ===== 01. Example Slider 
    function theSlider() {
        const sliders = $('.slider-class');
        sliders.slick({
            infinite: true,
            dots: false,
            arrows: false,
            prevArrow: '<button class="slick-arrow prev-arrow"><i class="fal fa-angle-left"></i></button>',
            nextArrow: '<button class="slick-arrow next-arrow"><i class="fal fa-angle-right"></i></button>',
            slidesToShow: 4,
            slidesToScroll: 1,
            speed: 800,
            centerPadding: '10%',
            centerMode: true,
            swipe: true,
            swipeToSlide: true,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }

    /*---------------------
	=== DOCUMENT READY  ===
	----------------------*/
    $(document).ready(function () {
        theSlider();
    });

    /*--------------------
	=== WINDOW SCROLL  ===
	----------------------*/
    $(window).on('scroll', function() {
        
    });

})(jQuery);


    /*--------------------
	=== nabver fixed js  ===
	----------------------*/
    window.addEventListener('scroll', function() {
        var navbar = document.querySelector('.navbar');
        var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollPosition > 0) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      });

 /*--------------------
	=== slider fixed js  ===
	----------------------*/
            // JavaScript code for the video carousel
            // $('.multiple-items').slick({
            //     infinite: true,
            //     slidesToShow: 3,
            //     slidesToScroll: 1
            //   });

            $(document).ready(function() {
                $('.multiple-items').slick({
                  infinite: true,
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  dots: false, // Enable dots navigation
                  prevArrow: $('.prevbutton'),
                  nextArrow: $('.nexbutton')
                });
              });