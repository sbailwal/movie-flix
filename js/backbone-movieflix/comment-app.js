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
            {"id":1, 
                "title": "Funny Ninja", 
                "year": "2010", 
                "description": "<p>An epic tale of a boy who turns into a funny ninja. Learning his way through the adventurous valley in China, he encountes a brave master who would now change his life...</p>"},
            {"id":2, 
                "title": "Wimpy Kid", 
                "year":"2008", 
                "description":"<p>Lorem ipsum dolor sit amet, vis et choro fuisset. Magna aperiri conclusionemque per te. Ut ius possit eripuit ancillae, quo ignota possit ea, eam idque labore iisque id. Vide nobis in pro, melius platonem mnesarchum usu te. Nibh nominati sed cu. Id nec periculis laboramus, ex mei alii adipiscing.</p>Est falli lobortis ea, te eam veri mundi vocent. In nostrud denique moderatius eos, molestie intellegebat ei vel. In enim rebum cum. At iusto altera veritus qui, liber vulputate sententiae ea sit. In fastidii quaestio sed, quis diceret epicuri at mei, eum quod noluisse no."},
            {"id":3, 
                "title": "Kung Fu Panda",
                "year":"2000", 
                "description":"<p>Lorem ipsum dolor sit amet, vis et choro fuisset. Magna aperiri conclusionemque per te. Ut ius possit eripuit ancillae, quo ignota possit ea, eam idque labore iisque id.</p><p>Vide nobis in pro, melius platonem mnesarchum usu te. Nibh nominati sed cu. Id nec periculis laboramus, ex mei alii adipiscing.</p>"},                
            {"id":4,    
                "title": "Frozen",
                "year":"2011", 
                "description":"<p>Lorem ipsum dolor sit amet, vis et choro fuisset. Magna aperiri conclusionemque per te. Ut ius possit eripuit ancillae, quo ignota possit ea, eam idque labore iisque id. Vide nobis in pro, melius platonem mnesarchum usu te. Nibh nominati sed cu. Id nec periculis laboramus, ex mei alii adipiscing.</p>"},
            {"id":5, 
                "title": "Snowman",
                "year":"1956", 
                "description":"<p>Lorem ipsum dolor sit amet, vis et choro fuisset. Magna aperiri conclusionemque per te. Ut ius possit eripuit ancillae, quo ignota possit ea, eam idque labore iisque id. Vide nobis in pro, melius platonem mnesarchum usu te. Nibh nominati sed cu. Id nec periculis laboramus, ex mei alii adipiscing.</p>"},
            {"id":6, 
                "title": "The Christmas Story",
                "year":"1945", 
                "description":"<p>Lorem ipsum dolor sit amet, vis et choro fuisset. Magna aperiri conclusionemque per te. Ut ius possit eripuit ancillae, quo ignota possit ea, eam idque labore iisque id. Vide nobis in pro, melius platonem mnesarchum usu te. Nibh nominati sed cu. Id nec periculis laboramus, ex mei alii adipiscing.</p>"}
            ] );

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