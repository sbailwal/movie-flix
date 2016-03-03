define([
	"marionette"
], function (Marionette) {

	"use strict";

	//table row view
	var RowView = Marionette.ItemView.extend({
		tagName: "tr",
		template: _.template("<td><%= code%></td><td><%= desc%></td><td><%= type%></td><td><%= cat%></td><td><%= catDesc%></td><td><%= benefitYr%></td>")
	});

	//table view
	var Table = Marionette.CompositeView.extend({
		tagName: "table",
		className: "table table-striped table-bordered table-hover",
		childView: RowView,
        template: _.template("<thead><tr><th>Code</th><th>Description</th><th>Type</th><th>Category</th><th>Category Desc</th><th>Benefit Year</th></tr></thead>"),
        
		initialize: function () {
			console.log("SB: Table has been initialized");
		}
	});

	return Table;
});
