define([
    "backbone"
], function(Backbone){
    
    "use strict";
    
    var g_counter = 1;

    var Model = Backbone.Model.extend({
        defaults: {
            id: 0,
            title: "default",
            year: 2016,
            selected: false,
            description: "<p>Lorem ipsum dolor sit amet, vis et choro fuisset. Magna aperiri conclusionemque per te. Ut ius possit eripuit ancillae, quo ignota possit ea, eam idque labore iisque id. </p>Est falli lobortis ea, te eam veri mundi vocent. In nostrud denique moderatius eos, molestie intellegebat ei vel. In enim rebum cum.",
            rated:"",
            genre: "",
            director: "",
            writer: "",
            plot: ""
        },
        
        initialize: function(){
            //console.log("Initialize function called on movie!");
            this.set("id", g_counter);
            g_counter +=1;
        }
    });
    
    return Model;
});
