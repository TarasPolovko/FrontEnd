$(function() {
	$(".panel li:gt(4)").hide();

	// toggle massage body
	$(".massage__head").on('click', function() {
		$(this).next(".massage__body").slideToggle();
	});

	// Slide up all the massages
	$("#collapseAll").on('click', function(e) {
		e.preventDefault();
		$(".massage__body").slideUp(500);
	});

	// show all massages
	$("#showAllMassages").on('click', function(e) {
		e.preventDefault();
		$(this).hide();
		$("#showAllMassagesIcon").hide();
		$("#showOnlyFive").show();
		$("#showOnlyFiveIcon").show();
		// $(".panel li:gt(4)").slideDown("slow");
		$(".panel li:gt(4)").animate({height: "toggle", opacity: "show"}, "slow");

	});

	// to show only first 5 massages
	$("#showOnlyFive").on('click', function(e) {
		e.preventDefault();
		$(this).hide();
		$("#showOnlyFiveIcon").hide();
		$("#showAllMassages").show();
		$("#showAllMassagesIcon").show();
		// $(".panel li:gt(4)").slideUp("slow");
		$(".panel li:gt(4)").animate({height: "toggle", opacity: "hide"}, "slow");

	});
});