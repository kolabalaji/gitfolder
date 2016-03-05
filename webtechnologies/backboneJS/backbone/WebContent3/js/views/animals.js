define(['jquery',
		'underscore',
        'backbone'
        ], function($,_,Backbone){

	var AnimalsView = Backbone.View.extend({
	
		//Functions
		initialize: function() {
		
			//this is the content which is going to be displayed in the view..
			//we can also define seperate HTML file with specified content and load that here.. 
			var pageContent = '<div><h1> This is animals page.... </h1><br/>This page is an example for a simple route...</div>';

			//right content html
			this.template = _.template(pageContent);

			this.el.html(this.template());
		},

		/* Events of this view - Start */
		events: {
			
		},
		/* Events of this view - End */
		
		closeView: function() {
			// Close this view
			this.unbind();
			this.undelegateEvents();
		}

	});

	return AnimalsView;
});