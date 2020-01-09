"use strict";

//Hide preload animation after the window has finished loading
jQuery(window).on('load', function () {
    $('#preloadpage').addClass('animated slideOutDown');
});

$(function() {
  $(".email-signup").hide();
  $("#signup-box-link").click(function () {
    $(".email-login").fadeOut(100);
    $(".email-signup").delay(100).fadeIn(100);
    $("#login-box-link").removeClass("active");
    $("#signup-box-link").addClass("active");
  });
  $("#login-box-link").click(function () {
    $(".email-login").delay(100).fadeIn(100);
    $(".email-signup").fadeOut(100);
    $("#login-box-link").addClass("active");
    $("#signup-box-link").removeClass("active");
  });
});

$(document).ready(function(){

    //Various Sliders options and configurations
    //More Options -> https://owlcarousel2.github.io/OwlCarousel2/docs/api-options.html
    // Slider Section BX Slider Settings
    $("ul.owl-carousel.top_slider").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: false,
        autoplay:false,
        autoplayTimeout:9000,
        smartSpeed:3000,
        onChange: function(){
            beforeslide();
        },
        onChanged: function(){
            setTimeout(function(){
                afterslide();
            }, 100);
        }
    });

      // Team Section BX Slider Settings
    $("ul.owl-carousel.team_slider").owlCarousel({
        margin: 30,
        nav: true,
        dots: false,
        loop: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          1000: {
            items: 4
          }
        }
    });

    // Causes Section BX Slider Settings
    $("ul.owl-carousel.causes_slider").owlCarousel({
        margin: 70,
        nav: true,
        dots: false,
        loop: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 3
          }
        }
    });

    // Projects Section BX Slider Settings
    $("ul.owl-carousel.projects_slider").owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 1000,
        autoplay:true,
        autoplayTimeout: 9000
    });

    // Sponsors Section BX Slider Settings
    $('ul.sponsor_slider').bxSlider({
        minSlides: 2,
        maxSlides: 3,
        slideWidth: 200
    });

    //Hide mobile menu when you click link
    $("ul.mobile-nav li a").on('click', function() {
        $('#mobilemenu').collapse('hide');
    });



    //Click event to scroll to top
    $('.scrollToTop').on('click', function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });



    // ScrollReveal - For more config details visit: https://www.npmjs.com/package/scrollreveal
    window.sr = ScrollReveal({
        origin: 'right', // 'bottom', 'left', 'top', 'right'
        distance: '10px', // 'transition distance'
        duration: 1000, // 'how long the transition will take'
        scale: 1.0 // 'Change in size of the section; 1.0 means original size is maintained'
    });

    sr.reveal('#about .row.point, #newsandevents .event-item, #ContactForm'); // comma separated sections for scroll reveal
    sr.reveal('#latestnews .newsitem', {origin:'left'}); // scroll reveal with left origin

    //Top header with menu changes on scroll
    $(document).on('scroll', function() {
        var x = $(document).scrollTop();
        if(x > 200){
            $('section#header').css({"padding-bottom":"0px","padding-top":"0px","border-top":"4px solid #000000"});
            $('.scrollToTop').fadeIn();
        };
        if(x < 200){
            $('section#header').css({"padding-bottom":"0px","padding-top":"0px","border-top":"15px solid #000000"});
            $('section#header img').css({"height":"","width":""});
            $('.scrollToTop').fadeOut();
        };
    });



    jQuery.fn.visible = function() {
        return this.css('visibility', 'visible');
    };

    jQuery.fn.invisible = function() {
        return this.css('visibility', 'hidden');
    };

    //Function immediately before the slider slides - for top_slider
    function beforeslide(){
        $('.slider-tag').css('visibility', 'hidden').toggleClass('fadeIn');
        $('ul.top_slider .btn1').css('visibility', 'hidden').toggleClass('fadeInLeft');
        $('ul.top_slider .btn2').css('visibility', 'hidden').toggleClass('fadeInRight');
    }

    //Function immediately after the slider slides - for top_slider
    function afterslide(){
        $('.slider-tag').css('visibility', 'visible').addClass('animated fadeIn');
        $('ul.top_slider .btn1').css('visibility', 'visible').addClass('animated fadeInLeft');
        $('ul.top_slider .btn2').css('visibility', 'visible').addClass('animated fadeInRight');
    }
});

// Scroll to section
$(function() {
    $('a[href*="#"]:not([href="#"])').on('click', function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	        var target = $(this.hash);
	        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	        if (target.length) {
		        $('html,body').animate({
		            scrollTop: target.offset().top
		        }, 1000);
		        return false;
	        }
	    }
    });
});

function playVideo(el) {
  let videoId = el.data('video');
  let video = document.getElementById(videoId);

  if (video.paused) {
    // Play the video
    video.play();
    el.removeClass('paused').addClass('playing');
  }
  else {
    // Pause the video
    video.pause();
    el.removeClass('playing').addClass('paused');
  }
}

$(document).on('click', '.js-video-control', function(e) {
  playVideo($(this));
  e.preventDefault();
});

(function($) { // Begin jQuery
  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  }); // end DOM ready
})(jQuery); // end jQuery












