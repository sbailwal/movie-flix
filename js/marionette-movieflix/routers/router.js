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
    "backbone-movieflix/views/moviesList",
    "backbone-movieflix/views/html-element"
], function($, Backbone, Collection, MoviesListView, ElementView) {
        "use strict";
        
        var Router = Backbone.Router.extend({
        routes: {
            '': 'showMain',
        //'list-movies.html/movies/:id': 'selectMovies'
        },
              
        showMain: function(){
            this.moviesListView.render(); 
        },
         
        initialize: function(options) {
            //1. instantiate collection and listView
            this.moviesCollection = new Collection(options.movies);
            this.moviesListView = new MoviesListView({
                collection: this.moviesCollection, 
            });
            
            //2. instantiate button view and attach it to DOM element #movieFilixButton
            this.elementView = new ElementView({el: $('#movieFlixButtons')});
            
            //3. publish any custom event that can be triggerd/subscribed by views later
            this._publishCustomEvent();  
        },
        
        _publishCustomEvent: function() {
            //TODO: find .bind vs .on? w.r.t $(document).on
            $(document).on("add-to-collection", this._onAddToCollection.bind(this));                 
            
        },
        
        //this adds passed item/data to the collection
        _onAddToCollection: function(e, data) { //e = event, data = passed from the caller, i.e. html-element.js in our case
            console.log("Router: custom-event triggered: 'add-to-collection': Added item to collection");
            $(".form-control").val("");
            this.moviesCollection.add({"id":(this.moviesCollection.length + 1), "title":data});
        }

    });
    return Router;    
});