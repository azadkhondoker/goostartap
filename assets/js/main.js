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

// Get all the slideshow elements
const slideshows = document.querySelectorAll('.slideshow');

// Loop through each slideshow
slideshows.forEach((slideshow) => {
  const slides = slideshow.querySelectorAll('.slideshow-slide'); // Get all slides in the current slideshow
  let currentIndex = 0; // Current index of the active slide

  // Function to show the slide at the specified index
  const showSlide = (index) => {
    slides.forEach((slide) => {
      slide.style.display = 'none'; // Hide all slides
    });
    slides[index].style.display = 'block'; // Show the slide at the specified index
  };

  // Function to show the next slide
  const showNextSlide = () => {
    currentIndex++;
    if (currentIndex >= slides.length) {
      currentIndex = 0; // Wrap around to the first slide if reached the end
    }
    showSlide(currentIndex);
  };

  // Function to show the previous slide
  const showPrevSlide = () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = slides.length - 1; // Wrap around to the last slide if reached the beginning
    }
    showSlide(currentIndex);
  };

  // Show the initial slide
  showSlide(currentIndex);

  // Add event listeners to the slideshow controls
  const slideshowControls = slideshow.querySelectorAll('.youtube-button');
  slideshowControls.forEach((control) => {
    control.addEventListener('click', () => {
      const videoId = control.getAttribute('data-youtube-modal');
      // Play the video or perform any other action
      console.log('Playing video with ID:', videoId);
    });
  });
});