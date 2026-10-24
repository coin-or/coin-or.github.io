'use strict';

(function ($) {
    $(function () {
        $(document).on(
            'click',
            'button.dupli-litebase-extra-plugin-item[data-plugin]',
            function (e) {
                e.preventDefault();

                var $button = $(this);
                if ($button.hasClass('disabled')) {
                    return;
                }

                var $status        = $button.closest('.actions').find('.status').eq(0);
                var $statusLabel   = $status.find('.status-label').eq(0);
                var originalStatus = $statusLabel.html();
                var originalLabel  = $button.html();
                var l10n           = dupli_litebase.extraPlugins.l10n;

                $button.addClass('disabled').html(l10n.loading);

                DupliJs.Util.ajaxWrapper(
                    {
                        action: 'duplicator_install_extra_plugin',
                        nonce:  dupli_litebase.extraPlugins.nonce,
                        plugin: $button.data('plugin')
                    },
                    function () {
                        $button.html(l10n.activated);
                        $statusLabel
                            .html(l10n.active)
                            .removeClass('status-missing status-installed')
                            .addClass('status-active');
                        return '';
                    },
                    function (result) {
                        $statusLabel.html(l10n.failure);
                        setTimeout(function () {
                            $statusLabel.html(originalStatus);
                            $button.html(originalLabel).removeClass('disabled');
                        }, 3000);
                        return result && result.data && result.data.message
                            ? result.data.message
                            : '';
                    },
                    { showProgress: false }
                );
            }
        );
    });
}(jQuery));
