describe("contact view", function(){
    var view;

    beforeEach(function(){
        var contact = new Contact({
            name: 'sara',
            email: 'sara.sun@gmail.com',
            address: 'zhangba 4st rd',
            phone: '113115117'
        });

        view = new ContactView({model: contact}).render();
    });

    it("should have basic information fields", function(){ 
        expect($('.name', view.el)).toExist();
    });

    it("should have control buttons", function(){
        expect($('.delete', view.el)).toExist();
    });

    it("should remove self if I click the delete button", function(){
        $('.delete', view.el).trigger('click');
        expect($('.contact-container', view.el)).not.toExist()
    })
})
