$(function() {
	var $link = $('.menu__link');
	var $tip = $('.menu__tip');

	$link.hover(
		function() {
			$(this).next(".menu__tip").animate({opacity: "show"}, "slow");
		},
		function() {
			$(this).next(".menu__tip").animate({opacity: "hide"}, "fast");
		}
	);
});