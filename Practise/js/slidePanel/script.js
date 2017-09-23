$(function() {
	var $panel = $('.panel');
	var $button = $('.button');

	$button.on('click', function() {
		$panel.slideToggle('slow');
		$(this).toggleClass('active');

		if ($(this).hasClass('active')) {
			$(this).html('HIDE');
		} else {
			$(this).html('SHOW');
		}

		if ($panel.is(':visible')) {
			$panel.css('display', 'flex');
		}
	})
})