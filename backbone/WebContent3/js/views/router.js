define(['jquery', 
        'backbone',
		'views/flowers',
		'views/animals',
		'views/specific'
        ], function($,Backbone,FlowersView,AnimalsView,SpecificView){

	//Router is a backbone object which will be triggered and will be active all the time once you set backbone.history.start
	var Router = Backbone.Router.extend({
     
		initialize:function(){
			//right side views..
			this.flowersView = null;
			this.animalsView = null;
		},
		
		//Routes
		routes: {
			//default route
			'':'LoadDefault',
			
			//exactly matches '#flowers'
			'flowers':'LoadFlowersPage',
			
			//exactly matches '#animals'
			'animals':'LoadAnimalsPage',
			
			//matches all '#menu/:values' and the 'values' will be passed as a parameter to the function
			'menu/:selectedValue':'LoadSelectedPage'
		},
		
		LoadDefault:function(){
			//this is the content which is going to be displayed in the startup page..
			$('#content').html('<h1>  - This is an example of single page application. <br/><br/>'+
			' - This right side content will be a seperate view. <br/><br/>' +
			' - Only this right side view will be changed when we navigate to next page using links on left pane. <br/></h1>');
		},
		LoadFlowersPage:function(){		
			if(this.showView){
				alert('Closing this view before navigating to next view');
				this.showView.closeView();
			}			
			//initializing the right side view and passing objects to the view
			this.showView = new FlowersView({	
				el:$('#content')
			});
			//binding events of the view to the Router
			this.showView.bind('flowerSelectedWithoutHistoryEntry',this.LoadSelectedPage,this);
			this.showView.bind('flowerSelectedWithHistoryEntry',this.TriggerSelectedPage,this);
		},
		LoadAnimalsPage:function(){
			if(this.showView){
				alert('Closing this view before navigating to next view');
				this.showView.closeView();
			}
			this.showView = new AnimalsView({	
				el:$('#content')
			});
		},
		LoadSelectedPage:function(id){
		
			if(this.showView){
				alert('Closing this view before navigating to next view');
				this.showView.closeView();
			}
			
			//sending the value from the route to the view as an object
			this.showView = new SpecificView({	
				el:$('#content'),
				selectedValue:id
			});
		},
		TriggerSelectedPage:function(id){
			//triggering a navigation
			//trigger:true option will enable the route and execute it.
			this.navigate('menu/'+id,{trigger: true});
		}
		
		});
	return Router;

});