(function($){

	"use strict";

	window.ff_fruitful_recent_posts_slider_init = function() {
		
		$('.fruitful_recent_posts_slider').each( function() {

			var $shortcode = $(this),
			$carousel = $shortcode.find('.ff-carousel'),
			slidesCount = $shortcode.data('slides'),
			slidesCountSmall = $shortcode.data('slides-small'),
			slidesCountExtraSmall = $shortcode.data('slides-extra-small');
			
			if ( ! $carousel.length ) {
				return null;
			}
			

			if( $carousel.hasClass('slick-initialized') ) {
				$carousel.slick('unslick');
			}
			
			$carousel.slick({
				infinite: true,
				adaptiveHeight: true,
				cssEase: 'linear',
				slidesToShow: slidesCount,
				lazyLoad: 'ondemand',
				responsive: [
					{
						breakpoint: 992,
						settings: {
							slidesToShow: slidesCountSmall
						}
					},
					{
						breakpoint: 480,
						settings: {
							slidesToShow: slidesCountExtraSmall
						}
					}
				]
			});

		});

	};

	window.ff_fruitful_recent_posts_slider_init();

})( window.jQuery );