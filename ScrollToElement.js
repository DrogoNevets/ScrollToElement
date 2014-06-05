$.fn.scrollToElement = function (options) {
	var defaults = {
			offset: 0,
			speed: 2000
		},
		opts = $.extend(deafults, options);

	return this.each(function () {
		$('html, body').animate({
			scrollTop: $(this).offset().top - opts.offset
		}, opts.speed);
	});
};