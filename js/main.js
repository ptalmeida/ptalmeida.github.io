// GENERAL SETTING
window.sr = ScrollReveal({ reset: false });

// Custom Settings
sr.reveal('.foo-1', { duration: 200 });

sr.reveal('section .container, footer .container', { 
  distance: '40%',
  origin: 'bottom',
  duration: 1000 
});

(function($) {
  "use strict"; // Start of use strict

  // Closes the sidebar menu
  $(".menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    $(this).toggleClass("active");
  });

  $(".js-scroll-trigger").click(function(e) {
    $("#sidebar-wrapper").removeClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    $(".menu-toggle").removeClass("active");
  });


  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  $(window).on('load', function() {
    
    function showBackground() {     
      $(".masthead").removeClass("white-bg")
    }
    showBackground();

   });

})(jQuery); // End of use strict
