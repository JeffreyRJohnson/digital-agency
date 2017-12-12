import $ from 'jquery';

class MobileMenu {
  constructor() {
    this.menuIcon = $('.fa.fa-bars');
    this.menuIconClose = $('.primary-nav__burger .fa.fa-times').hide();
    this.menuContent = $('.primary-nav__row');
    this.aboutLink = $('#about-link');
    this.servicesLink = $('#services-link');
    this.portfolioLink = $('#portfolio-link');
    this.testimonialsLink = $('#testimonials-link');
    this.contactLink = $('#contact-link');
    this.events();
  }

  events() {
    this.menuIcon.click(this.toggleTheMenu.bind(this));
    this.aboutLink.click(this.smoothScroll.bind(this, $('#about'), 2.5));
    this.servicesLink.click(this.smoothScroll.bind(this, $('#services'), 3));
    this.portfolioLink.click(
      this.smoothScroll.bind(this, $('#portfolio'), 1100)
    );
    this.testimonialsLink.click(
      this.smoothScroll.bind(this, $('#testimonials'), 2.8)
    );
    this.contactLink.click(this.smoothScroll.bind(this, $('#contact'), 1100));
  }

  toggleTheMenu() {
    this.menuContent.toggleClass('primary-nav__row--open');
    this.menuIcon.toggleClass('fa fa-times');
    this.menuIcon.toggleClass('fa fa-bars');
  }

  smoothScroll(navLink, placement) {
    $('html, body').animate(
      {
        scrollTop: navLink.offset().top - $(window).height() / placement
      },
      2000
    );
  }
}

export default MobileMenu;
