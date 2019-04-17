module("todo model", {
    setup: function(){
        this.todo = new Todo({});
    },

    teardown: function(){
        this.todo.destroy();
    }
});

test("default attributes", function(){
    equal(this.todo.get('name'), 'todo');
    equal(this.todo.get('description'), 'typein to add a new todo');
    equal(this.todo.get('priority'), 0);
});

test("validate when set value", function(){
    this.todo.set('priority', -1);
    equal(this.todo.get('priority'), 0, "priority shouldn' be set when negative");

    this.todo.set('description', "");
    equal(this.todo.get('description'), "typein to add a new todo", "description shouldn't be set when empty");

    this.todo.set('priority', 3);
    equal(this.todo.get('priority'), 3);

    this.todo.set('description', "description");
    equal(this.todo.get('description'), "description");
});

