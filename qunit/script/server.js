var WordController = function(){
    this.correct = function(url, callback){
        $.ajax({
            type: "GET",
            url: url,
            success: callback
        });
    }
}
