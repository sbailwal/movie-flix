require.config({
    paths: {
        jquery: "../bower_components/jquery/dist/jquery",
        underscore: "../bower_components/underscore/underscore",
        backbone: "../bower_components/backbone/backbone",
        model: "backbone-movieflix/models/movie",
        collection:"backbone-movieflix/collections/movies"
    }
});

//dependencies be loaded on app startup
require([
    "jquery",
    "backbone-movieflix/app"
    ], function($, App){
        
        "use strict";
        new App();
});
