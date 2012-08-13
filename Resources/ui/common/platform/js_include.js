function js_include() {
	Titanium.include('/etc/my_js_include.js', '/etc/my_js_include_2.js', '/etc/local_include.js');
	
	var self = Ti.UI.createWindow();
	
	if (Titanium.Platform.osname === 'blackberry') {
		//TODO remove this when bug: TIMOB-10340 will be fixed for BlackBerry
		Titanium.include('/etc/my_js_include_2.js');
		Titanium.include('/etc/local_include.js');
		//TODO remove this when custom event listener will be implemented for BlackBerry
		alert('first name: ' + myFirstName + ' middle name: ' + myMiddleName +' last name: ' + myLastName);
	}
	self.addEventListener('open', function() {

		Ti.UI.createAlertDialog({
			title:'JS Includes',
			message:'first name: ' + myFirstName + ' middle name: ' + myMiddleName +' last name: ' + myLastName
		}).show();
		
	});

	return self;
};

module.exports = js_include;
