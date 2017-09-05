$(function() {
	var $fields = $('.basic-form .form-control');
	var $tips = $('.tip');
	var $helpButton = $('#showHelp');

	$fields.hover(
		function() {
			var $tip = $(this).parent().siblings('.tip');
			$tip.fadeIn();
		},
		function() {
			var $tip = $(this).parent().siblings('.tip');
			$tip.fadeOut();
		}
	);

	$helpButton.on('click', function() {
		$tips.fadeIn();
	});
});