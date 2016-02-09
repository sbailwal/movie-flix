require.config({
    paths: {
        jquery: "../bower_components/jquery/dist/jquery",
        bootstrap:"../bower_components/bootstrap/dist/js/bootstrap.min",
        underscore: "../bower_components/underscore/underscore",
        backbone: "../bower_components/backbone/backbone",
        marionette:"../bower_components/backbone.marionette/lib/backbone.marionette.min",
        syphon: "../bower_components/backbone.syphon/lib/backbone.syphon"
    }
});

//dependencies be loaded on app startup
require([
    "marionette-movieflix/app"
    ], function(App){
        
        "use strict";
        console.log("config loaded");
        App.start();
});