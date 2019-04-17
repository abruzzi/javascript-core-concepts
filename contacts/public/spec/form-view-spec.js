describe("form view", function(){
    var view;
    var contacts;

    beforeEach(function(){
        contacts = new Contacts({});

        view = new FormView({
            model: contacts
        });
        view.render();
    });

    it("should have defaults fields", function(){
        expect($('#name', view.el)).toExist();
    });

    it("should add contact when click 'add' button", function(){
        spyOn(view, 'saveContact');
        view.delegateEvents();
        $('.save', view.el).click(); 
        expect(view.saveContact).toHaveBeenCalled();
    });
});
