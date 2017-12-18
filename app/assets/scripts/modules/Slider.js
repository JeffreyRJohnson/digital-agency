// import $ from 'jquery';
// import '../../../temp/scripts/owl.carousel.js';
import owlCarousel from 'owl.carousel';

$(document).ready(function() {
  $('#client-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 5000,
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
    loop: true,
    margin: 14,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 3000,
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
    loop: true,
    margin: 14,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      }
    }
  });
});
