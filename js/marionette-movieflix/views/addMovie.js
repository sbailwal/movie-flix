define([
    "marionette",
    "backbone.radio",
    "syphon"
], function(Marionette, Radio, Syphon) {
   
   "use strict";

    var View = Marionette.ItemView.extend({
        channel: Radio.channel("global"),
        el: "form.add-movie-form",
        template: false,
        
        events: {
            "submit": "onSubmit"
        },

        onSubmit: function(e) {
            e.preventDefault();
            this.channel.trigger("add-movie", Syphon.serialize(this));
        }

    }); 
    
    
    return View;
});
