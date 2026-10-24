(function($){

	"use strict";

	/**
	 * Modal window functions
	**/
	window.ff_shortcodes_modal_window = {

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

			// load custom fonts
			WebFont.load({ google: { families: ["Raleway:400,500,700"] }});

			// handle events
			this.initEvents();

		},

		/**
			Handle modal window events
		**/
		initEvents: function() {

			// user clicks on "Fruitful Shortcodes" button
			this.onShortcodesButtonClick();

			// user clicks on modal overlay, close the window
			// this.onShortcodesOverlayClick();

		},

		/**
			User clicks on "Fruitful Shortcodes" button
			Create modal window
		**/
		onShortcodesButtonClick: function() {

			var self = this,
			$modal = $( this.config.modalContainerId );

			/**
			 * Create a temporary div for a modal window
			**/
			if( ! $modal.length ) {
				$('body').append('<div id="' + this.config.modalContainerId.replace('#', '') + '"></div>');
				$modal = $( this.config.modalContainerId );
			}

			$( document ).on( 'click', this.config.addShortcodesBtnSelector, function() {

				self.loadModalContent( self.config.ajaxLoadModalAction, self.config.modalContainerId );

				return false;
			});

		},

		/**
			Close modal window when user clicks on overlay
		**/
		onShortcodesOverlayClick: function() {

			var self = this;

			$(document).mouseup(function (e) {

				var $modalWindow = $( self.config.modalWindowId );

				if ( !$modalWindow.is(e.target) && $modalWindow.has(e.target).length === 0) {
					self.closeModalWindow();
				}

			});

		},

		/**
			Load content into modal window
		**/
		loadModalContent: function( action, target, data = false ) {

			var self = this;

			// load modal content through AJAX
			$.ajax({
				url: ajaxurl,
				type: "POST",
				data: {
					'action' : action,
					'data' : data
				},
				success: function( answer ) {

					var $modalContainer = $( self.config.modalContainerId );

					// append loaded form to modal window
					$(  target ).html( answer );

					// mark it as loaded
					setTimeout( function() {
						$modalContainer.addClass('loaded');
					}, 100);

					// init scroll
					self.initModalScroll();

					// focus on a search field
					$modalContainer.find('.search-shortcodes .search').focus();

					// init controls inside
					self.initModalControls();

				}
			});

		},

		/**
		 * Close modal window
		**/
		closeModalWindow: function() {
			$( this.config.modalContainerId ).html('').removeClass('loaded');
		},

		/**
		 * Nice & smooth scroll inside modal window
		**/
		initModalScroll: function() {

			$( this.config.modalContentId ).niceScroll({
				cursorcolor:"#9b9b9b",
				cursorwidth: '4px',
				railpadding: { top: 0, right: 0, left: 0, bottom: 0 }
			});

		},

		/**
			Init elements inside modal window
		**/
		initModalControls: function() {

			var self = this,
			$modal = $( self.config.modalWindowId ),
			$modalContent = $( self.config.modalContainerId );

			// close window button
			$modal.find('.ff-shortcodes-close').off('click').on( 'click', function() {
				self.closeModalWindow();
				return false;
			});

			// roll-up window button
			$modal.find('.ff-shortcodes-rollup').off('click').on( 'click', function() {
				$( self.config.modalOverlay ).addClass('invisible');
				$( self.config.modalWindowId ).addClass('rolled-up');
				return false;
			});

			// back button
			$modal.find('.ff-shortcodes-back').off('click').on( 'click', function() {
				$( self.config.modalContentId ).css('opacity', '0.4');

				self.loadModalContent( self.config.ajaxLoadModalAction, self.config.modalContainerId );

				$( self.config.modalHeaderId ).ajaxComplete( function() {
					// hide "back" button
					$(this).find('.ff-shortcodes-back').hide();
					// set standard opacity
					$( self.config.modalContentId ).css('opacity', '1');
				});

				$( self.config.modalContentId ).getNiceScroll().resize();

				return false;
			});

			// restore rolled-up window
			$( self.config.modalHeaderId ).off('click').on( 'click', function() {

				if( $(this).parent().hasClass('rolled-up') ) {

					$( self.config.modalOverlay ).removeClass('invisible');
					$modal.removeClass('rolled-up');
					return false;

				}

			});

			// init modal UI
			window.ff_shortcodes_ui.init();

		}

	}

})( window.jQuery );
