import jQuery from 'jquery';
(function ($) {
  $(document).ready(function () {
    // Mobile navigation toggles
    const mobileNavOpen = $('.mobile-nav-icon');
    const mobileSidebar = $('.mobile-sidebar');
    const mobileNavClose = $('.menu-close');

    mobileNavOpen.on('click', function () {
      mobileSidebar.addClass('mobile-menu-active');
    });

    mobileNavClose.on('click', function () {
      mobileSidebar.removeClass('mobile-menu-active');
    });

    // Mark hash navigation links
    $('.mobile-nav a').each(function () {
      const href = $(this).attr('href');
      if (href === '#') {
        $(this).addClass('hash-nav');
      } else {
        $(this).removeClass('hash-nav');
      }
    });

    // Mobile menus markup
    $.fn.menumarker = function (options) {
      const mobileMenu = $(this);
      const settings = $.extend(
        {
          format: 'dropdown',
          sticky: false,
        },
        options
      );

      return this.each(function () {
        mobileMenu.find('li ul').parent().addClass('has-sub');

        const multiTg = function () {
          mobileMenu.find('.hash-nav').parent().addClass('hash-has-sub');
          mobileMenu.find('.has-sub').prepend('<span class="submenu-button"><em></em></span>');
          mobileMenu.find('.submenu-button').on('click', function () {
            $(this).toggleClass('submenu-opened');
            const siblingUl = $(this).siblings('ul');
            if (siblingUl.hasClass('open-sub')) {
              siblingUl.removeClass('open-sub').hide();
            } else {
              siblingUl.addClass('open-sub').slideToggle();
            }
          });
        };

        if (settings.format === 'multitoggle') {
          multiTg();
        } else {
          mobileMenu.addClass('dropdown');
        }

        if (settings.sticky) {
          mobileMenu.css('position', 'fixed');
        }

        const resizeFix = function () {
          if ($(window).width() > 991) {
            mobileMenu.find('ul').show();
            mobileMenu.find('ul.sub-menu').hide();
          }
        };

        resizeFix();
        $(window).on('resize', resizeFix);
      });
    };

    // Initialize menumarker
    $('.mobile-nav').menumarker({
      format: 'multitoggle',
    });
  });
})(jQuery);
