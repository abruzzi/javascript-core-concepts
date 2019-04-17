var FormView = Backbone.View.extend({
    events: {
        'click .save': 'saveContact'
    },

    render: function(){
        var func = haml.compileHaml({
            sourceUrl: 'template/form.haml'
        });

        this.$el.html(func());    
    
        return this;
    },

    gatherContactInfo: function(){
        var name = $('#name', this.el).val().trim();
        var email = $('#email', this.el).val().trim();
        var address = $('#address', this.el).val().trim();
        var phone = $('#phone', this.el).val().trim();

        return {
            name: name,
            email: email,
            address: address,
            phone: phone
        };
    },

    saveContact: function(event){
        var contact = this.gatherContactInfo(); 
        this.model.add(contact); 
    }
});
