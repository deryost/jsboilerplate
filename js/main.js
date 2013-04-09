require.config({
	baseUrl: "js",
	enforceDefine: false,
	paths: {
		jquery: 'libs/jquery',
		underscore: 'libs/underscore/underscore',
		backbone: 'libs/backbone/backbone'
	},
	shim: {
		'jquery.alpha': {
			deps: ['jquery'],
			exports: 'jQuery.fn.alpha'
		},
		'jquery.beta': {
			deps: ['jquery'],
			exports: 'jQuery.fn.beta'
		},
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		'underscore': {
			exports: '_'
		},
		'App': {
			deps: ['backbone', 'libs/require/text']
		}

	},
	urlArgs: "bust=" +  (new Date()).getTime()
});


define('main', ['App'], function(App){
	return {};
});