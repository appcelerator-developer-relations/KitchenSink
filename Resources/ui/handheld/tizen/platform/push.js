function tizen_push() {
	var Tizen = require('tizen'),
		win = Titanium.UI.createWindow(),
	    		
		registerButton = Ti.UI.createButton({
			top: 15,
			left: 10,
			width: '40%',
			title: 'Register service'
		}),
		unregisterButton = Ti.UI.createButton({
			top: 15,
			left: '45%',
			width: '45%',
			title: 'Unregister service'
		}),
		idButton = Ti.UI.createButton({
			enabled: false,
			top: 80,
			left: '70%',
			width: '25%',
			title: 'Show registration id'
		}),
		receivePushButton = Ti.UI.createButton({
			left: 10,
			width: '60%',
			top: 80,
			title: 'Start receiving notifications'
		}),
		Tizen = require('tizen');

	receivePushButton.addEventListener('click', receivePushMessage);

	idButton.addEventListener('click', showId);

	registerButton.addEventListener('click', registerService);

	unregisterButton.addEventListener('click', unregisterService);

	// Defines the error callback.
	function showError(e) {
		var alert_d = Ti.UI.createAlertDialog({
				title: 'The following error occurred: ' +  e,
				buttonNames: ['OK']
		});
		console.log('The following error occurred: ' +  e);
		alert_d.show();
	}

	function registerService() {
		var service = Tizen.Apps.createApplicationControl({
			operation: 'http://tizen.org/appcontrol/operation/view', 
			uri: 'http://www.google.com'
		});
		// Defines the registration success callback
		function registerCallback(response) {
			if (response.success) {
				console.log('Registration succeeded with id: ' + response.id);
				var alert_d = Ti.UI.createAlertDialog({
					title: 'Registration succeeded with id: ' + response.id,
					buttonNames: ['OK']
				});
	
				alert_d.show();
				idButton.enable = true;
			} else {
				showError(response.error);
			}
		}

		// Requests registration.
		Tizen.Push.registerService(service, registerCallback);
	}

	function unregisterService() {
		// Defines the unregistration success callback
		function unregisterCallback(response) {
			if (response.success) {
				console.log('Unregistration succeeded.');
				var alert_d = Ti.UI.createAlertDialog({
					title: 'Unregistration succeeded.',
					buttonNames: ['OK']
				});
				
				alert_d.show();
				idButton.enable = false;
			} else {
				showError(response.error);
			}
		}

		// Requests unregistration
		Tizen.Push.unregisterService(unregisterCallback);
	}

	function receivePushMessage() {
		// Defines the connect success callback
		function notificationCallback(response) {
			if (response.success) {
				console.log("Notification received with alert message: " + response.message.alertMessage);
				var alert_d = Ti.UI.crateAlertDialog({
					title: 'Notification received with alert message: ' + response.message.alertMessage,
					buttonNames: ['OK']
				});
	
				alert_d.show();
			} else {
				showError(response.error);
			}
		}

		// Requests for push service connection
		Tizen.Push.connectService(notificationCallback);		
	}

	function showId() {
		var registrationId = Tizen.Push.getRegistrationId(),
			alert_d = Ti.UI.createAlertDialog({
				title: 'The registration id: ' + registrationId,
				buttonNames: ['OK']
			});

		alert_d.show();
	}

	win.add(receivePushButton);
	win.add(registerButton);
	win.add(unregisterButton);
	win.add(idButton);

	return win;
}

module.exports = tizen_push;