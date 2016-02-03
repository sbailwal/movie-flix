/**
 * Purpose is to instantiate "Router" and pass an array(static data) to it.
 */

define([
    "backbone",
	"marionette",
    "marionette-movieflix/routers/router",
    
], function (Backbone, Marionette, Router) {
        
        "use strict";
        
        //creating a marionette application 
        var App = new Marionette.Application();
        
        App.on("initialize:after", function(){
           console.log("Marionette Application has been initialized"); 
        });
        
        //application events: before:start, start
        App.on("start", function(options){
           if(Backbone.history){
               Backbone.history.start();
           } 
        });
        
        return App;
        
        // //initialize
        // var App = function() {
        //     this.initialize();
        // };
        
        // //prototype
        // App.prototype = {
        //     initialize: function() {
        //         console.log("Application initialized..");
        
        //         //view is renderd via router
        //         var router = new Router({movies:this.movies});
                                
        //         //TODO: Does not work: Monitoring route changes happen by calling start() on the history API
        //         // $(document).ready(function() {       
        //             // Backbone.history.start({root: '/'}); 
        //         // }); 
        //     }, //end prototype initialize
                        
        //     //STATIC DATA: Used during Router instantiation
        //     movies: [
        //         {"id":1, 
        //             "title": "Funny Ninja", 
        //             "year": "2010", 
        //             "description": "<p>An epic tale of a boy who turns into a funny ninja. Limping his way through the adventurous valley in China, he encountes a brave master who would now change his life...</p>"},
        //         {"id":2, 
        //             "title": "Wimpy Kid", 
        //             "year":"2008", 
        //             "description":"<p>Lorem ipsum dolor sit amet, vis et choro fuisset. Magna aperiri conclusionemque per te. Ut ius possit eripuit ancillae, quo ignota possit ea, eam idque labore iisque id. Vide nobis in pro, melius platonem mnesarchum usu te. Nibh nominati sed cu. Id nec periculis laboramus, ex mei alii adipiscing.</p>Est falli lobortis ea, te eam veri mundi vocent. In nostrud denique moderatius eos, molestie intellegebat ei vel. In enim rebum cum. At iusto altera veritus qui, liber vulputate sententiae ea sit. In fastidii quaestio sed, quis diceret epicuri at mei, eum quod noluisse no."},
        //         {"id":3, 
        //             "title": "Kung Fu Panda",
        //             "year":"2000", 
        //             "description":"<p>Lorem ipsum dolor sit amet, vis et choro fuisset. Magna aperiri conclusionemque per te. Ut ius possit eripuit ancillae, quo ignota possit ea, eam idque labore iisque id.</p><p>Vide nobis in pro, melius platonem mnesarchum usu te. Nibh nominati sed cu. Id nec periculis laboramus, ex mei alii adipiscing.</p>"},                
        //         {"id":4,    
        //             "title": "Frozen",
        //             "year":"2011", 
        //             "description":"<p>Lorem ipsum dolor sit amet, vis et choro fuisset. Magna aperiri conclusionemque per te. Ut ius possit eripuit ancillae, quo ignota possit ea, eam idque labore iisque id. Vide nobis in pro, melius platonem mnesarchum usu te. Nibh nominati sed cu. Id nec periculis laboramus, ex mei alii adipiscing.</p>"},
        //         {"id":5, 
        //             "title": "Snowman",
        //             "year":"1956", 
        //             "description":"<p>Lorem ipsum dolor sit amet, vis et choro fuisset.<p> <p>Magna aperiri conclusionemque per te. Ut ius possit eripuit ancillae, quo ignota possit ea, eam idque labore iisque id.</p> <p> Vide nobis in pro, melius platonem mnesarchum usu te. Nibh nominati sed cu. Id nec periculis laboramus, ex mei alii adipiscing.</p>"},
        //         {"id":6, 
        //             "title": "The Christmas Story",
        //             "year":"1945", 
        //             "description":"<p>Lorem ipsum dolor sit amet, vis et choro fuisset. </p><p>Magna aperiri conclusionemque per te. Ut ius possit eripuit ancillae, quo ignota possit ea, eam idque labore iisque id. Vide nobis in pro, melius platonem mnesarchum usu te.</p>"}
        //     ]
            
        // }; //end prototype
    
    
    //return App;
});

