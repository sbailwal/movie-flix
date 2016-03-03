define([
	"marionette"
], function (Marionette) {

	"use strict";

	//table row view
	var RowView = Marionette.ItemView.extend({
		tagName: "tr",
		template: _.template("<td><%= code%></td><td><%= strength%></td><td><%= unit%></td><td><%= rxOTC%></td><td><%= name%></td><td><%= genericName%></td><td><%= HIVInd%></td><td><%= ndcFDA%></td><td><%= endDt%></td>")
	});

	//table view
	var Table = Marionette.CompositeView.extend({
		tagName: "table",
		className: "table table-striped table-bordered table-hover",
		childView: RowView,
        template: _.template("<thead><tr><th>Code</th><th>Strength</th><th>Unit</th><th>RX OTC</th><th>Trade Name</th><th>Generic Name</th><th>HIV Ind</th><th>NDC FDA</th><th>End Date</th></tr></thead>")
	});

	return Table;
});
