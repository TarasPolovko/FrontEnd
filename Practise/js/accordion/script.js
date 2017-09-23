$(function() {
	var $title = $('.topic-title');
	var $content = $('.topic-content');

	$title.eq(2).addClass("active");
	$content.eq(2).show();

	$title.on('click', function() {
		$(this).next(".topic-content").slideToggle('slow');
		$(this).next(".topic-content").siblings(".topic-content:visible").slideUp('slow');
		$(this).toggleClass("active");
		$(this).siblings(".topic-title").removeClass("active");
	});
});