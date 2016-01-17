// COLLECTION 
//-------------
define([
    "backbone",
    "model"
], function(Backbone, Model) {
    "use strict";

    var CollectionMovie = Backbone.Collection.extend({
        model: Model, 
        
        initialize: function(){
            console.log("Initialize function called on movies collection!");
        },     
        
        //unselect all models
        resetSelected: function() {
            this.each(function(model) {
                model.set({selected: false});
            //console.log("current:" + model.get('title') + " is " + model.get('selected'));
            });
        },
        
        //select a specific model, unselect all others
        selectByID: function(id) {
            //console.log("selectByID called from collection:" );
            this.resetSelected();
            var model = this.get(id);
            model.set({selected: true});
            return model.id;
        }
    });
    
    return CollectionMovie;    
});
