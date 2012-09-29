function contacts_permissions() {	
	var win = Ti.UI.createWindow();
	
	var infoLabel = Ti.UI.createLabel({
		top:20,
		left:10,
		right:10,
		height:'auto'
	});
	
	var updatePrivs = function(e) {
		var privs = Ti.Contacts.contactsAuthorization;
		var text = 'Contact authorization: '
		if(privs===undefined){
			text += "Undefined.\rYou're using a version of Titanium mobile earlier than 2.1.3. " +
			"Request authorization will not work, and if you're on iOS 6 or later, " +
			"contacts may fail.";
		} else if (privs===Ti.Contacts.AUTHORIZATION_AUTHORIZED){
			text += "Authorized.\rThis will be the value for iOS 5.1 and earlier, or Android." +
			" On iOS 6.0 and later, this indicates that the user has been asked for permission" + 
			" and it has been granted."
		} else if (privs===Ti.Contacts.AUTHORIZATION_UNKNOWN){
			text += "Unknown.\rOn iOS 6.0 and later, this indicates that the user has yet " +
			"to be asked for permission. Use requestAuthorization before this will change.";
		} else if (privs===Ti.Contacts.AUTHORIZATION_RESTRICTED){
			text += "Restricted.\rOn iOS 6.0 and later, this indicates that the user cannot " +
			"grant permission. Do not use contacts nor request it from the user.";
		} else if (privs===Ti.Contacts.AUTHORIZATION_DENIED){
			text += "Denied.\rOn iOS 6.0 and later, this indicates that the user disallowed " +
			"contacts use. Do not use contacts but you may mention that the user needs to change settings.";
		}
		infoLabel.text = text;
	};
	
	var askPermission = Ti.UI.createButton({
		title:'Request Permission',
		left:10,
		bottom:20,
		right:10,
		height:40
	});
/* NOTE: DO NOT use requestAuthorization blindly. To safely do things, try this design pattern:

if (Ti.Contacts.contactsAuthorization == Ti.Contacts.AUTHORIZATION_AUTHORIZED){
	performAddressBookFunction();
} else if (Ti.Contacts.contactsAuthorization == Ti.Contacts.AUTHORIZATION_UNKNOWN){
	Ti.Contacts.requestAuthorization(function(e){
		if (e.success) {
			performAddressBookFunction();
		} else {
			addressBookDisallowed();
		}
	});
} else {
	addressBookDisallowed();
}

This will be backwards compatible with previous versions of Titanium because pre-2.1.3,
Ti.Contacts.contactsAuthorization and Ti.Contacts.AUTHORIZATION_AUTHORIZED are both undefined
so the if will work. However, on iOS 6.0, this will mislead you into thinking you have
authorization when you don't.
*/

	askPermission.addEventListener('click', function() {
		Ti.Contacts.requestAuthorization(updatePrivs);
	});
	
	win.add(infoLabel);
	win.add(askPermission);
	updatePrivs();
	return win;
};

module.exports = contacts_permissions;