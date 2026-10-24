jQuery(function ($) {
    $(document).on('click', '.dupli-litebase-subscribe-button', function (e) {
        e.preventDefault();

        var $root = $(this).closest('.dupli-litebase-subscribe-form');
        if ($root.length === 0) {
            return;
        }

        var action = $root.data('subscribe-action');
        var nonce  = $root.data('subscribe-nonce');
        if (!action || !nonce) {
            return;
        }

        var $input = $root.find('.dupli-litebase-subscribe-email');
        var email  = String($input.val() || '').trim();
        if (email === '') {
            $input.trigger('focus');
            return;
        }

        var $button = $(this);
        $button.prop('disabled', true);

        DupliJs.Util.ajaxWrapper(
            { action: action, nonce: nonce, email: email },
            function () {
                $root.hide().remove();
                return '';
            },
            function () {
                $button.prop('disabled', false);
                return '';
            }
        );
    });
});
