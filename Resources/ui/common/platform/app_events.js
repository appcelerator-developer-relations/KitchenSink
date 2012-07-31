function app_events() {
	var win = Titanium.UI.createWindow({
		navBarHidden:true
	});
	
	
	var label = Ti.UI.createLabel({
		text:'No app event received. Make call while running app',
		textAlign:'center',
		width:'auto'
	});
	
	win.add(label);
	
	var paused = false;
	
	Titanium.App.addEventListener('pause',function(e)
	{
		Ti.API.info("PAUSED");
		paused = true;
		label.text = "App has been paused";
	});
	
	Titanium.App.addEventListener('resume',function(e)
	{
		Ti.API.info("RESUMED");
		if (paused)
		{
			label.text = "App has resumed";
		}
		else
		{
			label.text = "App has resumed (w/o pause)";
		}
	});
	
	if (Titanium.Platform.name == 'android') {
		win.addEventListener('open', function() {
			win.activity.addEventListener('pause', function(e) {
				Ti.API.info("pause event received");
				paused = true;
				label.text = "App has been paused";
			});
			win.activity.addEventListener('resume', function(e) {
				Ti.API.info("resume event received");
				if (paused) {
					label.text = "App has resumed";
				} else {
					label.text = "App has resumed (w/o pause)";
				}
			});
		});
	}
	
	return win;
};

module.exports = app_events;
	

