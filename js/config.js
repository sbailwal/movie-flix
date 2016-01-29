require.config({
    paths: {
        jquery: "../bower_components/jquery/dist/jquery",
        underscore: "../bower_components/underscore/underscore",
        backbone: "../bower_components/backbone/backbone",
        model: "movieflix/models/movie",
        collection:"movieflix/collections/movies",
    }
});

//dependencies be loaded on app startup
require([
    "jquery",
    "app"
    ], function($, App){
        
        "use strict";
        new App();
});