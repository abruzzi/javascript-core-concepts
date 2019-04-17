module("todo model", {
    setup: function(){
        this.server = sinon.fakeServer.create();
    },

    teardown: function(){
        this.server.restore();
    }
});

test("default attributes", function(){
    var controller = new WordController();
    this.server.respondWith("GET", "/correct/word/hzllo",
        [200, {"Content-Type": "application/json"},
        '["hallo", "hullo", "hello"]']);

    var callback = sinon.spy();
    controller.correct("/correct/word/hzllo", callback)

    this.server.respond();

    ok(callback.calledWith(["hallo", "hullo", "hello"]));
});

