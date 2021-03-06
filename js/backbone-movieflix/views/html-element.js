define([
    "underscore", 
    "backbone",
    "collection"
], function(_, Backbone, collection) {
   
   "use strict";

    var View = Backbone.View.extend({

        events: {
            //events: blur, change, focus, input
            "blur .add-movie": 'addMovie'
        },
        
        //triggering custom event that was published by router
        addMovie: function(e) {
            e.preventDefault();

            if(e.target.value.trim()!="") { //if(e.target.value)
                console.log("UI blur: Triggering custom event 'add-to-collection' with Data= " + e.target.value);
                $(document).trigger("add-to-collection", e.target.value);
            }
        },      
    }); 
    
    return View;
});