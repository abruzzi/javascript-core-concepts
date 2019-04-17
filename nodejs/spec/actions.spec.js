describe("actions", function(){
    var actions;
    var map;

    beforeEach(function(){
        actions = require('../actions.js');
        map = actions.map;
    });

    it("should have pre-defined function in map", function(){
        expect(map['/upper']).not.toBeUndefined();
        expect(map['/lower']).not.toBeUndefined();
        expect(map['/echo']).not.toBeUndefined();
        expect(map['error']).not.toBeUndefined();

        expect(map['/noexist']).toBeUndefined();
    });

    it("should return the uppercase of string", function(){
        var toupper = map['/upper'];
        var str = "hello, world";

        var mock = {
            writeHead: null,
            write: null,
            end: null
        };

        spyOn(mock, 'writeHead');

        spyOn(mock, 'write').andCallFake(function(data){
            console.log(data);
        });

        spyOn(mock, 'end');

        toupper(str, mock);

        expect(mock.write).toHaveBeenCalledWith("HELLO, WORLD");
    });
});
