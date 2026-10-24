(function($){

	"use strict";

	$('.fruitful_alert .ff-alert-dismiss').on( 'click', function() {
		$(this).parent().slideToggle( 400, function() {
			$(this).remove();
		});
		return false;
	});

})( window.jQuery );