/**
 * Purpose: Get view rendered and publish global listeners
 * 
 * 1) Instantiates needed objects (collection/views)
 * 2) Publishes global listeners that views can subscribe to 
 * 
 */

define([
    "jquery",
    "backbone",
    "collection",
    "movieflix/views/moviesList",
    "movieflix/views/button"
], function($, Backbone, Collection, MoviesListView, ButtonView) {
        "use strict";
        
        var Router = Backbone.Router.extend({
        routes: {
            '': 'showMain',
        //'list-movies.html/movies/:id': 'selectMovies'
        },
              
        showMain: function(){
            this.moviesListView.render(); 
        },
        
        // selectMovies: function(id) {
        //     this.movies.selectByID(id);
        // },
         
        initialize: function(options) {
            //1. instantiate collection and listView
            this.moviesCollection = new Collection(options.movies);
            this.moviesListView = new MoviesListView({
                collection: this.moviesCollection, 
            });
            
            //2. instantiate button view and attach it to DOM element #movieFilixButton
            this.buttonView = new ButtonView({el: $('#movieFlixButtons'), collection:options.movies});
            
            this._publishCustomListeners();
            
        },
        
        //publishing custom events that any view/s can later subscribe to
        _publishCustomListeners: function() {
            //button.js is the only one triggering it as of now
            $(document).on("add-to-collection", this.onAddToCollection.bind(this));                 
            
        },
        
        onAddToCollection: function(e, data) { //e = event, data = passed from the caller, i.e. button.js in our case
            console.log("custom-event triggered: 'add-to-collection'");
            $(".form-control").val("");
            this.moviesCollection.add(data);
        },

        
    });
    return Router;    
});