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
        el: "#layout-lookup",
        template: false,
        regions: {
            form: "#form",
            result: "#result"
            },

        initialize: function(){
            this.channel.on("search", this._search.bind(this));
        },
        
        //always use onBeforeRender for rootLayoutView. Any other view, use onBeforeShow
        onBeforeRender: function () {
			this.showChildView("form", new FormView());
		},

        _search: function(options) {
            $(".form-control").val("");
            console.log("This search has been called: " + JSON.stringify(options.data));
            
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
