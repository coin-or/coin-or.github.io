var dupLiteBaseConnectRemoteEndpoint = "https://connect.duplicator.com/get-remote-url";

jQuery(document).ready(function ($) {
    var $btn = $('#dup-settings-connect-btn');
    if (!$btn.length) {
        return;
    }

    $btn.on('click', function (event) {
        event.stopPropagation();

        DupliJs.Util.ajaxWrapper(
            {
                action: 'duplicator_generate_connect_oth',
                nonce:  dupli_litebase.connect.nonceGenerateOth
            },
            function (result, data, funcData) {
                var url = dupLiteBaseConnectRemoteEndpoint + "?" + new URLSearchParams({
                    "oth":         funcData.oth,
                    "homeurl":     window.location.origin,
                    "redirect":    funcData.redirect_url,
                    "origin":      window.location.href,
                    "php_version": funcData.php_version,
                    "wp_version":  funcData.wp_version
                }).toString();

                window.location.href = url;
            },
            function (result, data) {
                var msg = '<p><b>' + dupli_litebase.connect.failNoticeTitle + '</b></p>'
                    + '<p>' + dupli_litebase.connect.failNoticeMsgLabel + (data && data.message ? data.message : '') + '<br>'
                    + dupli_litebase.connect.failNoticeSuggestion + '</p>';

                if (typeof Duplicator !== 'undefined' && typeof Duplicator.addAdminMessage === 'function') {
                    Duplicator.addAdminMessage(msg, 'error');
                } else {
                    alert(dupli_litebase.connect.failNoticeTitle);
                }
            }
        );
    });
});
