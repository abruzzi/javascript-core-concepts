var Contact = Backbone.Model.extend({
	defaults: {
		name: 'unknown',
        email: 'user@domain.com',
        address: '123 victoria st',
        phone: '009006003'
	},

    //localStorage: new Backbone.LocalStorage('contact'),

    validate: function(attrs){
        if(attrs.name.length == 0){
            return "name can not be empty";
        }

        if(attrs.phone.length == 0){
            return "phone number should be provided";
        }
    }
});

