"use strict";
var EModalAdmin = {
    init: function () {
        EModalAdmin.initialize_tabs();
        if (jQuery('#emodal-modal-editor').length) {
            EModalAdmin.initialize_modal_page();
        }
        if (jQuery('#emodal-theme-editor').length) {
            EModalAdmin.initialize_theme_page();
        }
        EModalAdmin.initialize_color_pickers();
        EModalAdmin.initialize_range_sliders();

        jQuery(document).on('keydown', function (e) {
            if ((e.which === '115' || e.which === '83') && (e.ctrlKey || e.metaKey)) {
                e.preventDefault();
                jQuery('#emodal-theme-editor, #emodal-modal-editor').trigger('submit');
                return false;
            }
            return true;
        });

    },
    initialize_color_pickers: function () {
        var self = this;
        jQuery('.color-picker').wpColorPicker({
            clear: function (event, ui) {
                self.debounce(setTimeout(function () {
                    var theme = self.serialize_form('#emodal-theme-editor').theme;
                    self.retheme_modal(theme.meta);
                }, 5), 10000);
                var $input = jQuery(event.currentTarget).prev();
                if ($input.hasClass('background-color')) {
                    $input.parents('table').find('.background-opacity').hide();
                }
            }
        });

    },
    initialize_range_sliders: function () {
        jQuery('input[type="range"]').on('input', function () {
            jQuery(this).next('.range-value').find('.value').text(jQuery(this).val());
        });
        var input = document.createElement('input'),
            $input,
            $slider;
        input.setAttribute('type', 'range');
        if (input.type === 'text') {
            jQuery('input[type=range]').each(function (index, input) {
                $input = jQuery(input);
                $slider = jQuery('<div />').slider({
                    min: parseInt($input.attr('min'), 10) || 0,
                    max: parseInt($input.attr('max'), 10) || 100,
                    value: parseInt($input.attr('value'), 10) || 0,
                    step: parseInt($input.attr('step'), 10) || 1,
                    slide: function (event, ui) {
                        jQuery(this).prev('input').val(ui.value);
                    }
                });
                $input.after($slider).hide();
            });
        }
    },
    initialize_tabs: function () {
        //var active_tab = window.location.hash.replace('#top#','');
        var active_tab = window.location.hash;
        if (active_tab === '') {
            active_tab = '#' + jQuery('.emodal-tab-content').eq(0).attr('id');
        }

        jQuery('.emodal-tab-content').hide();
        jQuery(active_tab).show();
        jQuery(active_tab + '-tab').addClass('nav-tab-active');
        jQuery(window).scrollTop(0);


        jQuery('#emodal-tabs .nav-tab').on('click', function (e) {
            e.preventDefault();

            jQuery('.emodal-tab-content').hide();
            jQuery('.emodal-tab').removeClass('nav-tab-active');

            var id = jQuery(this).attr('href');
            jQuery(id).show();
            jQuery(this).addClass('nav-tab-active');

            if (history.pushState) {
                history.pushState(null, null, id);
            } else {
                location.hash = id;
                jQuery(window).scrollTop(0);
            }
        });
    },
    initialize_modal_page: function () {
        var update_size = function () {
                if (jQuery("#size").val() !== 'custom') {
                    jQuery('.custom-size-only').hide();
                } else {
                    jQuery('.custom-size-only').show();
                    if (jQuery('#custom_height_auto').is(':checked')) {
                        jQuery('.custom-size-height-only').hide();
                    } else {
                        jQuery('.custom-size-height-only').show();
                    }
                }
            },
            update_animation = function () {
                jQuery('.animation-speed, .animation-origin').hide();
                if (jQuery("#animation_type").val() === 'fade') {
                    jQuery('.animation-speed').show();
                } else if (jQuery("#animation_type").val() === 'none') {

                } else {
                    jQuery('.animation-speed, .animation-origin').show();
                }

            },
            update_location = function () {
                var $this = jQuery('#display_location'),
                    table = $this.parents('table'),
                    val = $this.val();
                jQuery('tr.top, tr.right, tr.left, tr.bottom', table).hide();
                if (val.indexOf("top") >= 0) {
                    jQuery('tr.top').show();
                }
                if (val.indexOf("left") >= 0) {
                    jQuery('tr.left').show();
                }
                if (val.indexOf("bottom") >= 0) {
                    jQuery('tr.bottom').show();
                }
                if (val.indexOf("right") >= 0) {
                    jQuery('tr.right').show();
                }
            };
        jQuery("#size").on('change', function () {
            update_size();
        });
        jQuery('#custom_height_auto').on('click', function () {
            update_size();
        });
        jQuery("#animation_type").on('change', function () {
            update_animation();
        });
        jQuery("#animation_speed").on('input', function () {
            jQuery(this).next('.range-value').text(jQuery(this).val() + 'ms');
        });
        jQuery('#display_location').on('change', function () {
            update_location();
        });
        update_size();
        update_animation();
        update_location();
    },
    theme_page_listeners: function () {
        var self = this;
        jQuery('select, input:not(.color-picker)').on('change input focusout', function () {
            self.update_theme();
        });
        jQuery('select.border-style').on('change', function () {
            var $this = jQuery(this);
            if ($this.val() === 'none') {
                $this.parents('table').find('.border-options').hide();
            } else {
                $this.parents('table').find('.border-options').show();
            }
        });
        jQuery('#close_location').on('change', function () {
            var $this = jQuery(this),
                table = $this.parents('table');
            jQuery('tr.topleft, tr.topright, tr.bottomleft, tr.bottomright', table).hide();
            jQuery('tr.' + $this.val(), table).show();
        });
        jQuery('.color-picker').on('irischange', function (event, ui) {
            self.throttle(setTimeout(function () {
                var theme = self.serialize_form('#emodal-theme-editor').theme;
                self.retheme_modal(theme.meta);
            }, 5), 250);
            var $input = jQuery(event.currentTarget);
            if ($input.hasClass('background-color')) {
                $input.parents('table').find('.background-opacity').show();
            }
        });

    },
    update_theme: function () {
        var theme = this.serialize_form('#emodal-theme-editor').theme;
        this.retheme_modal(theme.meta);
    },
    theme_preview_scroll: function () {
        var $preview = jQuery('#emodal-theme-editor .empreview'),
            startscroll = $preview.offset().top - 50;
        jQuery(window).on('scroll', function () {
            if (jQuery(window).scrollTop() >= startscroll) {
                $preview.css({
                    left: $preview.offset().left,
                    width: $preview.width(),
                    height: $preview.height(),
                    position: 'fixed',
                    top: 50
                });
            } else {
                $preview.removeAttr('style');
            }
        });
    },
    initialize_theme_page: function () {
        var self = this,
            table = jQuery('#close_location').parents('table');
        self.update_theme();
        self.theme_page_listeners();
        self.theme_preview_scroll();

        jQuery('select.border-style').each(function () {
            var $this = jQuery(this);
            if ($this.val() === 'none') {
                $this.parents('table').find('.border-options').hide();
            } else {
                $this.parents('table').find('.border-options').show();
            }
        });

        jQuery('.color-picker.background-color').each(function () {
            var $this = jQuery(this);
            if ($this.val() === '') {
                $this.parents('table').find('.background-opacity').hide();
            } else {
                $this.parents('table').find('.background-opacity').show();
            }
        });

        jQuery('tr.topleft, tr.topright, tr.bottomleft, tr.bottomright', table).hide();
        switch (jQuery('#close_location').val()) {
        case "topleft":
            jQuery('tr.topleft', table).show();
            break;
        case "topright":
            jQuery('tr.topright', table).show();
            break;
        case "bottomleft":
            jQuery('tr.bottomleft', table).show();
            break;
        case "bottomright":
            jQuery('tr.bottomright', table).show();
            break;
        }

    },
    retheme_modal: function (theme) {
        var $overlay = jQuery('.empreview .example-modal-overlay'),
            $container = jQuery('.empreview .example-modal'),
            $title = jQuery('.title', $container),
            $content = jQuery('.content', $container),
            $close = jQuery('.close-modal', $container),
            container_inset = theme.container.boxshadow.inset === 'yes' ? 'inset ' : '',
            close_inset = theme.close.boxshadow.inset === 'yes' ? 'inset ' : '';

        $overlay.removeAttr('style').css({
            backgroundColor: this.convert_hex(theme.overlay.background.color, theme.overlay.background.opacity)
        });
        $container.removeAttr('style').css({
            padding: theme.container.padding + 'px',
            backgroundColor: this.convert_hex(theme.container.background.color, theme.container.background.opacity),
            borderStyle: theme.container.border.style,
            borderColor: theme.container.border.color,
            borderWidth: theme.container.border.width + 'px',
            borderRadius: theme.container.border.radius + 'px',
            boxShadow: container_inset + theme.container.boxshadow.horizontal + 'px ' + theme.container.boxshadow.vertical + 'px ' + theme.container.boxshadow.blur + 'px ' + theme.container.boxshadow.spread + 'px ' + this.convert_hex(theme.container.boxshadow.color, theme.container.boxshadow.opacity)
        });
        $title.removeAttr('style').css({
            color: theme.title.font.color,
            fontSize: theme.title.font.size + 'px',
            fontFamily: theme.title.font.family,
            textAlign: theme.title.text.align,
            textShadow: theme.title.textshadow.horizontal + 'px ' + theme.title.textshadow.vertical + 'px ' + theme.title.textshadow.blur + 'px ' + this.convert_hex(theme.title.textshadow.color, theme.title.textshadow.opacity)
        });
        $content.removeAttr('style').css({
            color: theme.content.font.color,
            //fontSize: theme.content.font.size+'px',
            fontFamily: theme.content.font.family
        });
        // The setting has always been a plain-text input. Use text() so a
        // legacy value cannot turn the admin preview into an HTML execution sink.
        $close.text(theme.close.text).removeAttr('style').css({
            padding: theme.close.padding + 'px',
            backgroundColor: this.convert_hex(theme.close.background.color, theme.close.background.opacity),
            color: theme.close.font.color,
            fontSize: theme.close.font.size + 'px',
            fontFamily: theme.close.font.family,
            borderStyle: theme.close.border.style,
            borderColor: theme.close.border.color,
            borderWidth: theme.close.border.width + 'px',
            borderRadius: theme.close.border.radius + 'px',
            boxShadow: close_inset + theme.close.boxshadow.horizontal + 'px ' + theme.close.boxshadow.vertical + 'px ' + theme.close.boxshadow.blur + 'px ' + theme.close.boxshadow.spread + 'px ' + this.convert_hex(theme.close.boxshadow.color, theme.close.boxshadow.opacity),
            textShadow: theme.close.textshadow.horizontal + 'px ' + theme.close.textshadow.vertical + 'px ' + theme.close.textshadow.blur + 'px ' + this.convert_hex(theme.close.textshadow.color, theme.close.textshadow.opacity)
        });
        switch (theme.close.location) {
        case "topleft":
            $close.css({
                top: theme.close.position.top + 'px',
                left: theme.close.position.left + 'px'
            });
            break;
        case "topright":
            $close.css({
                top: theme.close.position.top + 'px',
                right: theme.close.position.right + 'px'
            });
            break;
        case "bottomleft":
            $close.css({
                bottom: theme.close.position.bottom + 'px',
                left: theme.close.position.left + 'px'
            });
            break;
        case "bottomright":
            $close.css({
                bottom: theme.close.position.bottom + 'px',
                right: theme.close.position.right + 'px'
            });
            break;
        }
        jQuery(document).trigger('emodal-admin-retheme', [theme]);
    },
    serialize_form: function ($form) {
        var serialized = {};
        jQuery("[name]", $form).each(function () {
            var name = jQuery(this).attr('name'),
                value = jQuery(this).val(),
                nameBits = name.split('['),
                previousRef = serialized,
                i = 0,
                l = nameBits.length,
                nameBit;
            for (i; i < l; i += 1) {
                nameBit = nameBits[i].replace(']', '');
                if (!previousRef[nameBit]) {
                    previousRef[nameBit] = {};
                }
                if (i !== nameBits.length - 1) {
                    previousRef = previousRef[nameBit];
                } else if (i === nameBits.length - 1) {
                    previousRef[nameBit] = value;
                }
            }
        });
        return serialized;
    },
    convert_hex: function (hex, opacity) {
        hex = hex.replace('#', '');
        var r = parseInt(hex.substring(0, 2), 16),
            g = parseInt(hex.substring(2, 4), 16),
            b = parseInt(hex.substring(4, 6), 16),
            result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
        return result;
    },
    debounce: function (callback, threshold) {
        var timeout;
        return function() {
            var context = this, params = arguments;
            window.clearTimeout(timeout);
            timeout = window.setTimeout(function() {
                callback.apply(context, params);
            }, threshold);
        };
    },
    throttle: function (callback, threshold) {
        var suppress = false;
        var clear = function() {
            suppress = false;
        };
        return function() {
            if (!suppress) {
                callback.apply(this, arguments);
                window.setTimeout(clear, threshold);
                suppress = true;
            };
        }
    }
};
jQuery(document).ready(function () {
    EModalAdmin.init();
});
