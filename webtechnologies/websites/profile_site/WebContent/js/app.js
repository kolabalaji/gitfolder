
$(document).ready(function(){
	
	$.getJSON("people.json",function(data){
		$.each(data.people,function(){
			alert("balaji");
			
			$("ul").append("<li>"+this['name']+"</li><li>"+this['online']+"</li>");
		});		
		
	$("p").append("<h1>Balaji </h1>");
		
	});
	
	
});



//ajax function
/*var xmlhttp = new XMLHttpRequest();
       var json;
       alert("ajax call");
       xmlhttp.onreadystatechange=function(){
    	 if(xmlhttp.readyState===4&&xmlhttp.status===200){
    		 json=JSON.parse(xmlhttp.responseText);
    		 console.log(json);
    		 console.log(json.name);
    		 console.log(json.people[0]);
    		 
    	 }  
       };
xmlhttp.open('GET','people.json',true);
xmlhttp.send();*/





























/*$(document).ready(function() {              
    $('#subbuttom').click(function(event) { 
        var username=$('#txtName').val();
        $.get('DynamicHTML5WebProjectServlet',{user:username},function(responseText) {
            $('#welcometext').text(responseText);        
        });
    });
});
alert("balaji.kola");
var jqxhr = $.ajax("http://localhost:8888/SreeGanesh/html/Login").done(function() {
	alert("success"+jqxhr);
}).fail(function() {
	alert("error");
}).always(function() {
	alert("complete");
});
// Perform other work here ...
// Set another completion function for the request above
jqxhr.always(function() {
	alert("second complete");
});

alert("balaji.kola");

/*
 * var Sidebar = Backbone.Model.extend({ promptColor : function() { var cssColor =
 * prompt("Please enter a CSS color:"); this.set({ color : cssColor }); } });
 * 
 * window.sidebar = new Sidebar; sidebar.on('change:color', function(model,
 * color) { $('#header').html(); $('#sidebar').css({ background : color }); });
 * 
 * sidebar.set({ color : 'white' }); sidebar.promptColor();
 * 
 * var collection = new Backbone.Collection([ { name : "Tim", age : 5 }, { name :
 * "Ida", age : 26 }, { name : "Rob", age : 55 } ]);
 * 
 * alert(JSON.stringify(collection));
 * 
 * var Todo = Backbone.Model.extend({
 * 
 * defaults : { title : 'balaji', completed : false },
 * 
 * initiliaze : function() { console.log("this method is initiaze" + todo);
 * this.on('change', function() { console.log("model as been changed"); }) }
 * 
 * });
 * 
 * var todo1 = new Todo(); console.log(JSON.stringify(todo1));
 * 
 * todo1.set('title', 'balu loves suzi'); todo1.set('completed', 'false');
 * 
 * console.log(todo1.get('title') + "get called");
 * 
 * console.log(todo1.get('completed'));
 * 
 * var todo2 = new Todo({ title : "Qayamat Qayamat", completed : true
 * 
 * });
 * 
 * console.log(JSON.stringify(todo2));
 *  // overriding all default values in todo
 * 
 * var todo3 = new Todo({ title : "Balaji is overriden the defaults", completed :
 * false
 * 
 * });
 * 
 * console.log(JSON.stringify(todo3)); var com_data = todo3.toJSON();
 * console.log(com_data + "model complete data" + todo3.toJSON());
 * console.log(todo3.get('title') + "balaji");
 * console.log(todo3.get('completed')); console.log(todo2.get('title'));
 * console.log(todo2.get('title'));
 *  // view
 * 
 * var TodoView = Backbone.View.extend({ tagName : 'li', // Cache the template
 * function for a single item. todoTpl : _.template("An example template"),
 * events : { 'dblclick label' : 'edit', 'keypress .edit' : 'updateOnEnter',
 * 'blur .edit' : 'close' }, // Rerender the titles of the todo item. render :
 * function() { this.$el.html(this.todoTpl(this.model.toJSON())); this.input =
 * this.$('.edit'); return this; }, edit : function() { // executed when todo
 * label is double-clicked }, close : function() { // executed when todo loses
 * focus }, updateOnEnter : function(e) { // executed on each keypress when in
 * todo edit mode, // but we'll wait // for enter to get in action } }); var
 * todoView = new TodoView(); // log reference to a DOM element that corresponds
 * to the view instance console.log(todoView.el); // logs <li></li>
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * var Todos = new Backbone.Collection();
 * 
 * Todos.add([ { title: 'go to Belgium.', completed: false }, { title: 'go to
 * China.', completed: false }, { title: 'go to Austria.', completed: true } ]);
 * 
 * //iterate over models in the collection Todos.forEach(function(model) {
 * console.log(model.get('title')); });
 * 
 * 
 * //sort collection var sortedByAlphabet = Todos.sortBy(function (todo) {
 * return todo.get("title").toLowerCase(); }); console.log("- Now sorted: ");
 * sortedByAlphabet.forEach(function(model){ console.log(model.get('title'));
 * });
 * 
 * 
 * var View = Backbone.View.extend({ el: '#todo', // bind to DOM event using
 * events property events: { 'click [type="checkbox"]': 'clicked', },
 * initialize: function () { //bind to DOM event using jQuery
 * this.$el.click(this.jqueryClicked); // bind to API event this.on('apiEvent',
 * this.callback); }, // 'this' is view clicked: function(event) {
 * console.log("events handler for " + this.el.outerHTML);
 * this.trigger('apiEvent', event.type); }, // 'this' is handling DOM element
 * jqueryClicked: function(event) { console.log("jQuery handler for " +
 * this.outerHTML); }, callback: function(eventType) { console.log("event type
 * was " + eventType); } }); var view = new View();
 */