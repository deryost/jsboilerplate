require.config({
	baseUrl: "js/libs",
	enforceDefine: true,
	paths: {
		app: '../app',
		templates: '../../templates'/*,
		jquery: 'jquery-1.9.1',
		'jquery.alpha': 'jquery.alpha',
		'jquery.beta': 'jquery.beta',
		underscore: 'underscore',
		backbone: 'backbone'*/
	},
	shim: {
		'modernizr': {
			exports: 'Modernizr'
		},
		'jquery/jquery.alpha': {
			deps: ['jquery'],
			exports: 'jQuery.fn.alpha'
		},
		'jquery/jquery.beta': {
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
		'app/App': {
			deps: ['backbone', 'text', 'mustache']
		}

	},
	urlArgs: "bust=" +  (new Date()).getTime()
});


define(['modernizr', 'app/App'], function(Modernizr, App){
	//alert('Modernizr:' + Modernizr);
	return {};
});