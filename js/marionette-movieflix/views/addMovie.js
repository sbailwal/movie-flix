define([
    "marionette",
    "backbone.radio",
    "syphon"
], function(Marionette, Radio, Syphon) {
   
   "use strict";

    var View = Marionette.ItemView.extend({
        channel: Radio.channel("global"),
        el: "form.add-movie-form",
        events: {
            "submit": "onSubmit"
        },
        
        onSubmit: function(e) {
            console.log("YEAH.. on submit called");
            e.preventDefault();
            this.channel.trigger("add-movie", Backbone.Syphon.serialize(this));
        },      
    }); 
    
    return View;
});