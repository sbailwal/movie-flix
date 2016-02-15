//this is the root level layout view attached to application

define([
    "marionette",
    "marionette-movieflix/collections/movies",
    "marionette-movieflix/views/moviesList",
    "marionette-movieflix/views/addMovie"
], function(Marionette, Collection, MoviesListView, AddFormView) {
    
    "use strict";
    
    var Layout = Marionette.LayoutView.extend({
        el: "#movieFlixApp",
        template: false,
        regions: {
            movieListRegion: "#region-movie-list",  //"movieListView: "#movies" or ul.list-group"
            movieDetailRegion: "#region-movie-detail",
            movieAddRegion: "#region-add-form" //"form.add-movie-form"            
            },
                        
        initialize: function(){  
            console.log('RootLayoutView: initialized >>> ');
            
            //instantiate and fetching movielist so that it's ready to be used
            this.moviesCollection = new Collection();
            this.moviesCollection.fetch();
        },
        
        onBeforeRender: function() {
            console.log('RootLayoutView: onBeforeRender');

            this.movieListRegion.show(new MoviesListView({
                collection: this.moviesCollection, 
            })); 
 
            //instantiate and anchor it to an element in the DOM
            this.movieAddRegion.show(new AddFormView());
        },

        onRender: function() {
            console.log('RootLayoutView: onRender');
            // this.movieView.show(new MovieLayout());    
        },
            
        onBeforeShow: function () {
            console.log("RootLayoutView: Before Show called");
			//this.showChildView("movieListRegion", new MovieLayout(this.options));
			//this.showChildView("movieDetailRegion", new UserView(this.options));
		},
        
        onShow: function() {
            console.log("RootLayoutView: onShow called");
            //this.getRegion('movieListRegion').show(new notifyView());
        }
    });
    
    return Layout;
});
