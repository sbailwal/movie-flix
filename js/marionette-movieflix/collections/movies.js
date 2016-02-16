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
            this.on('sync', this.finishSync);
        },     
        
        beginSync: function() {},
        
        //select first movie by default
        finishSync: function() {
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
            this.resetSelected();
            var model = this.get(id);
            model.set({selected: true});
            return model.id;
        }
    });
    
    return Collection;    
});