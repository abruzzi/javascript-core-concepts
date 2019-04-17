$(document).ready(function(){
    var container = $('#contacts');

    var contacts = new Contacts();

    contacts.create({
        "name": "juntao",
        "email": "juntao.qiu@gmail.com",
        "address": "123 flinder st"
    });

    contacts.create({
        "name": "abruzzi",
        "email": "juntao.qiu@gmail.com",
        "address": "123 flinder st"
    });

    contacts.create({
        "name": "test",
        "email": "juntao.qiu@gmail.com",
        "address": "456 colliers st"
    });

    var view = new ContactsView({
        collection: contacts
    });
    
    container.append(view.el);
});
