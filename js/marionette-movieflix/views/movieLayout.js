//this is the root level layout view attached to application

define([
    "marionette",
    "backbone.radio",    
    "marionette-movieflix/collections/movies",
    "marionette-movieflix/views/moviesList",
    "marionette-movieflix/views/detail",
    "marionette-movieflix/views/addMovie"
], function(Marionette, Radio, Collection, MoviesListView, DetailView, AddFormView) {
    
    "use strict";
    
    var Layout = Marionette.LayoutView.extend({
        channel: Radio.channel("global"),
        el: "#layout-movie",
        template: false,
        regions: {
            movieListRegion: "#region-movie-list",
            movieDetailRegion: "#region-movie-detail",
            movieAddRegion: "#region-add-form"          
            },
                        
        initialize: function(){  
            this.channel.on("add-movie", this._onAddMovie.bind(this));        
            this.channel.on("delete-movie", this._onDeleteMovie.bind(this));   
            this.channel.on("display-detail",  this._displayDetailView.bind(this));
            
            //instantiate and fetch movielist so that it's ready to be used
            this.moviesCollection = new Collection();
            this.moviesCollection.fetch();
        },
            
        onBeforeShow: function () {
			this.showChildView("movieListRegion", new MoviesListView({
                collection: this.moviesCollection
            })); 
			this.showChildView("movieAddRegion", new AddFormView());
		},
        
        _onAddMovie: function(options) {
            this.$(".form-control").val(""); //oops, resets data dropdown too. Will fix this later
            
            this.moviesCollection.add(options.data); 
            this.moviesCollection.selectByID(this.moviesCollection.last().get("id"));
        },
            
        _onDeleteMovie: function(options) {
            this.moviesCollection.remove(options.model);
            
            //this is to keep the first in the list selected after each deletion
            if(this.moviesCollection.length > 0) {
                this.moviesCollection.selectByID(this.moviesCollection.first().get("id"));
            } else {
                this.getRegion("movieDetailRegion").reset();
            }
        },
        
        _displayDetailView: function(options) {
            this.showChildView("movieDetailRegion", new DetailView({
                model:options.model
            }));       
        }            
    });
    
    return Layout;
});
