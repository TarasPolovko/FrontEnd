requirejs.config({
	"paths": {
		"jquery": "https://code.jquery.com/jquery-1.12.4.min"
	},
	"shim": {
		'jquery': {
			exports: 'jQuery'
		}
	}
});

require(
	//module's name 

	// modules
	[
		"Model",
		"View",
		"Controller",
		"jquery",
		"tmpl"
	],

	// function which is called after modules have been loaded
	function(Model, View, Controller, $, tmpl) {
		$(function() {
    		var data = ['learn js', 'learn html', 'drink coffee'];
    		var model = new Model(data);
    		var view = new View(model);
    		var controller = new Controller(model, view);
		});
	}
);