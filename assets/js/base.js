jQuery(document).ready(function() {
    headerNavbar();
    stickyPane();
    backTop();

    jQuery(window).resize(function() {
        stickyPane();
    });
});

// sticky header
function stickyPane() {
    let stickyClass = jQuery('.header');
    let stickyClassHeight = stickyClass.outerHeight();

    jQuery('body').css('padding-top', stickyClassHeight);

    jQuery('.nav-link').click(function(e) {
        e.preventDefault();
        jQuery('body, html').animate({
            scrollTop: jQuery(this.hash).offset().top - stickyClassHeight
        });
   });
}

// header navbar
function headerNavbar() {
    jQuery('.header-nav .nav-item').click(function() {
        jQuery('.nav-item').removeClass('active');
        jQuery(this).addClass('active');
    });
}

// backTop
function backTop() {
    let btn = $('.back-top');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 400) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0}, '600');
    });
}
