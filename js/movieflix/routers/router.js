//We will create two routes
//1. '/' --> triggers callback 'selectMovie'
//2. '/movies/:id' --> triggers callback 'showMain'


define([
    "jquery",
    "backbone",
    "movieflix/views/moviesList"
], function($, Backbone, MoviesListView) {
    "use strict";
    
    var Router = Backbone.Router.extend({
    routes: {
        '': 'showMain',
        'movies/:id': 'selectMovies'
    },
    
    selectMovies: function(id) {
        //console.log("select from router called! Router working!!!!");
        
        this.movies.selectByID(id); //calling select on a specific movie, to highlight the selected one
        this.moviesListView.render();
        
        this.navigate("/movies/" + id); //router can update the url in the browser to whatever we set here
        //this.navigate("/urlSetByRouter/movies/" + id);
        
        $(document.body).append("<br>(Append-not repaint) Select movie has been called ");
    },
    
    showMain: function(){
        //console.log("main function from router called! Router working");
        this.moviesListView.render(); //I commented out render call in ListView's constructor. Now our router will call that render
        $(document.body).append("Router's main function has been called ");
    },
    
    //options = all input params passed during router's initialization. E.g. as in app.js
    initialize: function(options) {
        //Funny Fact: We can change app.js to not pass "movies:movies" as input param during router's instantiation. Still we can access it here as "this.movies = movies"
        //Whatever var is created in app.js, becomes automatically available here. Funny but true
        this.movies = options.movies; 
            
        //getting the list view with movies collection in it
        //this.moviesListView = moviesListView;//this is coming from app.js, it's a var created there      
        //instead of getting, creating the list view using the movies collection
        this.moviesListView = new MoviesListView({
            el: options.el,  
            collection: options.movies
        });
        
        /*
        Chapter 4: Navigating:
        Not much idea about Navigating, hence just commenting it out. Will do it later
        Here we are extending the class listview by adding router reference to it.
        this way, our movielistview(ViewMovie class) gets the ablilty to use router functions like "this.router.navigate("movies/" + this.model.id)}"
        */
        //_.extend(this.movieListView, {router: this}); 
    }
    });
    return Router;    
});