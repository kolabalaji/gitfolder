//mainJS.js

//configuring the library files path
require.config({
	paths: {
		require: './libs/require',
		jquery: './libs/jquery',
		underscore: './libs/underscore',
		backbone: './libs/backbone',
		text: './libs/text'
	}
});

//This block contains main script that will be executed first and it will be alive throughout the app... 
require(['backbone','jquery','views/router'],
         function(Backbone,$,Router){
				//initializing Router
				var router = new Router();
				
				//it is necessary to start history to listen the URL changes i.e for navigation
				Backbone.history.start({root: "/flowers"});
			});