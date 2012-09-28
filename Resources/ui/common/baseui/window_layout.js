function win_layout() {
	var win = Titanium.UI.createWindow();
	win.backgroundColor = '#13386c';
	win.barColor = '#13386c';
	
	//
	//  CREATE FIELD ONE
	//
	var firstName = Titanium.UI.createLabel({
		color:'#000',
		text:'First Name',
		top:10,
		left:30,
		width:100,
		height:'auto'
	});
	
	win.add(firstName);
	
	var firstNameField = Titanium.UI.createTextField({
		hintText:'enter first name',
		height:35,
		top:35,
		left:30,
		width:250,
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
	});
	
	win.add(firstNameField);
	
	//
	//  CREATE FIELD TWO
	//
	var lastName = Titanium.UI.createLabel({
		color:'#000',
		text:'Last Name',
		top:75,
		left:30,
		width:100,
		height:'auto'
	});
	
	win.add(lastName);
	
	var lastNameField = Titanium.UI.createTextField({
		hintText:'enter last name',
		height:35,
		top:100,
		left:30,
		width:250,
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
	});
	
	win.add(lastNameField);
	
	//
	// CREATE BUTTON
	//
	var save = Titanium.UI.createButton({
		title:'Save my Information',
		top:170,
		left:30,
		height:30,
		width:250
	});
	win.add(save);
	
	//
	//  CREATE INFO MESSAGE
	//
	var messageView = Titanium.UI.createView({
		bottom:10,
		backgroundColor:'#111',
		height:40,
		width:270,
		borderRadius:10
	});
	
	var messageLabel = Titanium.UI.createLabel({
		color:'#fff',
		text:'Register for a free toaster!',
		height:'auto',
		width:'auto',
		textAlign:'center'
	});
	
	if (Titanium.Platform.name === 'blackberry') {
		var scaleY = 3;
		firstName.width = 'auto';
		firstName.top *= scaleY;
		firstName.font = { fontSize : 10 };
		firstNameField.width = 'auto';
		firstNameField.height = 'auto';
		firstNameField.top *= scaleY;
		lastName.width = 'auto';
		lastName.top *= scaleY;
		lastName.font = { fontSize : 10 };
		lastNameField.width = 'auto';
		lastNameField.height = 'auto';
		lastNameField.top *= scaleY;
		save.height = 'auto';
		save.width = 'auto';
		save.top *= scaleY;
		messageLabel.font = { fontSize : 10 };
		messageView.top = 900;
		messageView.height = 'auto';
		messageView.width = 'auto';
	}
	messageView.add(messageLabel);
	
	win.add(messageView);
	return win;
};

module.exports = win_layout;
