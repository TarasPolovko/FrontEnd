(function($) {
	
	$.fn.changeColor = function(options) {

		var defaults = {
			"color": "black",
			"fontSize": "14px",
			"textDecoration": "underline"
		}

		defaults = $.extend(defaults, options);

		$(this).on("click", function() {
			$(this).css({
				"color": defaults.color,
				"fontSize": defaults.fontSize,
				"textDecoration": defaults.textDecoration
			});
		})

		return this;
	}

})(jQuery);