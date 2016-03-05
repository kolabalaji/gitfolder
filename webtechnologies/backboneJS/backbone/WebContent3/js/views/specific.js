define(['jquery',
		'underscore',
        'backbone'
        ], function($,_,Backbone){

	var SpecificView = Backbone.View.extend({
	
		//Functions
		initialize: function(options) {

			//copy parameters passed to Constructor into Object
			_.extend(this, _.pick(options,'selectedValue'));
		
			//this is the content which is going to be displayed in the view..
			//we can also define seperate HTML file with specified content and load that here.. 
			var pageContent = '<div> <h1>This is '+ this.selectedValue +' page....</h1><br/>The value <strong>'+this.selectedValue+'</strong> has been passed as a parameter in the route.</div>';

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

	return SpecificView;
});
