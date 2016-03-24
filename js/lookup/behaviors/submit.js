//create behavior for form submit event
define([
    'marionette',
    "backbone.radio",
    "backbone.syphon"
], function(Marionette, Radio, Syphon) {
    
    'use strict';
    
    var Behavior = Marionette.Behavior.extend({
        channel: Radio.channel("global"),
        events: {
            "submit": "onSubmit"
        },
        onSubmit: function(e) {
            e.preventDefault();
            this.channel.trigger("search", {"data":Syphon.serialize(this)});
        }
    })
    
    return Behavior;
});
