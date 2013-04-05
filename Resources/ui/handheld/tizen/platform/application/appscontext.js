// Test of Tizen.Apps.getAppsContext.
// This test is Tizen only.

function tizen_appscontext(_args) {
	var self = Titanium.UI.createWindow(),
		Tizen = require('tizen');

	// Return information available about a running application.
	Tizen.Apps.getAppsContext(function(contexts) {
		var data = [],
			i = 0,
			contextsCount = contexts.length,
			tableview = Ti.UI.createTableView({});

		// Generate app context info to show in the table view
		for (; i < contextsCount; i++) {
			data.push({
				// AlertDialog title
				title: contexts[i].appId + '\n<font size="1">' + contexts[i].id + '</font>',
				app_id: contexts[i].appId,
				id: contexts[i].id
			});
		}
		tableview.data = data;

		// Show dialog with Application information
		tableview.addEventListener('click', _args.showAppInfoById);
		self.add(tableview);

	}, _args.showErrorDialog);

	return self;

}

module.exports = tizen_appscontext;
