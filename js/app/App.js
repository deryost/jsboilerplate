define( [
		'backbone', 
		'underscore', 
		'jquery', 
		'mustache', 
		'text!templates/test.mustache', 
		'jquery/jquery.alpha', 
		'jquery/jquery.beta'
], function(Backbone, _, $, Mustache, template){
	$('body').beta().alpha();
	$('body').append(Mustache.render(template, {"name": "testVarName"}));
	//console.log('backbone:' + $ + " underscore:" + _);
});