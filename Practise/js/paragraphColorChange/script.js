var loader = function () {
	var paragraphs = document.getElementsByTagName("p");


	// Change the color of paragraph by click. Foreach method
	Array.from(paragraphs).forEach(function(element) {

		element.onclick = function() {
			this.style.color = "red";
		};

	});

	// Change the color of paragraph by click. Classic loop method
	// for(var i = 0; i < paragraphs.length; i++) {
	// 	paragraphs[i].onclick = function() {
	// 		this.style.color = "red";
	// 	}
	// }
}

document.addEventListener("DOMContentLoaded", loader, false);