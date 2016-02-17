define([
	"marionette",
    "backbone.radio",    
    "marionette-movieflix/routers/router",
    "marionette-movieflix/views/layout" 
], function (Marionette, Radio, Router, RootLayoutView) {     
        "use strict";

        var App = Marionette.Application.extend({
            channel: Radio.channel("global"),
            
            initialize: function(){
                new Router;  
                if(Backbone.history){ Backbone.history.start(); } 
                
                // console.log("App Initialization");    
                // handle UI events
                // this.channel.on("add-movie", this._onAddMovie.bind(this));
                // this.channel.on("display-detail",  this._displayDetailView.bind(this));
            }, 
            
            onStart: function () {
                console.log('App: onstart');
                           
                this.rootView = new RootLayoutView();
                this.rootView.render();
            }          
        });
        return App;
});
