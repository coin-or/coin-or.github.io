(function (jQuery) {
	"use strict";

	jQuery.fn.emodalTransition = function (properties, duration, callback) {
		var cssProperties = jQuery.extend({}, properties);
		var transitionDuration = duration;

		if (typeof transitionDuration === 'function') {
			callback = transitionDuration;
			transitionDuration = cssProperties.duration;
		}
		if (transitionDuration === undefined || transitionDuration === null) {
			transitionDuration = cssProperties.duration;
		}
		if (transitionDuration === undefined || transitionDuration === null) {
			transitionDuration = 400;
		}
		transitionDuration = parseInt(transitionDuration, 10);
		delete cssProperties.duration;

		if (cssProperties.scale !== undefined) {
			cssProperties.transform = 'scale(' + cssProperties.scale + ')';
			delete cssProperties.scale;
		}

		return this.each(function () {
			var element = jQuery(this);
			element.css('transition', 'all ' + transitionDuration + 'ms ease');
			window.requestAnimationFrame(function () {
				element.css(cssProperties);
			});
			window.setTimeout(function () {
				element.css('transition', '');
				if (typeof callback === 'function') {
					callback.call(element[0]);
				}
			}, transitionDuration);
		});
	};

	jQuery.fn.emodal = function (method) {
		// Method calling logic
		if (jQuery.fn.emodal.methods[method]) {
			return jQuery.fn.emodal.methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return jQuery.fn.emodal.methods.init.apply(this, arguments);
		} else {
			jQuery.error('Method ' + method + ' does not exist on jQuery.fn.emodal');
		}
	};
	jQuery.fn.emodal.methods = {
		init: function (options) {
			return this.each(function () {
				var $this = jQuery(this);
				var settings = jQuery.extend(true, {}, jQuery.fn.emodal.defaults, $this.data('emodal'), options);

				if (!$this.parent().is('body'))
					$this.appendTo('body');

				if (!jQuery('#' + settings.overlay.attr.id).length)
					jQuery('<div>').attr(settings.overlay.attr).appendTo('body');

				jQuery(window).on('resize', function () {
					if ($this.hasClass('active'))
						jQuery.fn.emodal.utilities.throttle(setTimeout(function () {
							$this.emodal('reposition');
						}, 25), 500, false);
				});

				$this
					.data('emodal', settings)
					.on('emodalBeforeOpen.hide_modal', function (e) {
						jQuery(this)
							.css({ visibility: "visible" })
							.hide()
							.addClass(settings.container.active_class);

						if(!settings.meta.display.stackable) {
							$this.emodal('close_all');
						}
					})
					.on('emodalAfterClose.close_overlay', function (e) {
						var $overlay = jQuery('#' + settings.overlay.attr.id);
						if ($overlay.length && $overlay.is(":visible")) {
							$overlay.fadeOut(settings.close.close_speed);
						}
					})
					.on('emodalAfterClose.reset_videos', function (e) {
						jQuery('iframe', $this).filter('[src*="youtube"],[src*="vimeo"]').each(function () {
							var src = jQuery(this).attr('src');
							jQuery(this).attr('src', '').attr('src', src);
						});
					})
					.on('emodalBeforeOpen.setup_close', function () {
						$this.emodal('setup_close');
					})
					.on('emodalBeforeOpen.retheme', function () {
						$this.emodal('retheme');
					})
					.on('emodalBeforeOpen.reposition', function () {
						$this.emodal('reposition');
					})
					.trigger('emodalInit');
				return this;
			});
		},
		setup_close: function () {
			var $this = jQuery(this),
				settings = $this.data('emodal'),
				$overlay = jQuery('#' + settings.overlay.attr.id),
				$close = jQuery('.' + settings.close.attr.class, $this);

			$close
				.off('click.emodal')
				.on("click.emodal", function (e) {
					e.preventDefault();
					e.stopPropagation();
					$this.emodal('close');

				});
			if (settings.meta.close.esc_press) {
				jQuery(window)
				.off('keyup.emodal')
				.on('keyup.emodal', function (e) {
					if (e.keyCode === 27) {
						$this.emodal('close');
					}
				});
			}

			if (settings.meta.close.overlay_click) {
				$overlay
				.off('click.emodal')
				.on('click.emodal', function (e) {
					e.preventDefault();
					e.stopPropagation();
					$this.emodal('close');
				});
			}

			$this
				.on('emodalAfterClose', function () {
					jQuery(window).off('keyup.emodal');
					$overlay.off('click.emodal');
					$close.off('click.emodal');
				})
				.trigger('emodalSetupClose');
		},
		open: function (callback) {
			var $this = jQuery(this);
			var settings = $this.data('emodal');

		   $this
				.trigger('emodalBeforeOpen')
				.emodal('animate', settings.meta.display.animation.type, function() {
					$this.trigger('emodalAfterOpen');
					if(callback !== undefined) callback();
				});
			return this;
		},
		close: function () {
			return this.each(function () {
				var $this = jQuery(this),
					settings = $this.data('emodal');
				$this
					.trigger('emodalBeforeClose')
					.removeClass('active')
					.fadeOut(settings.close.close_speed, function () {
						$this.trigger('emodalAfterClose');
					});
				return this;
			});
		},
		close_all: function () {
			var settings = jQuery(this).data('emodal');
			jQuery('.' + settings.container.attr.class).removeClass('active').hide(0);
			return this;
		},
		reposition: function (callback) {
			var $this = jQuery(this);
			$this.trigger('emodalBeforeReposition');
			var settings = $this.data('emodal');
			var location = settings.meta.display.location;
			var position = settings.meta.display.position;

			var reposition = {
				my: "",
				at: ""
			};

			if (location.indexOf('left') >= 0) reposition = {
				my: reposition.my + " left" + (position.left !== 0 ? "+" + position.left : ""),
				at: reposition.at + " left"
			};
			if (location.indexOf('right') >= 0) reposition = {
				my: reposition.my + " right" + (position.right !== 0 ? "-" + position.right : ""),
				at: reposition.at + " right"
			};

			if (location.indexOf('center') >= 0) {
				if (location === 'center') reposition = {
					my: "center",
					at: "center"
				};
				else reposition = {
					my: reposition.my + " center",
					at: reposition.at + " center"
				};
			}

			if (location.indexOf('top') >= 0) reposition = {
				my: reposition.my + " top" + (position.top !== 0 ? "+" + position.top : ""),
				at: reposition.at + " top"
			};
			if (location.indexOf('bottom') >= 0) reposition = {
				my: reposition.my + " bottom" + (position.bottom !== 0 ? "-" + position.bottom : ""),
				at: reposition.at + " bottom"
			};


			reposition.my = reposition.my.trim();
			reposition.at = reposition.at.trim();
			reposition.of = window;
			reposition.collision = 'fit';
			reposition.using = typeof callback === "function" ? callback : jQuery.fn.emodal.callbacks.reposition_using;
			var opacity = false;
			if ($this.is(':hidden')) {
				opacity = $this.css("opacity");
				$this.css({
					opacity: 0
				}).show();
			}

			if (position.fixed) {
				$this.addClass('fixed');
			} else {
				$this.removeClass('fixed');
			}

			if (settings.meta.display.size === 'custom') {
				$this.css({
					width: settings.meta.display.custom_width + settings.meta.display.custom_width_unit,
					height: settings.meta.display.custom_height_auto ? 'auto' : settings.meta.display.custom_height + settings.meta.display.custom_height_unit
				});
			}

			$this
				.addClass('custom-position')
				.position(reposition)
				.trigger('emodalAfterReposition');

			if (opacity) {
				$this.css({
					opacity: opacity
				}).hide();
			}
			return this;
		},
		retheme: function (theme) {
			var $this = jQuery(this);
			$this.trigger('emodalBeforeRetheme');
			var settings = $this.data('emodal'),
				$overlay = jQuery('#' + settings.overlay.attr.id),
				$container = $this,
				$title = jQuery('> .' + settings.title.attr.class, $container),
				$content = jQuery('> .' + settings.content.attr.class, $container),
				$close = jQuery('> .' + settings.close.attr.class, $container);

			if (theme === undefined) {
				theme = jQuery.fn.emodal.themes[settings.theme_id];
				if (theme === undefined) {
					theme = jQuery.fn.emodal.themes[1];
				}
			}

			$overlay.removeAttr('style').css({
				backgroundColor: jQuery.fn.emodal.utilities.convert_hex(theme.overlay.background.color, theme.overlay.background.opacity)
			});
			var container_inset = theme.container.boxshadow.inset === 'yes' ? 'inset ' : '';
			$container.css({
				padding: theme.container.padding + 'px',
				backgroundColor: jQuery.fn.emodal.utilities.convert_hex(theme.container.background.color, theme.container.background.opacity),
				borderStyle: theme.container.border.style,
				borderColor: theme.container.border.color,
				borderWidth: theme.container.border.width + 'px',
				borderRadius: theme.container.border.radius + 'px',
				boxShadow: container_inset + theme.container.boxshadow.horizontal + 'px ' + theme.container.boxshadow.vertical + 'px ' + theme.container.boxshadow.blur + 'px ' + theme.container.boxshadow.spread + 'px ' + jQuery.fn.emodal.utilities.convert_hex(theme.container.boxshadow.color, theme.container.boxshadow.opacity)
			});
			$title.css({
				color: theme.title.font.color,
				fontSize: theme.title.font.size + 'px',
				fontFamily: theme.title.font.family,
				textAlign: theme.title.text.align,
				textShadow: theme.title.textshadow.horizontal + 'px ' + theme.title.textshadow.vertical + 'px ' + theme.title.textshadow.blur + 'px ' + jQuery.fn.emodal.utilities.convert_hex(theme.title.textshadow.color, theme.title.textshadow.opacity)
			});
			$content.css({
				color: theme.content.font.color,
				//fontSize: theme.content.font.size+'px',
				fontFamily: theme.content.font.family
			});
			jQuery('p, label', $content).css({
				color: theme.content.font.color,
				//fontSize: theme.content.font.size+'px',
				fontFamily: theme.content.font.family
			});
			var close_inset = theme.close.boxshadow.inset === 'yes' ? 'inset ' : '';
			$close.text(theme.close.text).css({
				padding: theme.close.padding + 'px',
				backgroundColor: jQuery.fn.emodal.utilities.convert_hex(theme.close.background.color, theme.close.background.opacity),
				color: theme.close.font.color,
				fontSize: theme.close.font.size + 'px',
				fontFamily: theme.close.font.family,
				borderStyle: theme.close.border.style,
				borderColor: theme.close.border.color,
				borderWidth: theme.close.border.width + 'px',
				borderRadius: theme.close.border.radius + 'px',
				boxShadow: close_inset + theme.close.boxshadow.horizontal + 'px ' + theme.close.boxshadow.vertical + 'px ' + theme.close.boxshadow.blur + 'px ' + theme.close.boxshadow.spread + 'px ' + jQuery.fn.emodal.utilities.convert_hex(theme.close.boxshadow.color, theme.close.boxshadow.opacity),
				textShadow: theme.close.textshadow.horizontal + 'px ' + theme.close.textshadow.vertical + 'px ' + theme.close.textshadow.blur + 'px ' + jQuery.fn.emodal.utilities.convert_hex(theme.close.textshadow.color, theme.close.textshadow.opacity)
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
			$this.trigger('emodalAfterRetheme', [theme]);
			return this;
		},
		animate_overlay: function (style, duration, callback) {
			// Method calling logic
			var $this = jQuery(this);
			var settings = $this.data('emodal');
			if(settings.meta.display.overlay_disabled)
			{
				callback();
			}
			else
			{
			   if (jQuery.fn.emodal.overlay_animations[style])
					return jQuery.fn.emodal.overlay_animations[style].apply(this, Array.prototype.slice.call(arguments, 1));
				else
					jQuery.error('Animation style ' + jQuery.fn.emodal.overlay_animations + ' does not exist.');
			}
			return this;
		},
		animate: function (style, callback) {
			// Method calling logic
			if (jQuery.fn.emodal.animations[style])
				return jQuery.fn.emodal.animations[style].apply(this, Array.prototype.slice.call(arguments, 1));
			else
				jQuery.error('Animation style ' + jQuery.fn.emodal.animations + ' does not exist.');
			return this;
		}
	};

	jQuery.fn.emodal.callbacks = {
		reposition_using: function (position) {
			jQuery(this).css(position);
		}
	};

	jQuery.fn.emodal.utilities = {
		convert_hex: function (hex, opacity) {
			hex = hex.replace('#', '');
				var r = parseInt(hex.substring(0, 2), 16);
				var g = parseInt(hex.substring(2, 4), 16);
				var b = parseInt(hex.substring(4, 6), 16);
				var result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
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
	// Deprecated fix. utilies was renamed because of typo.
	jQuery.fn.emodal.utilies = jQuery.fn.emodal.utilities;

	jQuery.fn.emodal.defaults = {

		meta: {
			display: {
				stackable: 0,
				overlay_disabled: 0,
				size: 'medium',
				custom_width: '',
				custom_width_unit: '%',
				custom_height: '',
				custom_height_unit: 'em',
				custom_height_auto: 1,
				location: 'center top',
				position: {
					top: 100,
					left: 0,
					bottom: 0,
					right: 0,
					fixed: 0
				},
				animation: {
					type: 'fade',
					speed: 350,
					origin: 'center top'
				}
			},
			close: {
				overlay_click: 0,
				esc_press: 1
			}
		},


		container: {
			active_class: 'active',
			attr: {
				class: "emodal"
			}
		},
		title: {
			attr: {
				class: "emodal-title"
			}
		},
		content: {
			attr: {
				class: "emodal-content"
			}
		},
		close: {
			close_speed: 0,
			attr: {
				class: "emodal-close"
			}
		},
		overlay: {
			attr: {
				id: "emodal-overlay",
				class: "emodal-overlay"
			}
		}
	};

	jQuery.fn.emodal.themes = window.emodal_themes || {};

	jQuery.fn.emodal.overlay_animations = {
		none: function (duration, callback) {
			var $this = jQuery(this);
			var settings = $this.data('emodal');
			jQuery('#' + settings.overlay.attr.id).show(duration, callback);
		},
		fade: function (duration, callback) {
			var $this = jQuery(this);
			var settings = $this.data('emodal');
			jQuery('#' + settings.overlay.attr.id).fadeIn(duration, callback);
	   },
		slide: function (duration, callback) {
			var $this = jQuery(this);
			var settings = $this.data('emodal');
			jQuery('#' + settings.overlay.attr.id).slideDown(duration, callback);
	   }
	};

	jQuery.fn.emodal.animations = {
		none: function (callback) {
			var $this = jQuery(this);
			var settings = $this.data('emodal');
			$this.emodal('animate_overlay', 'none', 0, function(){
				 $this.show();
				 if(callback !== undefined) callback();
			});
			return this;
		},
		slide: function (callback) {
			var $this = jQuery(this).show(0).css({
				opacity: 0
			});
			var settings = $this.data('emodal');
			var speed = settings.meta.display.animation.speed;
			var origin = settings.meta.display.animation.origin;
			var start = {
				my: "",
				at: ""
			};
			switch (origin) {
			case 'top':
				start = {
					my: "left+" + $this.offset().left + " bottom",
					at: "left top"
				};
				break;
			case 'bottom':
				start = {
					my: "left+" + $this.offset().left + " top",
					at: "left bottom"
				};
				break;
			case 'left':
				start = {
					my: "right top+" + $this.offset().top,
					at: "left top"
				};
				break;
			case 'right':
				start = {
					my: "left top+" + $this.offset().top,
					at: "right top"
				};
				break;
			default:
				if (origin.indexOf('left') >= 0) start = {
					my: start.my + " right",
					at: start.at + " left"
				};
				if (origin.indexOf('right') >= 0) start = {
					my: start.my + " left",
					at: start.at + " right"
				};
				if (origin.indexOf('center') >= 0) start = {
					my: start.my + " center",
					at: start.at + " center"
				};
				if (origin.indexOf('top') >= 0) start = {
					my: start.my + " bottom",
					at: start.at + " top"
				};
				if (origin.indexOf('bottom') >= 0) start = {
					my: start.my + " top",
					at: start.at + " bottom"
				};
				start.my = start.my.trim();
				start.at = start.at.trim();
				break;
			}
			start.of = window;
			start.collision = 'none';
			jQuery('html').css('overflow-x', 'hidden');
			$this.position(start).css({
				opacity: 1
			});

			$this.emodal('animate_overlay', 'fade', speed * 0.25, function () {
				$this.emodal('reposition', function (position) {
					position.opacity = 1;
					$this.emodalTransition(position, speed * 0.75, function () {
						jQuery('html').css('overflow-x', 'inherit');
						if(callback !== undefined) callback();
					});
				});
			});
			return this;
		},
		fade: function (callback) {
			var $this = jQuery(this);
			var settings = $this.data('emodal');
			var speed = settings.meta.display.animation.speed / 2;
			$this.emodal('animate_overlay', 'fade', speed, function () {
				$this.fadeIn(speed, function(){
					if(callback !== undefined) callback();
				});
			});
			return this;
		},
		fadeAndSlide: function (callback) {
			var $this = jQuery(this).show(0).css({
				opacity: 0
			});
			var settings = $this.data('emodal');
			var speed = settings.meta.display.animation.speed;
			var origin = settings.meta.display.animation.origin;
			var start = {
				my: "",
				at: ""
			};
			switch (origin) {
			case 'top':
				start = {
					my: "left+" + $this.offset().left + " bottom",
					at: "left top"
				};
				break;

			case 'bottom':
				start = {
					my: "left+" + $this.offset().left + " top",
					at: "left bottom"
				};
				break;

			case 'left':
				start = {
					my: "right top+" + $this.offset().top,
					at: "left top"
				};
				break;

			case 'right':
				start = {
					my: "left top+" + $this.offset().top,
					at: "right top"
				};
				break;

			default:
				if (origin.indexOf('left') >= 0) start = {
					my: start.my + " right",
					at: start.at + " left"
				};
				if (origin.indexOf('right') >= 0) start = {
					my: start.my + " left",
					at: start.at + " right"
				};
				if (origin.indexOf('center') >= 0) start = {
					my: start.my + " center",
					at: start.at + " center"
				};
				if (origin.indexOf('top') >= 0) start = {
					my: start.my + " bottom",
					at: start.at + " top"
				};
				if (origin.indexOf('bottom') >= 0) start = {
					my: start.my + " top",
					at: start.at + " bottom"
				};
				start.my = start.my.trim();
				start.at = start.at.trim();
				break;
			}
			start.of = window;
			start.collision = 'none';
			jQuery('html').css('overflow-x', 'hidden');
			$this.position(start);
			$this.emodal('animate_overlay', 'fade', speed * 0.25, function () {
				$this.emodal('reposition', function (position) {
					position.opacity = 1;
					$this.emodalTransition(position, speed * 0.75, function () {
						jQuery('html').css('overflow-x', 'inherit');
						if(callback !== undefined) callback();
					});
				});
			});
			return this;
		},
		grow: function (callback) {
			var $this = jQuery(this);
			var settings = $this.data('emodal');
			var speed = settings.meta.display.animation.speed;
			var origin = settings.meta.display.animation.origin;

			// Set css for animation start.
			$this.css({
				transformOrigin: origin,
				opacity: 0
			}).show();

			// Begin Animation with overlay fade in then grow animation.
			$this.emodal('animate_overlay', 'fade', speed * 0.25, function () {
				// Reposition with callback. position returns default positioning.
				$this.emodal('reposition', function (position) {
					position.scale = 1;
					position.duration = speed * 0.75;
					$this
						.css({
							transform: 'scale(0)',
							opacity: 1
						})
						.emodalTransition(position);
					if(callback !== undefined) callback();
				});
			});
			return this;
		},
		growAndSlide: function (callback) {
			var $this = jQuery(this).css({
				opacity: 0
			}).show();
			var settings = $this.data('emodal');
			var speed = settings.meta.display.animation.speed;
			var origin = settings.meta.display.animation.origin;
			var start = {
				my: "",
				at: ""
			};
			switch (origin) {
			case 'top':
				start = {
					my: "left+" + $this.offset().left + " bottom",
					at: "left top"
				};
				break;
			case 'bottom':
				start = {
					my: "left+" + $this.offset().left + " top",
					at: "left bottom"
				};
				break;
			case 'left':
				start = {
					my: "right top+" + $this.offset().top,
					at: "left top"
				};
				break;
			case 'right':
				start = {
					my: "left top+" + $this.offset().top,
					at: "right top"
				};
				break;
			default:
				if (origin.indexOf('left') >= 0) start = {
					my: start.my + " right",
					at: start.at + " left"
				};
				if (origin.indexOf('right') >= 0) start = {
					my: start.my + " left",
					at: start.at + " right"
				};
				if (origin.indexOf('center') >= 0) start = {
					my: start.my + " center",
					at: start.at + " center"
				};
				if (origin.indexOf('top') >= 0) start = {
					my: start.my + " bottom",
					at: start.at + " top"
				};
				if (origin.indexOf('bottom') >= 0) start = {
					my: start.my + " top",
					at: start.at + " bottom"
				};
				start.my = start.my.trim();
				start.at = start.at.trim();
				break;
			}
			start.of = window;
			start.collision = 'none';
			jQuery('html').css('overflow-x', 'hidden');
			$this.position(start)
				.css({
					opacity: origin == 'center center' ? 0 : 1,
					transformOrigin: origin
				});
			$this.emodal('animate_overlay', 'fade', speed * 0.25, function () {
				$this.emodal('reposition', function (position) {
					position.scale = 1;
					position.opacity = 1;
					position.duration = speed * 0.75;
					$this.css({
							transform: 'scale(0)'
						})
						.emodalTransition(position, function () {
							jQuery('html').css('overflow-x', 'inherit');
						});
					if(callback !== undefined) callback();
				});
			});
			return this;
		}
	};

	jQuery('.emodal').css({ visibility: "visible" }).hide();

	jQuery(document).ready(function () {
		jQuery('.emodal')
			.emodal()
			.each(function () {
				var $this = jQuery(this);
				jQuery(document).on('click', '.' + $this.attr('id'), function (e) {
					e.preventDefault();
					e.stopPropagation();
					$this.emodal('open');
				});
				jQuery('.' + $this.attr('id')).css('cursor', 'pointer');
			});
	});
}(jQuery));
