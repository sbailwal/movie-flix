define([
    "marionette",
    "backbone.radio",
    "syphon"
], function(Marionette, Radio, Syphon) {
   
   "use strict";

    var View = Marionette.ItemView.extend({
        channel: Radio.channel("global"),
        tagName: 'form', 
        className: 'well well-sm',
        //el: "form.add-movie-form",
        
        template: _.template('<div class="form-group"><label for="title">Name</label><input type="text" class="form-control" name="title" placeholder="Name of the movie" required></div><div class="form-group"><label for="description">Synopsis</label><textarea class="form-control" name="description" rows="3" placeholder="Lorem ipsum dolor sit amet, vis et choro fuisset"></textarea></div><div class="form-group"><label for="year">Released Year</label><select class="form-control" name="year"><option>2016</option><option>2015</option><option>2014</option><option>2013</option><option>2012</option><option>2011</option><option>2010</option></select></div><span class="input-group-btn"><input type="submit" class="btn action-button" value="Add It Now"></span>'),
        
        events: {
            "submit": "onSubmit"
        },

        onSubmit: function(e) {
            e.preventDefault();
            this.channel.trigger("add-movie", {"data":Syphon.serialize(this)});
        }
    }); 
  
    return View;
});
