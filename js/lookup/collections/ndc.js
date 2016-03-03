define([
    "backbone"
    ], function (Backbone) {

	"use strict";

	var Model = Backbone.Model.extend({
        defaults: {
            code: "",
            strength: "",
            unit: "",
            rxOTC: "",
            name: "",
            genericName: "",
            HIVInd: "",
            ndcFDA: "",
            endDt: ""
        }
    });

	var Collection = Backbone.Collection.extend({
        model: Model,
        url: "/../mock-data/ndc.json",

        initialize: function(){
        	var promise = this.fetch();
        	promise.done(this.finishSync); //if success
        	promise.fail(this.failedSync);
        },

        finishSync: function () { //with promise get diff params.. check it out
            console.log("Data fetch worked ");
        },

        failedSync: function () {
            console.error("Data fetch failed");
        }
	});
	return Collection;
});
