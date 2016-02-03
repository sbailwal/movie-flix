require.config({
    paths: {
        jquery: "../bower_components/jquery/dist/jquery",
        underscore: "../bower_components/underscore/underscore",
        backbone: "../bower_components/backbone/backbone",
        marionette:"../bower_components/backbone.marionette/lib/backbone.marionette.min",
        model: "marionette-movieflix/models/movie",
        collection:"marionette-movieflix/collections/movies",
        app: "marionette-movieflix/app"
    }
});

//dependencies be loaded on app startup
require([
    "jquery",
    'marionette',
    "app"
    ], function($, Marionette, App){
        
        "use strict";
        console.log("config loaded");
        App.start();
});