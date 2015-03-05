require.config({
baseUrl:'js',
  paths: {
    jquery: '../../lib/jquery-1.11.1.min',
    jqueryui: 'libs/jquery-ui.min',
    jqueryi18: 'libs/jqueryi18n.min',
    underscore: 'libs/underscore',
    backbone: 'libs/backbone',
    app: 'app'
  },
  shim: {
  	underscore: {
  		exports: '_'
  	},
  	backbone: {
  		deps: ['underscore','jquery'],
  		exports: 'Backbone'
  	},
  }
 

});


require(['app'], function (){});