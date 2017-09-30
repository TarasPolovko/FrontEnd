(function($){

	$.fn.fancybox = function(options) {
		var $link = $(this);
		var $body = $("body");
		var $model;
		var $overlay;

		var defaults = {
			overlayColor: "black",
			font: "Arial"
		};

		// var settings = $.extend({}, defaults); // to make settings and default independent
		settings = $.extend(defaults, options);

		$link.on("click", showModal);

		function showModal(e) {
			e.preventDefault();

			$modal = $('<div class="fancybox-modal"><img src="' + $link.attr("href") + '"></div>');
			$overlay = $('<div class="fancybox-overlay"></div>');
			$overlay.css({
				"background-color": defaults.overlayColor
			});
			
			$body.append($modal);
			$modal.css("display","flex").hide().fadeIn('slow');
			$modal.prepend($overlay);
			$overlay.fadeIn('slow');

			$overlay.one("click", hideModal);
		}

		function hideModal() {
			$modal.fadeOut('slow', function() {
				$(this).remove();
			});
			$(this).fadeOut('slow', function() {
				$(this).remove();
			});
		} 

		return this;
	}


})(jQuery);