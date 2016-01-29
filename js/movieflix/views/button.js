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
        
        addMovie: function(e) {
            e.preventDefault();
            console.log("UI blur event triggered. Data: " + e.target.value);
            
            //triggering custom event that was published by App's initialize
            $(document).trigger("add-to-collection", e.target.value);
        },      
    }); 
    
    return View;
});

