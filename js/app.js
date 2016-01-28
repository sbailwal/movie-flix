//After adding require.js support, using define to declare dependency

define([
	"backbone",
    "collection",
    "movieflix/routers/router"
], function (Backbone, Collection, Router) {
    
    //run function is called by config.js to run the application!
    var run = function() {   
        bootMyRouter();
        console.log("Application started..");
    };
  
    //this function renders the view by instantiating router and calling Backbone.history.start
    var bootMyRouter = function(){     
        //manually creating collection of movies model
        var movies = new Collection([
            {"id":1, "title": "Funny Ninja"},
            {"id":2, "title": "Wimpy Kid"},
            {"id":3, "title": "Kung Fu Panda"},
            {"id":4, "title": "Frozen"},
            {"id":5, "title": "Snowman"},
            {"id":6, "title": "The Christmas Story"}] );

        //var data = ('../mock-data/movies.json');

        //To have router in action, 
        //now we have to tell backbone to monitor events from the url changes
        //two steps (1) instantiate router & (2)enable backbone history, or the view will not render 
        $(document).ready(function() {
            //el is passed as "options" in router's constructor where we access it saying "el: options.el"
            //var router = new Router({el: $('#movies'), movies:movies}); //instantiating router
            var router = new Router({movies:movies}); //will set el in listView itself. Not passing el here
            
            //Monitoring route changes happen by calling start() on the history API
            Backbone.history.start({ 
                
                //TODO: Jan 15, 2016: Implement pushstate later, as it requires another dependency
                //First do "npm install pushstate-server --save"
                //Second uncomment below attribute: "pushState: true" 
                //pushState: true, //newer browsers support pushState() from the HTML5 history API. It is possible to keep semantic URLS: http://xyz.com/moview/the-panda
                
                //We set the root property to /, because the Backbone.js application will be the main application.
                root: '/' //If we wanted the Backbone application only active for browsing search results, we might change the root to /search
            });
        });
    }; //end of bootMyRouter function
    
    return {run: run};
});

