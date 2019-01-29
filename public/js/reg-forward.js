(function ($) {

    $('#reg-forward').on('submit', function (e) {
        e.preventDefault();
        $('#reg-zip-error').html('');

        var zip_input = $('#reg-zip').val();
        var zip_valid = false;
        var us_zip = new RegExp(/^\d{5}(\-?\d{4})?$/gm).exec(zip_input);
        var can_zip = new RegExp(/([ABCEGHJ-NPRSTVXY]\d[A-Z])[\s\-]?(\d[A-Z]\d)/ig).exec(zip_input);

        if (us_zip || can_zip) {
            zip_valid = true;
        }

        if (!zip_valid) {
            $('#reg-zip-error').html('Please Provide a Valid Zip / Postal Code.');
        } else {
            window.location.href = 'https://event.yanceyfreebook.com?zc=' + zip_input + '&lc=SYWEB-NAV';
        }

    });

})(jQuery);