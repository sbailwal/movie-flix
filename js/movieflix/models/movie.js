define([
    "backbone"
], function(Backbone){
    "use strict";
    var ModelMovie = Backbone.Model.extend({
        defaults: {
            title: "default",
            year: 0,
            description: "empty",
            selected: false
        },
        
        initialize: function(){
            //console.log("Initialize function called on movie!");
        }
    });
    
    return ModelMovie;
});