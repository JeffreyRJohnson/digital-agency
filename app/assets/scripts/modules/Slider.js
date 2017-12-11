// import $ from 'jquery';
import '../../../temp/scripts/owl.carousel.js';

$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
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
      600: {
        items: 2,
        nav: false
      }
    }
  });
});
