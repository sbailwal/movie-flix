/*
RequireJS determines the baseUrl, which is the path from which all other
paths are computed. By default, it is set to the path provided to the data-main attribute above (minus
the file portion, of course). So in our case, the baseUrl is /js, so we have to add "../" to file path here.
*/

/*
require function takes 2 arguments:
1. an array of dependencies that need to be loaded before executing the callback function;
2. a callback function that gets executed once all the required dependencies have been loaded.

In the dependency array, we provide the path to the file we want to load relative to the baseUrl path

E.g. 1: below example loads jquery and display version number
require(["../bower_components/jquery/dist/jquery.min"], function(){
    console.log("jQuery Version: ", $.fn.jquery);
});

*/

//we can still improve our code by adding some global configuration
//adding global configuration that can be referred from all modules
require.config({
    //By default, this is set by index.html, "data-main" attribute."/js" in this case
    //if we change baseUrl to "/js/movieflix", all module path must be changed as well
    //e.g. jquery: ../../bower_component/jquery/dist/jquery
    //baseUrl: "/js/movieflix", 
    paths: {
        jquery: "../bower_components/jquery/dist/jquery",
        underscore: "../bower_components/underscore/underscore",
        backbone: "../bower_components/backbone/backbone",
        model: "../js/movieflix/models/movie",
        collection:"../js/movieflix/collections/movies"
    }
});

//now telling requireJs which dependencies must be loaded on app startup
require([
    "jquery",
    "app"
    ], function($, app){
        "use strict"; //if I use it here, then all app is in strict mode?
            
       //No need to instantiate "App" as backbone has no "Application object"
       //we just cann the run function from the app js file
        app.run();
        
        //new App();
});