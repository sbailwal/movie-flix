/**
 * Purpose is to instantiate "Router" and pass an array(static data) to it.
 */

define([
	"marionette",
    "backbone.radio",
    "marionette-movieflix/collections/movies",
    "marionette-movieflix/views/moviesList",
    "marionette-movieflix/views/addMovie",
    "marionette-movieflix/views/detail",
    "marionette-movieflix/views/layout" 
], function (Marionette, Radio, Collection, MoviesListView, AddFormView, DetailView, RootLayoutView) {     
        "use strict";

        //creating a marionette application 
        var App = Marionette.Application.extend({
            channel: Radio.channel("global"),
            
            initialize: function(){
                console.log("App Initialization");    

                // handle UI events
                this.channel.on("add-movie", this._onAddMovie.bind(this));
                this.channel.on("display-detail",  this._displayDetailView.bind(this));
                 
                //instantiate and fetching movielist so that it's ready to be used
                this.moviesCollection = new Collection();
                this.moviesCollection.fetch();

            }, //end initialize
            
            onStart: function (options) {
                console.log('App: onstart');
                
                this.rootView = new RootLayoutView();
                this.rootView.render();
                 
                this.rootView.movieListRegion.show(new MoviesListView({
                    collection: this.moviesCollection, 
                })); 
 
                 //instantiate and anchor it to an element in the DOM
                new AddFormView();
                //this.rootView.movieAddRegion.show(new AddFormView()); //WHY? CAN'T DO THIS, COMPLAINS AS IT'S TEMPLATE-LESS VIEW??
                   
                //Not using router as of now
                // new Router({movies:movies});        
                // if(Backbone.history){ Backbone.history.start(); }      
            },
            
            _onAddMovie: function(data) { //e = event, data = passed from the caller, i.e. html-element.js in our case
                $(".form-control").val("");
                this.moviesCollection.add(data); //id attribute handled by the model
                
                //set newly added movie as selected on UI
                this.moviesCollection.selectByID(this.moviesCollection.last().get("id")); 
            },
            
            _displayDetailView: function(data) {
                this.rootView.movieDetailRegion.show(new DetailView({
                    model:data
                }));       
            }            
        });
        return App;
});
