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

        template: _.template("<div class='form-group'><label for='code'>Diagnosis Code</label><input type='text' class='form-control' name='code'></div><div class='form-group'><label for='desc'>Description</label><input type='text' class='form-control' name='desc'></div><div class='form-group'><label for='cat'>Category</label><input type='text' class='form-control' name='cat'></div><div class='form-group'><label for='catDesc'>Category Description</label><input type='text' class='form-control' name='catDesc'></div><span class='input-group-btn'><input type='submit' class='btn action-button' value='Search'></span>"),

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
