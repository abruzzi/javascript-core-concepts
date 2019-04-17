var Todo = Backbone.Model.extend({
	defaults: {
		name: 'todo',
		description: 'typein to add a new todo',
		priority: 0
	},

    validate: function(attrs){
        if(attrs.priority < 0){
            return "priority must be positive";
        }

        if(attrs.description.length == 0){
            return "description must not be empty";
        }
    }
});

