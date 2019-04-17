require.config({
    baseUrl: 'lib/'
    paths: {
        "jquery": "jquery-1.7.2",
        "underscore": "underscore-1.1.0",
        "backbone": "backbone-1.2.0"
    }
});

require(["jquery", "underscore", "backbone"], function ($, _, backbone) {
    $(document).ready(function(){
        var container = $("#content");
        //
    });
});

var templates_map = {
    "template_id": "path-of-the-template" 
}

require.config({
    baseUrl: 'templates/',
    paths: templates_map
});

var templates = []
for(var id in templates_map){
    templates.push(id);        
}

require(templates, function(){
    var tempaltes = arguments;
    //generate tempalate placeholder
})
