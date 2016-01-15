// // COLLECTION 
// //-------------
// define([
//     "backbone",
//     "movie"
// ], function(Backbone, Model) {
//     "use strict";
//     var Collection = Backbone.Collection.extend({
//         model: Model, 
        
//         initialize: function(){
//             console.log("Initialize function called on Collections!");
//         }     
//     });
    
//     return Collection;    
// });


/*
Notes:

    When using above "define" format to code this, it did not work saying "define not found" on 
    browser console when I tried to create a movie instance "movie = new Model();"
*/

var CollectionMovie = Backbone.Collection.extend({
    model: ModelMovie, 
    
    initialize: function(){
        //console.log("Initialize function called on movies collection!");
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