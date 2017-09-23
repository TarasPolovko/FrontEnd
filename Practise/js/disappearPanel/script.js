$(function() {
	var $panel = $('.panel');
	var $button = $('.panel__close-btn');

	$button.on('click', function() {
		$(this).parent('.panel').animate({ opacity: 'hide'}, 'slow');
	});
});