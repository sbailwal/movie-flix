define([
    "jquery",
    "backbone",
    "movieflix/views/moviesList",
    "movieflix/views/button"
], function($, Backbone, MoviesListView, ButtonView) {
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
            this.moviesListView = new MoviesListView({
                collection: options.movies, 
            });
            
            //instantiate button.js view for text and button and register to click events
            this.buttonView = new ButtonView({el: $('#movieFlixButtons'), collection:options.movies});
        },
        
    });
    return Router;    
});