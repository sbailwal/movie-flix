// COLLECTION 
//-------------
define([
    "backbone",
    "marionette-movieflix/models/movie"
], function(Backbone, Model) {
    "use strict";

    var Collection = Backbone.Collection.extend({
        model: Model, 
        url: '/../mock-data/movies.json',
        
        initialize: function(){
            this.on('add', function(data) {
                //console.log("Collection is silently listening: New item added");
            });
            
            this.on('sync', this.finishSync);
        },     
        
        beginSync: function() {},
        
        //select first movie by default
        finishSync: function() {
            console.log("AFTER sync: " + Date.now());
            
            if(this.length > 0){
                this.get(1).set({selected:true});       
            }
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