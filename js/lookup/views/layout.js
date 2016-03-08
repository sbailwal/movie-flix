define([
    "marionette",
], function(Marionette) {

    "use strict";

    var Layout = Marionette.LayoutView.extend({
        
        el: "#app",
        template: _.template("<div class =\"col-xs-4\" id=\"form\"></div><div class=\"col-xs-8\" id=\"result\"></div>"),
        regions: {
            form: "#form",
            result: "#result"
            },
        
        //root layout view must call it's child view onRender, as template creates DOM elements here
        onRender: function (options) {
			console.log("Root layout view renders template/DOM here:" + $("#form").length);
			//this.showChildView("form", options.form);
            this.form.show(options.form)
            console.log("Root layout view renders template/DOM here:"+ JSON.stringify(options));
		}
	});

    return Layout;
});
