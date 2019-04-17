var ContactsView = Backbone.View.extend({
    initialize: function(){
        this.renderForm();
        this.render();
        this.collection.on("add", this.render, this);
    },

    renderForm: function(){
        var form = new FormView({
            model: this.collection
        });
        this.$el.append(form.render().el);
    },

    render: function(){
        this.$el.find('.contact-container').remove();
        this.collection.each(function(item){
            this.renderContact(item);
        }, this);

        return this;
    },

    renderContact: function(item){
        var contact = new ContactView({
            model: item
        });

        this.$el.append(contact.render().el);
    }

});
