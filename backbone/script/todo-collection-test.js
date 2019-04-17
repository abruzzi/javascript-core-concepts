module("todo collection", {
    setup: function(){
        this.todos = new TodoList();
    },
    teardown: function(){
        window.localStorage.clear();
        this.todos.reset();
    }
});

test("add raw type", function(){
    this.todos.add({
        name: "from todo collection"
    });

    ok(this.todos.at(0) instanceof Todo, "auto convert raw to model");
    var name = this.todos.at(0).get('name')
    equal(name, 'from todo collection');
});

test("on add action", function(){
    var spy = sinon.spy();

    this.todos.bind("add", spy);

    this.todos.add({
        name: "add a new todo"
    });

    ok(spy.called === true, "add handler is called");
});

test("save and retrive todos", function(){
    this.todos.create({
        name: 'Plan A',
        description: 'Share a session to all this afternoon',
        prority: 5
    });

    this.todos.fetch();
    equal(this.todos.length, 1, "item saved");
    equal(this.todos.at(0).get('name'), 'Plan A', "saved item is the original one");

    this.todos.at(0).save({name: 'Plan B'});
    equal(this.todos.length, 1, "item saved");

    equal(this.todos.at(0).get('name'), 'Plan B', "saved item is the same one");
});
