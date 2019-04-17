var Mediator = Mediator || function() {

    var components = {};
    
    var broadcast = function(event, args, source) {
        if (!event) {
            return;
        }
        
        args = args || [];
        console.log(["Mediator received", event, args].join(' '));

        for (var c in components) {
            if (typeof components[c]["on" + event] == "function") {
                try {
                    console.log("Mediator calling " + event + " on " + c);
                    source = source || components[c];
                    components[c]["on" + event].apply(source, args);
                } catch (err) {
                    console.log(["Mediator error.", event, args, source, err].join(' '));
                }
            }
        }
    };
    
    var addComponent = function(name, component, replaceDuplicate) {
        if (name in components) {
            if (replaceDuplicate) {
                removeComponent(name);
            } else {
                throw new Error('Mediator name conflict: ' + name);
            }
        }
        components[name] = component;
    };
    
    var removeComponent = function(name) {
        if (name in components) {
            delete components[name];
        }
    };
    
    var getComponent = function(name) {
        return components[name]; // undefined if component has not been added
    };
    
    var contains = function(name) {
        return (name in components);
    };
    
    return {
        name      : "Mediator",
        broadcast : broadcast,
        add       : addComponent,
        rem       : removeComponent,
        get       : getComponent,
        has       : contains
    };
}();


Mediator.add('TestObject', function() {

    var someNumber = 0; // sample variable
    var someString = 'another sample variable';

    return {
        onInitialize: function() {
            // this.name is automatically assigned by the Mediator
            alert(this.name + " initialized.");
        },
        onFakeEvent: function() {
            someNumber++;
            alert("Handled " + someNumber + " times!");
        },
        onSetString: function(str) {
            someString = str;
            alert('Assigned ' + someString);
        }
    }
}());

Mediator.broadcast("Initialize");                 // alerts "TestObject initialized"
Mediator.broadcast('FakeEvent');                  // alerts "Handled 1 times!" (I know, bad grammar)
Mediator.broadcast('SetString', ['test string']); // alerts "Assigned test string"
Mediator.broadcast('FakeEvent');                  // alerts "Handled 2 times!"
Mediator.broadcast('SessionStart');               // this call is safely ignored
Mediator.broadcast('Translate', ['this is also safely ignored']);
