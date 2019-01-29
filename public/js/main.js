(function ($) {

    $('#mobile-menu-toggle').on('click', function () {
        $(this).toggleClass('active-mbl-launch');
    });

    $('#mobile-menu-toggle').on('click', function () {
        $('.mobile-nav-wrap').toggleClass('active-mbl-nav');
    });

})(jQuery);