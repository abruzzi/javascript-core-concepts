var ContactView = Backbone.View.extend({
    className: 'contact-container',

    events: {
        'click .delete': 'deleteContact'
    },

    render: function(){
        var func = haml.compileHaml({
            sourceUrl: 'template/contact.haml'
        });
        var html = func({model: this.model});
        this.$el.html(html);

        return this;
    },

    deleteContact: function(event){
        this.model.destroy();
        this.remove();
    }
});
