//function declarations
function func(){
    //...
}

//function expression
(function func(){
    //...
}());

var module_1 = (function(){
    var _version_ = "3.1415926";

    return {
        getVersion :  function(){
            return _version_;
        }
    }
})();

var module_2 = (function(){
    var _version_ = "3.1415927";

    return {
        getVersion :  function(){
            return _version_;
        }
    }
})();

var module_3 = (function(){
    var mod = {};
    mod.method = function(){
        console.log("method"); 
    };

    return mod;
})();

var module_3_ext = (function(mod){
    mod.method_ext = function(){
        console.log("method_ext"); 
    };

    return mod;
})(module_3);

var module_3_ext_async = (function(mod){

})(module_3 || {});

module_3_ext.method();
module_3_ext.method_ext();

(function(implementation){
    console.log(implementation.getVersion());
})(module_1);

(function(implementation){
    console.log(implementation.getVersion());
})(module_2);

//Asynchronous Module Definition (AMD)
//
require([module], callback);
