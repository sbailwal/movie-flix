define([
    "marionette",
    "backbone.radio",
    "syphon"
], function(Marionette, Radio, Syphon) {
   
   "use strict";

    var View = Marionette.ItemView.extend({
        channel: Radio.channel("global"),
        el: '.form', 
        template: false,
        events: {
          "submit": "onSubmit"  
        },
        
        onSubmit: function(e){
            e.preventDefault();
            this.channel.trigger("submit", Syphon.serialize(this));    
        }
    }); 
    return View;
});
