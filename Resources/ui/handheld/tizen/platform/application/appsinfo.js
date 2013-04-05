function tizen_appsinfo(_args) {
	var self = Ti.UI.createWindow(),
		Tizen = require('tizen'),
		helper = new (require('ui/handheld/tizen/platform/application/helper'));

	// Return list installed on the device applications 
	Tizen.Apps.getAppsInfo(function(applications) {
		var data = [],
			i = 0,
			applicationsCount = applications.length,
			tableview = Ti.UI.createTableView({});

		for (; i < applicationsCount; i++) {
			data.push({
				// AlertDialog title
				title: applications[i].name + '\n<font size="1">' + applications[i].id + '</font>',
				// app_id consist application id used in showAppInfoById
				// Do not remove it
				app_id: applications[i].id,
				app_name: applications[i].name
			});
		}

		tableview.data = data;
		
		// Show dialog with Application information
		tableview.addEventListener('click', helper.showAppInfoById);
		self.add(tableview);

	}, helper.showErrorDialog);

	return self;
}
module.exports = tizen_appsinfo;
