define([
    "marionette",
    "marionette-movieflix/collections/movies",
    "marionette-movieflix/views/moviesList",
    "marionette-movieflix/views/addMovie",
    "marionette-movieflix/views/detail"
], function(Marionette, Collection, MoviesListView, AddFormView, DetailView) {
        "use strict";
        
        var Router = Backbone.Router.extend({
            
        routes: {
            'movies/:id': 'selectMovie',
            //"*actions": "defaultRoute",
            //'': 'showMain',
            
        },
              
        showMain: function(){
            console.log("Router: showMain");
            //this.moviesListView.render();
            // var moviesListView = new MoviesListView({
            //     collection: this.moviesCollection, 
            // });

            //  this.rootView.getRegion("movieView").show(moviesListView);
        },
         
        selectMovie: function(id) {
            console.log("Router: selectMovies");
            //this.movies.selectByID(id); //calling select on a specific movie, to highlight the selected one
            //this.moviesListView.render(); //this was painiting list twice

            this.navigate("/movies/" + id); //router can update the url in the browser to whatever we set here
            //this.navigate("/urlSetByRouter/movies/" + id);
            
           // $(document.body).append("<br> Select movie has been called ");
        },

    });
    return Router;    
});
