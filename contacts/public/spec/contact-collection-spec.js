describe("contact collection", function(){
    var contacts;
    beforeEach(function(){
        contacts = new Contacts();
    });

    afterEach(function(){
        contacts.reset(); 
        window.localStorage.clear();
    });

    it("should save and retrive data locally", function(){
        contacts.add([{
            name: 'juntao',
            age: 27
        },{
            name: 'jack',
            age: 27,
            address: '678 victoria vic'
        }]);
        
        expect(contacts.length).toEqual(2);
        expect(contacts.first().get('name')).toEqual('juntao');
    });

    it("should trigger add action", function(){
        var callback = jasmine.createSpy();

        contacts.bind('add', callback);
        contacts.add({
            name: 'juntao',
            age: 27
        });

        expect(callback).toHaveBeenCalled();
    });
});
