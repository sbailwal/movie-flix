define([
    "jquery",
    "backbone",
    "movieflix/views/moviesList"
], function($, Backbone, MoviesListView) {
        "use strict";
        
        var Router = Backbone.Router.extend({
        routes: {
            '': 'showMain',
        //'list-movies.html/movies/:id': 'selectMovies'
        },
        
        
        showMain: function(){
            console.log("main function from router called! Router working");
            this.moviesListView.render(); 
        },
        
        // selectMovies: function(id) {
        //     this.movies.selectByID(id);
        // },
         
        initialize: function(options) {
            this.movies = options.movies; 
            this.moviesListView = new MoviesListView({
                collection: options.movies, 
            });
        }
    });
    return Router;    
});