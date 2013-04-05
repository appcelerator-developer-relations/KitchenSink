// Tests of Tizen's application control functionality.
// These tests are Tizen only.

function tizen_application(_args) {
	var self = Titanium.UI.createWindow(), 
		tableview = Ti.UI.createTableView({
			data : [
				{ title: 'Installed App Info', hasChild: true, test: 'ui/handheld/tizen/platform/application/appsinfo' }, 
				{ title: 'Running App Info', hasChild: true, test: 'ui/handheld/tizen/platform/application/appscontext' }, 
				{ title: 'Exit / Hide / Launch', hasChild: true, test: 'ui/handheld/tizen/platform/application/exit_hide_launch' }
			]
		}),
		Tizen = require('tizen');

	tableview.addEventListener('click', function(e) {
		if (e.rowData.test) {
			var TizenApplication = require(e.rowData.test), 
				win = new TizenApplication({
					title : e.rowData.title,
					containingTab : _args.containingTab,
					showAppInfoById : _showAppInfoById,
					showErrorDialog : _showErrorDialog
				});

			_args.containingTab.open(win, {
				animated : true
			});
		}
	});

	// Helper function commonly used in application tests.
	// Shows an AlertDialog with information about a desired application.
	//   - e.rowData.app_id contains application id;
	//   - e.rowData.title contains dialog title.
	function _showAppInfoById(e) {
		if (e.rowData && e.rowData.app_id) {
			var appInfo;
			try {
				appInfo = Tizen.Apps.getAppInfo(e.rowData.app_id);
			} catch (error) {
				_showErrorDialog(error, 'Could not call tizen.application.getAppInfo function');
				return;
			}

			Titanium.UI.createAlertDialog({
				title: e.rowData.title,
				message: '\n\n Id = ' + appInfo.id + 
				'\n\n Name = ' + appInfo.name +
					(appInfo.iconPath ? '\n\n IconPath = ' + appInfo.iconPath : ' ') +
					(appInfo.version ? '\n\n Version = ' + appInfo.version : ' ') + 
					(appInfo.show ? '\n\n Show = ' + appInfo.show : ' ') +
					(appInfo.installDate ? '\n\n InstallDate = ' + appInfo.installDate : '') +
					(appInfo.size ? '\n\n Size = ' + appInfo.size : '')
			}).show();
		}
	}

	// Helper function commonly used in application tests.
	// Shows an AlertDialog with an error message and logs this error.
	function _showErrorDialog(logMessage, userMessage) {
		Ti.API.error(logMessage);
		Titanium.UI.createAlertDialog({
			title: 'Unexpected action',
			message: userMessage ? userMessage : logMessage
		}).show();
	}
	self.add(tableview);

	return self;
}

module.exports = tizen_application;
