// import $ from 'jquery';
import '../../../temp/scripts/owl.carousel.js';

$(document).ready(function() {
  $('#client-carousel').owlCarousel({
    loop: false,
    margin: 14,
    responsiveClass: true,
    autoplay: false,
    autoplayTimeout: 0,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      400: {
        items: 1,
        nav: false
      }
    }
  });
});

$(document).ready(function() {
  $('#team-carousel').owlCarousel({
    loop: false,
    margin: 14,
    responsiveClass: true,
    autoplay: false,
    autoplayTimeout: 0,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2,
        nav: false
      },
      768: {
        items: 4,
        nav: false
      }
    }
  });
});

$(document).ready(function() {
  $('#testimonials-carousel').owlCarousel({
    loop: false,
    margin: 14,
    responsiveClass: true,
    autoplay: false,
    autoplayTimeout: 0,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      }
    }
  });
});
