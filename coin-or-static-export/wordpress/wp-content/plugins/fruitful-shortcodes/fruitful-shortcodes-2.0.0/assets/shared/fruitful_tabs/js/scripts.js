(function($){

	"use strict";

	window.ff_fruitful_tabs_shortcode = function() {

		// build tabs markup
		$('.fruitful_tabs').each( function() {

			var $shortcode = $(this),
			type = $shortcode.data('type'),
			respBreak = $shortcode.data('break'),
			$nav = $shortcode.find('nav');

			$nav.find('a:first').addClass('current');
			$shortcode.find('.fruitful_tabs_tab:first').addClass('current active');

			// build JS-based navigation
			if( $shortcode.hasClass('from-shortcodes') ) {

				$shortcode.prepend('<nav></nav>');

				var $titles = $shortcode.find('h4'),
				$nav = $shortcode.find('nav');

				$titles.each( function() {
					$nav.append('<a href="javascript:;">' + $(this).text() + '</a>');
				});

			}

			// turn tabs into accordion on responsive break
			if( $shortcode.hasClass('type-accordion') == false ) {

				$(window).on('resize', function() {

					if( $(window).width() <= respBreak ) {
						$shortcode.removeClass('type-vertical');
						$shortcode.removeClass('type-default');
						$shortcode.addClass('type-accordion');
						$shortcode.find('.fruitful_tabs_tab').show();
						$shortcode.find('.ff-tab-content').hide();
						$shortcode.find('.fruitful_tabs_tab:first .ff-tab-content').show();
						$shortcode.find('.fruitful_tabs_tab').removeClass('current').removeClass('active');
						$shortcode.find('.fruitful_tabs_tab:first').addClass('current').addClass('active');
					} else {
						$shortcode.find('.ff-tab-content').show();

						$shortcode.find('.fruitful_tabs_tab').hide().removeClass('current');
						$shortcode.find('.fruitful_tabs_tab:first').show().addClass('current');

						$nav.find('a').removeClass('current').removeClass('active');
						$nav.find('a:first').addClass('current active');

						$shortcode.removeClass('type-accordion');
						$shortcode.addClass('type-' + type);
					}

					window.ff_fruitful_tabs_nav_shortcode();

				});

				$(window).trigger('resize');

			}


		});

	}

	window.ff_fruitful_tabs_nav_shortcode = function() {

		// tabs click
		$('.fruitful_tabs.type-default, .fruitful_tabs.type-vertical').each( function() {

			var $shortcode = $(this);

			$shortcode.find('nav a').off('click').on('click', function( e ) {

				e.preventDefault();

				var $link = $(this),
				index = $link.parent().find('a').index( $link );
	
				$shortcode.find('.fruitful_tabs_tab').hide();
				$shortcode.find('.fruitful_tabs_tab').eq( index ).show();
				$shortcode.find('nav a').removeClass('current');
				$link.addClass('current');

			});

		});

		// accordion click
		$('.fruitful_tabs.type-accordion').each( function() {

			var $shortcode = $(this);
			$shortcode.find('.fruitful_tabs_tab').show();

			$shortcode.find('.ff-title').off('click').on('click', function( e ) {

				e.preventDefault(); 
	
				var $link = $(this),
				$block = $link.parents('.fruitful_tabs_tab');
	
				$link.parents('.fruitful_tabs_tab').toggleClass('active');
	
				$block.find('.ff-tab-content').slideToggle();
	
			});

		});

	}

	window.ff_fruitful_tabs_refresh = function() {

		$('.fruitful_tabs.type-default, .fruitful_tabs.type-vertical').each( function() {
			var $shortcode = $(this);

			$shortcode.find('.fruitful_tabs_tab').hide();
			$shortcode.find('.fruitful_tabs_tab:first').show();
			$shortcode.find('nav a:first').click();
			
		});

		$('.fruitful_tabs.type-accordion').each( function() {
			var $shortcode = $(this);
			$shortcode.find('.fruitful_tabs_tab').show();
		});

	}

	window.ff_fruitful_tabs_shortcode();
	window.ff_fruitful_tabs_nav_shortcode();

})( window.jQuery );