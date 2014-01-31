function tizen_exit_hide_launch(_args) {
	var win = Ti.UI.createWindow(),
		clockAppId = 'org.tizen.clock', // memo app is N/A in Tizen 2.1
		butttonHeightOffset = 10, 
		butttonHeight = 40,
		butttonWidth = 200,
		Tizen = require('tizen'),
		kitchenSinkApp = Tizen.Apps.getCurrentApplication(),
		helper = require('ui/handheld/tizen/platform/application/helper');

	// Create button for Exit
	var buttonExit = Titanium.UI.createButton({
		title: 'Exit Kitchen Sink',
		height: butttonHeight,
		width: butttonWidth,
		top: butttonHeightOffset
	});

	// Call tizen.application.exit when button has been pressed
	buttonExit.addEventListener('click', function() {
		try {
			kitchenSinkApp.exit();
		} catch (e) {
			helper.showErrorDialog(e, 'Could not Exit from KitchenSink');
		}
	});
	win.add(buttonExit);

	// Create button for Hide
	var buttonHide = Titanium.UI.createButton({
		title: 'Hide Kitchen Sink',
		height: butttonHeight,
		width: butttonWidth,
		top: butttonHeightOffset + butttonHeight + butttonHeightOffset
	});

	// Call tizen.application.exit when button has been pressed
	buttonHide.addEventListener('click', function() {
		try {
			kitchenSinkApp.hide();
		} catch (e) {
			helper.showErrorDialog(e, 'Could not Hide KitchenSink');
		}
	});
	win.add(buttonHide);

	// Create button for Launch
	var buttonLaunch = Titanium.UI.createButton({
		title: 'Launch Clock',
		height: butttonHeight,
		width: butttonWidth,
		top: 3 * butttonHeightOffset + 2 * butttonHeight
	});

	// Call tizen.application.exit when button has been pressed
	buttonLaunch.addEventListener('click', function() {
		try {
			Tizen.Apps.launch(clockAppId, function(e) { 
				if(e.success != true) {
					alert(e.error); 
				}
			})
		} catch (e) {
			alert(e.message);
		}
	});
	win.add(buttonLaunch);

	return win;
}

module.exports = tizen_exit_hide_launch;
