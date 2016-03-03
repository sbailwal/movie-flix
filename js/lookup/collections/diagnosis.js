define([
    "backbone"
    ], function (Backbone) {

	"use strict";

	var Model = Backbone.Model.extend({
        defaults: {
            code: "",
            desc: "",
            type: "",
            cat: "",
            catDesc: "",
            benefitYr: ""
        }
    });

	var Collection = Backbone.Collection.extend({
        model: Model,
        url: "/../mock-data/diagnosis.json",

        initialize: function(){       
        //synch mostly for saving data and not helpful to check for failed retrieval  
        //this.on("sync", this.finishSync);
        
        //not capturing any failure, 404
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
