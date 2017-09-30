(function($) {

	$.fn.carousel = function() {
		var carousel = $(this);
		var isMoving = false;

		var defaults = {
			"buttonPrevious": $("#buttonPrevious"),
			"buttonNext": $("#buttonNext")
		}

		var currentLeftPosition = 0;
		var pixelOffset = 150;
		var elementsNumber = carousel.find("li").length;
		var maxOffset = 0;
		var minOffset = -(elementsNumber - 4) * pixelOffset;

		function carouselIndicators() {
			for (var i = 0; i < elementsNumber; i++) {
				var indicator = $('<span class="carousel-indicator"></span>');
				if (i < 4) {
					indicator.addClass('active');
				}
				$("#carouselIndicators").append(indicator);
			}
		}

		carouselIndicators();

		defaults.buttonPrevious.on("click", function() {
			if (isMoving) {
				return;
			} 

			if (currentLeftPosition < maxOffset) {
				isMoving = true;
				currentLeftPosition += pixelOffset;
				carousel.animate({"left": currentLeftPosition + "px"}, "medium", function() {
					isMoving = false;
				});
				$(".carousel-indicator.active:last").removeClass('active');
				$(".carousel-indicator.active:first").prev().addClass('active');
			};
		});

		defaults.buttonNext.on("click", function() {
			if (isMoving) {
				return;
			} 
			
			if (currentLeftPosition > minOffset) {
				isMoving = true;
				currentLeftPosition -= pixelOffset;
				carousel.animate({"left": currentLeftPosition + "px"}, "medium", function() {
					isMoving = false;
				});
				$(".carousel-indicator.active:first").removeClass('active');
				$(".carousel-indicator.active:last").next().addClass('active');
			};
		});
	}

})(jQuery);