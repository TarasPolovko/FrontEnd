$(function() {
	var $run = $('.run');
	var $box = $('.box');

	$run.on('click', function(e) {
		e.preventDefault();
		$box.animate({opacity: "0.1", left: "+=400"}, 1200)
		.animate({opacity: "0.4", top: "+=160", height: "20px", width: "20px"}, "slow")
		.animate({opacity: "1", left: "0", height: "100px", width: "100px"}, "slow")
		.animate({top: "0"}, "fast")
		.slideUp()
		.slideDown("slow");
	})
});