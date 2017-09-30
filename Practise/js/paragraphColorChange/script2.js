$(function() {

	// change the paragraph color
	// $("p").on("click", function() {
	// 	$(this).css("color", "red");
	// })

	// change the paragraph color using own plugin

	$("p:first").changeColor({"color": "red", "fontSize": "22px", "textDecoration": "none"});
	$("p:not(:first)").changeColor({"color": "green", "fontSize": "22px", "textDecoration": "none"});

});