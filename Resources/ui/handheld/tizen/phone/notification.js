function notif() {
	var win = Titanium.UI.createWindow();	
	var countdown = 5;	
	
	var label = Titanium.UI.createLabel({
		text: 'Tizen Notification test in ',
		width: 'auto',
		height: 'auto'
	});
	
	win.add(label);
		 
	var notification = Ti.UI.createNotification({
		message: "Howdy folks tizen",
		duration: Ti.UI.NOTIFICATION_DURATION_LONG
	});

	var countdownSeconds = setInterval(function() {
		label.text = label.text + countdown + "..";
		
		if (--countdown < 0) {
			clearInterval(countdownSeconds);
			notification.show(win);
		}
	}, 1000);
	
	return win;
}

module.exports = notif;