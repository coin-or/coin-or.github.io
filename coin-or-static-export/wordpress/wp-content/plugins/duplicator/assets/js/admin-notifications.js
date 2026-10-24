/**
 * Duplicator Pro Admin Notifications.
 */

'use strict';

var DupAdminNotifications = window.DupAdminNotifications || (function (document, window, $) {
    /**
     * Elements holder.
     *
     * @type {object}
     */
    var el = {
        $notifications: $('#dup-notifications'),
        $nextButton: $('#dup-notifications .navigation .next'),
        $prevButton: $('#dup-notifications .navigation .prev'),
        $adminBarCounter: $('#wp-admin-bar-dup-menu .dup-menu-notification-counter'),
        $adminBarMenuItem: $('#wp-admin-bar-dup-notifications'),

    };

    /**
     * Public functions and properties.
     *
     * @type {object}
     */
    var app = {

        /**
         * Start the engine.
         */
        init: function () {
            app.updateNavigation();
            app.events();
        },

        /**
         * Register JS events.
         */
        events: function () {
            el.$notifications
                .on('click', '.dismiss', app.dismiss)
                .on('click', '.next', app.navNext)
                .on('click', '.prev', app.navPrev);
        },

        /**
         * Click on the Dismiss notification button.
         *
         * @param {object} event Event object.
         */
        dismiss: function (event) {
            if (el.$currentMessage.length === 0) {
                return;
            }

            // Update counter.
            var count = parseInt(el.$adminBarCounter.text(), 10);
            if (count > 1) {
                --count;
                el.$adminBarCounter.html(count);
            } else {
                el.$adminBarCounter.remove();
                el.$adminBarMenuItem.remove();
            }

            // Remove notification.
            var $nextMessage = el.$nextMessage.length < 1 ? el.$prevMessage : el.$nextMessage,
                messageId = el.$currentMessage.data('message-id');

            if ($nextMessage.length === 0) {
                el.$notifications.fadeOut(300);
            } else {
                el.$currentMessage.remove();
                $nextMessage.addClass('current');
                app.updateNavigation();
            }

            // AJAX call - update option.
            var data = {
                action: 'duplicator_notification_dismiss',
                nonce: dupli_admin_notifications.nonce,
                id: messageId,
            };

            $.post(dupli_admin_notifications.ajax_url, data, function (res) {

                if (!res.success) {
                    console.log(res);
                }
            }).fail(function (xhr, textStatus, e) {

                console.log(xhr.responseText);
            });
        },

        /**
         * Click on the Next notification button.
         *
         * @param {object} event Event object.
         */
        navNext: function (event) {
            if (el.$nextButton.hasClass('disabled')) {
                return;
            }

            el.$currentMessage.removeClass('current');
            el.$nextMessage.addClass('current');

            app.updateNavigation();
        },

        /**
         * Click on the Previous notification button.
         *
         * @param {object} event Event object.
         */
        navPrev: function (event) {
            if (el.$prevButton.hasClass('disabled')) {
                return;
            }

            el.$currentMessage.removeClass('current');
            el.$prevMessage.addClass('current');

            app.updateNavigation();
        },

        /**
         * Update navigation buttons.
         */
        updateNavigation: function () {
            if (el.$notifications.find('.dup-notifications-message.current').length === 0) {
                el.$notifications.find('.dup-notifications-message:first-child').addClass('current');
            }

            el.$currentMessage = el.$notifications.find('.dup-notifications-message.current');
            el.$nextMessage = el.$currentMessage.next('.dup-notifications-message');
            el.$prevMessage = el.$currentMessage.prev('.dup-notifications-message');

            if (el.$nextMessage.length === 0) {
                el.$nextButton.addClass('disabled');
            } else {
                el.$nextButton.removeClass('disabled');
            }

            if (el.$prevMessage.length === 0) {
                el.$prevButton.addClass('disabled');
            } else {
                el.$prevButton.removeClass('disabled');
            }
        },
    };

    return app;
}(document, window, jQuery));

// Initialize.
DupAdminNotifications.init();
