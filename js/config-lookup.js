require.config({
    paths: {
        jquery: "../bower_components/jquery/dist/jquery",
        bootstrap:"../bower_components/bootstrap/dist/js/bootstrap.min",
        underscore: "../bower_components/underscore/underscore",
        backbone: "../bower_components/backbone/backbone",
        marionette:"../bower_components/backbone.marionette/lib/backbone.marionette.min",
        "backbone.syphon": "../bower_components/backbone.syphon/lib/backbone.syphon",
        "backbone.radio": "../bower_components/backbone.radio/build/backbone.radio",
        "backbone.forms": "../bower_components/backbone-forms/distribution/backbone-forms",
        "dataTables": "../bower_components/datatables.net/js/jquery.dataTables"
    }
});

//dependencies be loaded on app startup
require([
    "lookup/app"
    ], function(App){
        
        "use strict";
        new App().start();
});
