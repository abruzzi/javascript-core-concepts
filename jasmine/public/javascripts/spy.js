var Database = function(options){
    this.config = options;
    this.fetch = function(id){
        //retrive data from database
    };

    this.sync = function(data){
        //do the real work here
    };
}

var Item = function(db, options){
    this.id = options.id;
    this.name = options.name;
    this.db = db;

    this.validate = function(){
        //do validation 
    };

    this.save = function(data){
        this.validate();
        this.db.sync(data); 
    };
}

var WordCorrector = function(strategy){
    this.strategy = strategy;
};

WordCorrector.dict = function(){
    //build the directory here for corrector
}

WordCorrector.prototype.correct = function(word){
    var dict = this.dict;
    if(!this.strategy){
        throw("no strategy specificed");
    }

    return this.strategy(word, dict);
}

var WordController = function(corrector){
    this.corrector = corrector;
};

WordController.prototype.doGet = function(request, response){
    //
}

WordController.prototype.doPost = function(request, response){
    var header = request.header();
    var word = header.get('word');

    var result = this.corrector.correct(word);

    response.set('word', result);
}

function getContactById(id, callback){
    $.ajax({
        url: '/contacts/'+id, 
        type: 'GET',
        success: callback,
        error: function(data){
            console.dir(data);
        }
    });
}
