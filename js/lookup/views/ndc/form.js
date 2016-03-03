define([
    "marionette",
    "backbone.radio",
    "syphon"
], function(Marionette, Radio, Syphon) {

   "use strict";

    var View = Marionette.ItemView.extend({
        channel: Radio.channel("global"),
        tagName: "form",
        className: "well well-sm",

        template: _.template("<div class='form-group'><label for='code'>National Drug Code</label><input type='text' class='form-control' name='code'></div><div class='form-group'><label for='name'>Trade Name</label><input type='text' class='form-control' name='name'></div><div class='form-group'><label for='genericName'>Generic Name</label><input type='text' class='form-control' name='genericName'></div><span class='input-group-btn'><input type='submit' class='btn action-button' value='Search'></span>"),

        events: {
            "submit": "onSubmit"
        },

        onSubmit: function(e) {
            e.preventDefault();
            this.channel.trigger("search", {"data":Syphon.serialize(this)});
        }
    });

    return View;
});
