/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 251
/*!**********************************************!*\
  !*** ./addons/litebase/assets/js/connect.js ***!
  \**********************************************/
() {

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


/***/ },

/***/ 48
/*!******************************************************!*\
  !*** ./addons/litebase/assets/js/email-subscribe.js ***!
  \******************************************************/
() {

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


/***/ },

/***/ 218
/*!****************************************************!*\
  !*** ./addons/litebase/assets/js/extra-plugins.js ***!
  \****************************************************/
() {

"use strict";


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


/***/ },

/***/ 357
/*!**********************************************!*\
  !*** ./addons/litebase/assets/js/welcome.js ***!
  \**********************************************/
() {

"use strict";


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


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			const getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*******************************************!*\
  !*** ./addons/litebase/assets/js/main.js ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _connect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connect.js */ 251);
/* harmony import */ var _connect_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_connect_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _email_subscribe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email-subscribe.js */ 48);
/* harmony import */ var _email_subscribe_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_email_subscribe_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _extra_plugins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extra-plugins.js */ 218);
/* harmony import */ var _extra_plugins_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_extra_plugins_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _welcome_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome.js */ 357);
/* harmony import */ var _welcome_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_welcome_js__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Main script for the LiteBase addon.
 *
 * Bundles all per-feature scripts into a single litebase[.min].js artifact,
 * mirroring the pattern used by the main plugin entry (assets/js/main.js).
 */






})();

self.DuplicatorLitebase = __webpack_exports__;
/******/ })()
;