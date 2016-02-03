// COLLECTION 
//-------------
define([
    "backbone",
    "marionette-movieflix/models/movie"
], function(Backbone, Model) {
    "use strict";

    var Collection = Backbone.Collection.extend({
        model: Model, 
        
        initialize: function(){
            //listening to when an item is added to this collection
            this.on('add', function(data) { //this.on('update', function(data)
                console.log("Collection is silently listening: New item added");
            });
         },     
        
        //unselect all models
        resetSelected: function() {
            this.each(function(model) {
                model.set({selected: false});
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
    
    return Collection;    
});