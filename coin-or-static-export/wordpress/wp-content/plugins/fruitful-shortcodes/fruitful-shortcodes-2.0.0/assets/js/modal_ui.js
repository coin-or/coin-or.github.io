(function($){

	"use strict";

	/**
	 * Init media uploader instanse
	**/
	var ff_shortcodes_media_uploader;

	/**
	 * Modal window functions
	**/
	window.ff_shortcodes_ui = {

		/**
			Class config
		**/
		config: {},

		/**
			Constructor
		**/
		init: function() {

			// class vars
			this.config = window.ff_shortcodes_config;

			// init UI controls
			this.initControls();

		},

		/**
			Init modal window controls
		**/
		initControls: function() {

			this.initShortcodesPicker();
			this.initTabs();
			this.initColorPicker();
			this.initRadios();
			this.initAlignPicker();
			this.initImagePicker();
			this.initSwitcher();
			this.initIconPicker();
			this.initDynamicRows();
			this.initFormSubmit();

		},

		/**
			Choose shortcode screen
		**/
		initShortcodesPicker: function() {

			var self = this;

			// search shortcodes form
			$('#ff-search-shortcodes').off('keyup change').on( 'keyup change', function() {
				var $input = $(this),
				$form = $input.parent('.search-shortcodes');

				$.trim( $input.val() ) == '' ? $form.removeClass('active') : $form.addClass('active');
				$( self.config.modalContentId ).getNiceScroll().resize();
			}).liveUpdate( '#ff-shortcodes-list' );

			$('#ff-search-clear').off('click').on('click', function() {
				var $form = $(this).parent('.search-shortcodes');
				$form.removeClass('active').find('input[type=text]').val('').trigger('keyup');
				$( self.config.modalContentId ).getNiceScroll().resize();
				return false;
			});

			// shortcode picker
			$( self.config.modalContainerId ).find('.shortcode-elem').off('click').on( 'click', function() {

				var $link = $(this),
				action = $link.parent().hasClass('promo') ? self.config.ajaxLoadModalPromoAction: self.config.ajaxLoadShortocdeAction;

				$( self.config.modalContentId ).css('opacity', '0.4');

				window.ff_shortcodes_modal_window.loadModalContent( action, self.config.modalContentId, $(this).data('shortcode') );

				$( self.config.modalHeaderId ).ajaxComplete( function() {
					// show "back" button
					$(this).find('.ff-shortcodes-back').show();
					// set standard opacity
					$( self.config.modalContentId ).css('opacity', '1');
					// set window header
					$( self.config.modalHeaderId ).find('h4').text( $link.find('h4').text());
				});

				return false;
			});

		},

		/**
			Tabs inside modal window
		**/
		initTabs: function() {

			var self = this,
			$modalContent = $( self.config.modalContentId ),
			greatestWidth = 0;

			$modalContent.find('.ff-tabs > a').each( function() {
				var theWidth = $(this).width();

				if( theWidth > greatestWidth) {
					greatestWidth = theWidth;
				}

			}).css( 'min-width', greatestWidth);

			if( $modalContent.find('.ff-tabs').hasClass('initialized') ) {
				return true;
			}

			$modalContent.find('.ff-tab').not(':first').hide();

			$modalContent.find('.ff-tabs > a').off('click').on('click', function() {

				var $link = $(this),
				tab = $link.attr('href'),
				$tab = $( tab );

				if( $tab.length ) {
					$modalContent.find('.ff-tabs > a').removeClass('current');
					$modalContent.find('.ff-tab').hide();
					$tab.show();
					$link.addClass('current');
					$modalContent.find('.ff-tabs').addClass('initialized');
				}

				$( self.config.modalContentId ).getNiceScroll().resize();

				return false;
			});

		},

		/**
			Color picker control
		**/
		initColorPicker: function() {

			var self = this,
			$modalContent = $( self.config.modalContentId );

			$modalContent.find('.ff-control-color-picker').each( function() {
				var $control = $(this),
				$input = $control.find('input[type=text]'),
				$color = $control.find('.color');

				$input.wpColorPicker();

				$input.on('change', function() {
					$color.css('background-color', $input.val() );
				});

			});

		},

		/**
			Radio picker control
		**/
		initRadios: function() {

			var self = this,
			$modalContent = $( self.config.modalContentId );

			$modalContent.find('.ff-control-radio .ff-radio').off('click').on('click', function() {
				var $elem = $(this),
				$elems = $elem.parent();

				$elems.find('input[type=radio]').removeAttr('checked');
				$elems.find('.ff-radio').removeClass('selected');
				$elem.addClass('selected');
				$elem.find('input[type=radio]').attr('checked', 'checked');

				return false;
			});

			
		},

		/**
			Align picker control
		**/
		initAlignPicker: function() {

			var self = this,
			$modalContent = $( self.config.modalContentId );

			$modalContent.find('.ff-control-alignment .ff-picker > label').off('click').on('click', function() {
				var $elem = $(this),
				$elems = $elem.parent();

				$elems.find('input[type=radio]').removeAttr('checked');
				$elems.find('.picker').removeClass('selected');
				$elem.addClass('selected');
				$elem.find('input[type=radio]').attr('checked', 'checked');

			});

		},

		/**
			Image picker control
		**/
		initImagePicker: function() {

			var self = this,
			$modalContent = $( self.config.modalContentId );

			$modalContent.find('.ff-control-image-picker').each( function() {

				var $picker = $(this),
				$removeBtn = $picker.find('a.remove'),
				$addBtn = $picker.find('a.add'),
				$imgHolder = $picker.find('.img-holder'),
				$input = $picker.find('input[type=hidden]');

				$addBtn.off('click').on('click', function( e) {

					e.preventDefault();

					ff_shortcodes_media_uploader = wp.media.frames.ff_shortcodes_media_uploader = wp.media({
						className: 'media-frame',
						frame: 'select',
						multiple: false
					});

					ff_shortcodes_media_uploader.on('select', function() {
						var attachment = ff_shortcodes_media_uploader.state().get('selection').first().toJSON();

						if( 'url' in attachment ) {
							$imgHolder.css('background-image', 'url(' + attachment.url + ')' );
						} else {
							$imgHolder.css('background-image', 'url(' + attachment.sizes.thumbnail.url + ')' );
						}

						$input.val( attachment.id );
					}).open();

					$picker.addClass('img-selected');

					return false;
				});

				$removeBtn.off('click').on('click', function() {
					$imgHolder.css('background-image', 'none');
					$input.val('');
					$picker.removeClass('img-selected');
					return false;
				});

			});

		},

		/**
			Switcher picker control
		**/
		initSwitcher: function() {

			var self = this,
			$modalContent = $( self.config.modalContentId );

			$modalContent.find('.ff-control-switch .ff-picker').off('click').on('click', function() {
				var $elem = $(this);

				$elem.toggleClass('on').toggleClass('off');

				if( $elem.hasClass('on') ) {
					$elem.find('input[type=hidden]').val('on');
				} else {
					$elem.find('input[type=hidden]').val('off');
				}			

				return false;
			});

		},

		/**
			Icon picker control
		**/
		initIconPicker: function() {

			var self = this,
			$modalContent = $( self.config.modalContentId );

			$modalContent.find('.ff-control-icon-picker').each( function() {

				var $contol = $(this),
				$inputSearch = $contol.find('input[type=text]'),
				$val = $contol.find('input[type=hidden]'),
				$icons = $contol.find('.all-icons'),
				$preview = $contol.find('.icon i');

				$inputSearch.off('focus').on('focus', function() {
					$icons.show('fast');
				});

				$inputSearch.off('keyup').on('keyup', function() {
					var $elem = $(this),
					value = $elem.val(),
					$elems = $icons.find('a');

					if( $.trim( value ) == '' ) {
						$elems.show();
					} else {
						$elems.hide();
						$elems.find("i[class*=" + value + "]").parent().show();
					}

					return false;
				});

				$icons.find('a').off('click').on('click', function() {

					var icon = $(this).data('icon');

					$preview.attr('class', icon );
					$val.val( icon );
					$icons.hide('fast');
					$contol.removeClass('no-icon');
					$inputSearch.val( icon );

					return false;
				});

				$preview.off('click').on('click', function() {
					$val.val('');
					$inputSearch.val('');
					$(this).attr('class', '');
					$contol.addClass('no-icon');
					return false;
				});

			});

		},

		/**
			Dynamic rows
		**/
		initDynamicRows: function() {

			var self = this,
			$modalContent = $( self.config.modalContentId );

			// sortable panels
			$modalContent.find('.ff-shortcodes-dynamic-rows .sortable').sortable();

			// toggle panel
			$modalContent.find('.ff-shortcodes-dynamic-rows .toggle').off('click').on('click', function() {

				$(this).parents('.ff-shortcodes-dynamic-row').toggleClass('open');
				$( self.config.modalContentId ).getNiceScroll().resize();

				return false;
			});

			// remove panel
			$modalContent.find('.ff-shortcodes-dynamic-controls .remove').off('click').on('click', function() {

				var $elem = $(this),
				$parent = $elem.parents('.ff-shortcodes-dynamic-rows'),
				$elems = $parent.find('.ff-shortcodes-dynamic-row'),
				$row = $elem.parents('.ff-shortcodes-dynamic-row');

				if( $elems.length > 1 ) {
					$row.remove();
				} else {
					$row.shake({
						interval: 100,
						distance: 5,
						times: 2
					});
				}

				self.countDynamicInputs( $parent );
				$( self.config.modalContentId ).getNiceScroll().resize();

				return false;
			});

			// duplicate panel
			$modalContent.find('.ff-shortcodes-dynamic-controls .duplicate').off('click').on('click', function() {

				var $elem = $(this),
				$parent = $elem.parents('.ff-shortcodes-dynamic-row'),
				$holder = $elem.parents('.ff-shortcodes-dynamic-rows').find('.sortable');

				$parent.clone().appendTo( $holder );

				$holder.sortable();

				self.initControls();
				self.countDynamicInputs( $elem.parents('.ff-shortcodes-dynamic-rows') );
				$( self.config.modalContentId ).getNiceScroll().resize();

				return false;

			});

			// add new panel
			$modalContent.find('.ff-shortcodes-dynamic-rows .ff-shortcodes-dynamic-row-add').off('click').on('click', function() {

				var $elem = $(this),
				$parent = $elem.parents('.ff-shortcodes-dynamic-rows');

				$parent.find('.ff-shortcodes-dynamic-row:last').clone().appendTo( $parent.find('.sortable') );

				$parent.sortable();

				self.initControls();
				self.countDynamicInputs( $parent );
				$( self.config.modalContentId ).getNiceScroll().resize();

				return false;
			});

			// dynamic titles
			$modalContent.find('.ff-shortcodes-dynamic-row .ff-row-title').off( 'keyup change').on( 'keyup change', function() {
				var $elem = $(this);
				$elem.parents('.ff-shortcodes-dynamic-row').find('h4').text( $elem.val() );
			});

		},

		/**
			Re-count dynamic form inputs
		**/
		countDynamicInputs: function( $container ) {

			$container.find('.ff-shortcodes-dynamic-row').each( function( i ) {

				$(this).find('input, textarea, select').each( function() {

					var currName = $(this).attr('name'),
					currId = $(this).attr('id'),
					pattern = /\[[0-9]+\]/i,
					newName = currName.replace( pattern, '[' + i + ']');

					if( typeof currId !== 'undefined' ) {
						var newId = currId.replace( pattern, '[' + i + ']');
						$(this).attr('id', newId );
					}

					$(this).attr('name', newName );

				});

				$(this).find('label').each( function() {
					var currName = $(this).attr('for');

					if( typeof currName !== 'undefined' ) {
						var pattern = /\[[0-9]+\]/i,
						newName = currName.replace( pattern, '[' + i + ']');

						$(this).attr('for', newName );
					}

				});

			});

		},

		/**
			Build inner shortcode
		**/
		parseInnerShortcodeFields: function( form ) {

			var shortcodeOut = '';

			$.each( form, function( i, elem ) {

				shortcodeOut += '[' + elem._ff_shortcode_name;

				$.each( elem, function( key, value ) {

					if( key != '_ff_shortcode_name' && key != 'content' ) {
						shortcodeOut += ' ' + key + '="' + value + '"';
					}

				});

				shortcodeOut += ']';

				if( typeof elem.content !== 'undefined' ) {
					shortcodeOut += elem.content;
					shortcodeOut += '[/' + elem._ff_shortcode_name + ']';
				}

			});

			return shortcodeOut;

		},

		/**
			Add shortcode to WP editor
		**/
		initFormSubmit: function() {

			var self = this,
			$modalContent = $( self.config.modalContentId );

			$modalContent.find('.add-shortcode').off('click').on('click', function() {
				$( self.config.modalForm ).submit();
				return false;
			});

			$( self.config.modalForm ).off('submit').on('submit', function() {

				var $form = $(this),
				formObj = $form.serializeJSON(),
				shortcodeOut = '',
				hasInnerShortcode = false,
				innerShortcodeOut = '';

				// a glue for shortcode attributes
				shortcodeOut = '[' + formObj._ff_shortcode_name;

				// add shortcode atts
				$.each( formObj, function( key, value) {

					if( value == '' || key == '_ff_shortcode_name' || key == 'content' ) {
						// do nothing for special fields

					} else if( typeof value === 'object' ) {
						hasInnerShortcode = true;
						innerShortcodeOut += self.parseInnerShortcodeFields( value );
					} else {
						shortcodeOut += ' ' + key + '="' + value + '"';
					}

				});

				shortcodeOut += ']';

				// if input[name=content] exists, move this field from attributes to shortcode content
				if( typeof formObj.content !== 'undefined' ) {
					shortcodeOut += formObj.content;
					shortcodeOut += '[/' + formObj._ff_shortcode_name + ']';
				} else if( hasInnerShortcode ) {
					shortcodeOut += innerShortcodeOut;
					shortcodeOut += '[/' + formObj._ff_shortcode_name + ']';
				}
				
				
				// close modal window
				window.ff_shortcodes_modal_window.closeModalWindow();

				// paste generated shortcode to WP editor
				try {
					window.ff_shortcodes_mce_editor.focus();
					window.ff_shortcodes_mce_editor.insertContent(shortcodeOut);
				} catch (e) {
					console.error(e);
				}
				
				return false;

			});

		}

	}

})( window.jQuery );
