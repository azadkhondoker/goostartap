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

              /*--------------------
	=== read on fixed js  ===
	----------------------*/
    $(document).ready(function() {
        // Set the number of visible rows
        var visibleRows = 1;
    
        // Hide the excess rows initially
        $('.category-row .row:gt(' + (visibleRows - 1) + ')').hide();
    
        // Show more rows on click
        $('.see-more').click(function() {
          visibleRows++;
          $('.category-row .row:lt(' + visibleRows + ')').show();
    
          // If all rows are shown, hide the "See more" button
          if ($('.category-row .row').length <= visibleRows) {
            $('.see-more').hide();
          }
    
          // Show the "See less" button
          $('.see-less').show();
        });
    
        // Hide rows on "See less" click
        $('.see-less').click(function() {
          visibleRows--;
          $('.category-row .row:gt(' + (visibleRows - 1) + ')').hide();
    
          // If only one row is shown, hide the "See less" button
          if (visibleRows <= 1) {
            $('.see-less').hide();
          }
    
          // Show the "See more" button
          $('.see-more').show();
        });
    
        // Initially hide the "See less" button
        $('.see-less').hide();
      });



      /* dropdown js */
      
      function toggleDropdown() {
        var dropdownMenuOne = document.getElementById("dropdown-menu-one");
        dropdownMenuOne.classList.toggle("show");
    }
