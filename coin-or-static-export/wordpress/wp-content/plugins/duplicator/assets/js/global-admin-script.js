/*! dup admin script */
jQuery(document).ready(function ($) {
    $(document).on('click', '.dupli-admin-notice[data-to-dismiss] .notice-dismiss', function (event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        var notice = $(this).closest('.dupli-admin-notice[data-to-dismiss]');
        $.post(ajaxurl, {
            action: 'duplicator_admin_notice_to_dismiss',
            notice: notice.data('to-dismiss'),
            fixKeys: notice.data('fix-keys') || '',
            nonce: dupli_global_data.nonce_admin_notice_to_dismiss
        });
    });

    $(document).on('click', '.dupli-dismissable-dismiss', function (event) {
        event.preventDefault();

        var $root = $(this).closest('.dupli-dismissable');
        if ($root.length === 0) {
            return;
        }

        var action = $root.data('dismiss-action');
        var nonce = $root.data('dismiss-nonce');
        if (!action || !nonce) {
            return;
        }

        $.post(dupli_global_data.ajaxurl, {
            action: action,
            nonce: nonce
        });

        var $row = $root.closest('tr');
        if ($row.length > 0) {
            $row.remove();
        } else {
            $root.hide().remove();
        }
    });

    $(document).on('click', '.dupli-quick-fix-notice .dupli-quick-fix', function () {
        var $button = $(this),
            $notice = $button.closest('.dupli-quick-fix-notice'),
            resetButton = function () {
                $button.prop('disabled', false).removeClass('disabled');
            },
            showError = function (text) {
                var $error = $('<span/>', {
                    class: 'dupli-quick-fix-error color-alert'
                });
                $error.append(
                    $('<i/>', {
                        class: 'fa fa-exclamation-triangle'
                    }),
                    document.createTextNode(' ' + text)
                );
                $notice.find('.dupli-quick-fix-error').remove();
                $button.after(' ', $error);
            };

        $notice.find('.dupli-quick-fix-error').remove();
        $button.prop('disabled', true).addClass('disabled');

        $.post(ajaxurl, {
            action: 'duplicator_quick_fix',
            nonce: dupli_global_data.nonce_quick_fix,
            fixKeys: $button.data('fix-key') || ''
        }, null, 'json').done(function (result) {
            var funcData = (result && result.data && result.data.funcData) || {};
            var appliedKeys = funcData.applied_keys || [];

            $notice.find('[data-fix-key]').filter(function () {
                return appliedKeys.indexOf($(this).attr('data-fix-key')) !== -1;
            }).remove();

            if (!result.success || !funcData.success) {
                resetButton();
                showError(funcData.message || dupli_global_data.quick_fix_error_msg);
                return;
            }

            if ($notice.find('.dupli-fix-error-item').length === 0) {
                $notice.remove();
            } else {
                $button.remove();
            }
        }).fail(function () {
            resetButton();
            showError(dupli_global_data.quick_fix_error_msg);
        });
    });

    function dupDashboardUpdate() {
        jQuery.ajax({
            type: "POST",
            url: dupli_global_data.ajaxurl,
            dataType: "json",
            data: {
                action: 'duplicator_dashboad_widget_info',
                nonce: dupli_global_data.nonce_dashboard_widged_info
            },
            success: function (result, textStatus, jqXHR) {
                if (result.success) {
                    $('#duplicator_dashboard_widget .dup-last-backup-info').html(result.data.funcData.lastBackupInfo);

                    if (result.data.funcData.isBackupCreationBlocked) {
                        $('#duplicator_dashboard_widget #dupli-create-new').addClass('disabled');
                    } else {
                        $('#duplicator_dashboard_widget #dupli-create-new').removeClass('disabled');
                    }
                }
            },
            complete: function() {
                setTimeout(
                    function(){
                        dupDashboardUpdate();
                    }, 
                    5000
                );
            }
        });
    }
    
    if ($('#duplicator_dashboard_widget').length) {
        dupDashboardUpdate();
    }
});
