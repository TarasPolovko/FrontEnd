$(function() {
	var $links = $('.nav-tabs a');

	$links.on('click', function() {
		var $activeLink = $(this);
		$links.parent().removeClass("active");
		$activeLink.parent().addClass("active");

		var $allTabCell = $('.tab-cell');
		$allTabCell.hide();

		var $activeTabCell = $($activeLink.attr('href'));
		$activeTabCell.show();
	});
});