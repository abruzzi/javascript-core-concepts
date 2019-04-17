describe("contacts view", function(){
    var view;
    var contacts;
    beforeEach(function(){
        contacts = new Contacts(JSON.parse(readFixtures('contacts.json')));
        view = new ContactsView({
            collection: contacts
        });
    });

    it("should have a form to add contact", function(){
        expect($('.contact-form', view.el)).toExist();
        expect($('.save', view.el)).toExist();
    });

    it("should have 3 contacts", function(){
        var contacts = $('.contact-container', view.el).size();
        expect(contacts).toEqual(3);
    });
});
