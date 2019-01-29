(function ($) {

    // slider
    $(document).ready(function () {
        $('.slider-wrap').slick({
            autoplay: false,
            autoplaySpeed: 6000,
            dots: false,
            arrows: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            prevArrow: '<button type="button" class="slick-prev"><img src="https://s3-us-west-2.amazonaws.com/response-web/images/Scott_Yancey/brand-site/arrow_lft.svg" width="191" height="357" /></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="https://s3-us-west-2.amazonaws.com/response-web/images/Scott_Yancey/brand-site/arrow_rt.svg" width="191" height="357" /></button>'
        });
    });

})(jQuery);