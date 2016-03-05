define(['jquery',
		'underscore',
        'backbone'
        ], function($,_,Backbone){

	var FlowersView = Backbone.View.extend({
	
		//Functions
		initialize: function() {
			
			//this is the content which is going to be displayed in the view..
			//we can also define seperate HTML file with specified content and load that here.. 
			var pageContent = '<div> <h1>This is flowers page....</h1><br/>'+
									'- Click on "lilly" to trigger a navigation without making an entry in history.<br/>'+
									'- Click on "lotus" to trigger a navigation with making an entry in history.<br/>'+
									'(watch the URL hash changes for the better understanding)<br/>'+
									'<input type="button" value="lilly" id="lilly"/><input type="button" value="lotus" id="lotus"/></div>';
			
			//right content html
			this.template = _.template(pageContent);

			this.el.html(this.template());
		},

		/* Events of this view - Start */
		events: {
			'click #lilly':'triggerView',
			'click #lotus':'triggerViewViaURL'
		},
		triggerView:function(){
			this.trigger('flowerSelectedWithoutHistoryEntry','lilly');
		},		
		triggerViewViaURL:function(){
			this.trigger('flowerSelectedWithHistoryEntry','lotus');
		},		
		/* Events of this view - End */
		
		closeView: function() {
			// Close this view
			this.unbind();
			this.undelegateEvents();
		}

	});
	return FlowersView;
});