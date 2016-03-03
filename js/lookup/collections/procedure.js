define([
    "backbone"
    ], function (Backbone) {

	"use strict";

	var Model = Backbone.Model.extend({
        defaults: {
            code: "",
            desc: "",
            type: "",
            model: "",
            benefitYr: ""
        }
    });

	var Collection = Backbone.Collection.extend({
        model: Model,
        url: "/../mock-data/procedure.json",

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
