'use strict';

(function ($) {
    $(function () {
        $(document).on('click', '#dupli-litebase-welcome-enable-usage-stats', function () {
            var $btn = $(this);
            $btn.prop('disabled', true);
            $btn.find('i.fas').replaceWith('<i class="fas fa-spinner fa-spin"></i>');

            $.ajax({
                url:  dupli_litebase.welcome.ajaxUrl,
                type: 'POST',
                data: {
                    action: 'duplicator_lite_enable_usage_stats',
                    nonce:  dupli_litebase.welcome.nonce,
                    email:  dupli_litebase.welcome.email
                },
                success: function (response) {
                    if (response && response.success) {
                        $btn.find('i.fas').replaceWith('<i class="fas fa-check"></i>');
                        setTimeout(function () {
                            window.location.href = dupli_litebase.welcome.redirectUrl;
                        }, 1000);
                    } else {
                        $btn.find('i.fas').replaceWith('<i class="fas fa-times"></i>');
                        setTimeout(function () {
                            $btn.prop('disabled', false);
                            $btn.find('i.fas').replaceWith('<i class="fas fa-arrow-right"></i>');
                        }, 1500);
                    }
                },
                error: function () {
                    $btn.find('i.fas').replaceWith('<i class="fas fa-times"></i>');
                    setTimeout(function () {
                        $btn.prop('disabled', false);
                        $btn.find('i.fas').replaceWith('<i class="fas fa-arrow-right"></i>');
                    }, 1500);
                }
            });
        });

        $(document).on('click', '.dupli-litebase-welcome-terms-toggle', function () {
            var $toggle = $(this);
            $toggle.next('.dupli-litebase-welcome-terms-list').slideToggle();
            $toggle.find('i.fas').toggleClass('fa-chevron-right fa-chevron-down');
        });
    });
}(jQuery));
