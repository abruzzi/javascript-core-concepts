describe("contact model", function(){
    var contact;
    beforeEach(function(){
        contact = new Contact();
    });

    it("should have default settings", function(){
        expect(contact.get('name')).toEqual('unknown');
        expect(contact.get('email')).toEqual('user@domain.com');
        expect(contact.get('address')).toEqual('123 victoria st');
        expect(contact.get('phone')).toEqual('009006003');
    });

    it("should validate negative age and empty phone", function(){
        contact.set('name', '');
        expect(contact.get('name')).toEqual('unknown');

        contact.set('phone', '');
        expect(contact.get('phone')).toEqual('009006003');
    });

    it("should save updated values", function(){
        contact.set('name', 'juntao');
        expect(contact.get('name')).toEqual('juntao');
    });
});
