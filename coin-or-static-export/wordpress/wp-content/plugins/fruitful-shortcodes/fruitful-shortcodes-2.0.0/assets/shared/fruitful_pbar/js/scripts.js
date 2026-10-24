(function($){

	"use strict";

	window.ff_bar_shortcode_init = function() {

		$('.ff-bar').each( function() {
			var $elem = $(this);
			$elem.css('transition-delay', $elem.attr('data-delay') );

		});

		window.ff_bar_shortcode_wow = new WOW({
			boxClass:     'ff-bar',
			animateClass: 'ff-animated',
			offset:       0,
			mobile:       true,
			live:         true,
			callback:     function(box) {
				var $box = $( box );
				$box.css( 'width', $box.attr('data-width') );
			}
		});

		window.ff_bar_shortcode_wow.init();

	}

	window.ff_bar_shortcode_reinit = function() {

		if( 'ff_bar_shortcode_wow' in window ) {
			window.ff_bar_shortcode_wow.stop();
		}

		$('.ff-bar').removeClass('ff-animated');
		window.ff_bar_shortcode_init();

	}

	window.ff_bar_shortcode_init();

	$(window).on('resize', function() {
		window.ff_bar_shortcode_init();
	});

})( window.jQuery );