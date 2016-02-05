/**
 * Purpose: Get view rendered and publish global listeners
 * 
 * 1) Instantiates needed objects (collection/views)
 * 2) Publishes global listeners that views can subscribe to 
 * 
 */

define([
    "marionette",
    "marionette-movieflix/collections/movies",
    "marionette-movieflix/views/moviesList",
    "marionette-movieflix/views/addMovie"
], function(Marionette, Collection, MoviesListView, AddFormView) {
        "use strict";
        
        var Router = Marionette.AppRouter.extend({
        routes: {
            '': 'showMain',
            //'list-movies.html/movies/:id': 'selectMovies'
        },
              
        showMain: function(){
            console.log("showmain");
            this.moviesListView.render();
            // var moviesListView = new MoviesListView({
            //     collection: this.moviesCollection, 
            // });

            //  this.rootView.getRegion("movieView").show(moviesListView);
        },
         
        initialize: function(options) {
             console.log("router initialized");
             //1. Attach listeners 
            this._attachListeners();  
            
           //2. instantiate collection
            this.moviesCollection = new Collection(options.movies);
            this.moviesListView = new MoviesListView({
                collection: this.moviesCollection, 
            });     
                  
            //3. instantiate button view and attach it to DOM element #movieFilixButton
            this.addFormView = new AddFormView({el: $('#addForm')});          
            
            //4. showing layoutview and views within region
            this.rootView = options.rootView;
            
            // //not sure why showMain is not invoked..so doing this here
            // var moviesListView = new MoviesListView({
            //     collection: this.moviesCollection, 
            // });
            // this.rootView.getRegion("movieView").show(moviesListView);
            
            console.log("router initialized");
        },
        
        _attachListeners: function() {
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