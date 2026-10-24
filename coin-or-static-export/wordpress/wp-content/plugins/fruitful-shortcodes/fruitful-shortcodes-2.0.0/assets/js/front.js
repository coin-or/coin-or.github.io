// detect if an element currently in Viewport
jQuery.fn.isInViewport = function() {
	var elementTop = jQuery(this).offset().top;
	var elementBottom = elementTop + jQuery(this).outerHeight();

	var viewportTop = jQuery(window).scrollTop();
	var viewportBottom = viewportTop + jQuery(window).height();

	return elementBottom > viewportTop && elementTop < viewportBottom;
};