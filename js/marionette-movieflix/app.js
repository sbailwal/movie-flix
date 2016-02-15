define([
	"marionette",
    "backbone.radio",    
    "marionette-movieflix/views/detail",
    "marionette-movieflix/views/layout" 
], function (Marionette, Radio, DetailView, RootLayoutView) {     
        "use strict";

        //creating a marionette application 
        var App = Marionette.Application.extend({
            channel: Radio.channel("global"),
            
            initialize: function(){
                console.log("App Initialization");    

                // handle UI events
                this.channel.on("add-movie", this._onAddMovie.bind(this));
                this.channel.on("display-detail",  this._displayDetailView.bind(this));

            }, //end initialize
            
            onStart: function (options) {
                console.log('App: onstart');
                
                this.rootView = new RootLayoutView();
                this.rootView.render();
                   
                //Not using router as of now
                // new Router({movies:movies});        
                // if(Backbone.history){ Backbone.history.start(); }      
            },
            
            _onAddMovie: function(options) {
                $(".form-control").val(""); //oops, resets data dropdown too. Will fix this later
                
                var collection = this.rootView.moviesCollection;
                collection.add(options.data); //id attribute handled by the model 
                collection.selectByID(collection.last().get("id"));  //set newly added movie as selected on UI
            },
            
            _displayDetailView: function(options) {
                this.rootView.movieDetailRegion.show(new DetailView({
                    model:options.model
                }));       
            }            
        });
        return App;
});
