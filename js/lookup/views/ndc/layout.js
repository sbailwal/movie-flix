define([
    "marionette",
    "backbone.radio",
	"lookup/collections/ndc",
	"lookup/views/ndc/form",
    "lookup/views/ndc/result",
], function(Marionette, Radio, Collection, FormView, ResultView) {

    "use strict";

    var Layout = Marionette.LayoutView.extend({
        channel: Radio.channel("global"),
        el: "#app",
        template: _.template("<div class =\"col-xs-4\" id=\"form\"></div><div class=\"col-xs-8\" id=\"result\"></div>"),
        regions: {
            form: "#form",
            result: "#result"
            },

        initialize: function(){
            this.channel.on("search", this._search.bind(this));
        },
        
        //root layout view must call it's child view onRender, as template creates DOM elements here
        onRender: function () {
			console.log("Root layout view renders template/DOM here:" + $("#form").length);
			this.showChildView("form", new FormView());
		},

        _search: function(options) {
            this.$(".form-control").val("");
            console.log("User entered data: " + JSON.stringify(options.data));
            
            //Not the best way but just to test it works
            this.collection = new Collection();
            this.collection.fetch();
            
            this.showChildView("result", new ResultView({
                collection: this.collection
            }));         
        }, 
	});

    return Layout;
});
