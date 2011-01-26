var Todo = Backbone.Model.extend({
	url: 'http://jrbackbone.heroku.com/todos'
});

var TodoStore = Backbone.Collection.extend({
  model: Todo,
    url: 'http://jrbackbone.heroku.com/todos'
});

var todos = new TodoStore;

todos.fetch({
	success: function(model, response){
		alert("success");
	}, 
	error: function(model,response){
		alert("error")
	}	
});

var todo = new Todo({
	content: "A test todo from Backbone"
})

todo.save();