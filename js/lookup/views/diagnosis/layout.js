define([
    "marionette",
    "backbone.radio",
	"lookup/collections/diagnosis",
	"lookup/views/diagnosis/form",
    "lookup/views/diagnosis/result",
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
            
            this.collection = new Collection();
			this.promise = this.collection.fetch();
			this.promise.done(this.onCollectionLoaded.bind(this));
			this.promise.fail(this.onCollectionLoadFail.bind(this));
		},
		onCollectionLoaded: function() {
            //create form here by extracting the "filters" from collection
            this._generateForm(this.collection.pluck("filters"));
			//check if resultview exists
			if (!this.resultView) {
				this.resultView = new ResultView({
					collection: this.collection
				})
			}
			this.result.show(this.resultView);
		},
		onCollectionLoadFail: function() {
			console.error(arguments); //arguments array contains everything passed in, always available
		},
        _generateForm: function(options) {
            console.log("Pluck function" + JSON.stringify(options.data));
        },
        //root layout view must call it's child view onRender, as template creates DOM elements here
        onRender: function() {
			console.log("Root layout view renders template/DOM here:" + $("#form").length);
			//this.showChildView("form", new FormView());
		},
        
        _search: function(options) {
            this.$(".form-control").val("");
            console.log("User entered data: " + JSON.stringify(options.data));
            
            this.promise = this.collection.fetch();
            this.showChildView("result", new ResultView({
                collection: this.collection
            }));            
        }, 
	});

    return Layout;
});
