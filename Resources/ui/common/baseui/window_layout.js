function win_layout() {
	var isBlackberry = Titanium.Platform.name === 'blackberry';
	var scaleX = 1;
	var scaleY = 1;
	if (isBlackberry) {
		scaleX += 1;
		scaleY += 2;
	}
	var win = Titanium.UI.createWindow();
	win.backgroundColor = '#13386c';
	win.barColor = '#13386c';
	
	//
	//  CREATE FIELD ONE
	//
	var firstName = Titanium.UI.createLabel({
		color:'#000',
		text:'First Name',
		top:10 * scaleY,
		left:30,
		width:100 * scaleX,
		height:'auto'
	});
	
	win.add(firstName);
	
	var firstNameField = Titanium.UI.createTextField({
		hintText:'enter first name',
		height:35 * scaleY,
		top:35 * scaleY,
		left:30,
		width:250 * scaleX,
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
	});
	
	win.add(firstNameField);
	
	//
	//  CREATE FIELD TWO
	//
	var lastName = Titanium.UI.createLabel({
		color:'#000',
		text:'Last Name',
		top:75 * scaleY,
		left:30,
		width:100 * scaleX,
		height:'auto'
	});
	
	win.add(lastName);
	
	var lastNameField = Titanium.UI.createTextField({
		hintText:'enter last name',
		height:35 * scaleY,
		top:100 * scaleY,
		left:30,
		width:250 * scaleX,
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
	});
	
	win.add(lastNameField);
	
	//
	// CREATE BUTTON
	//
	var save = Titanium.UI.createButton({
		title:'Save my Information',
		top:170 * scaleY,
		left:30,
		height:30 * scaleY,
		width:250 * scaleX
	});
	win.add(save);
	
	//
	//  CREATE INFO MESSAGE
	//
	var messageView = Titanium.UI.createView({
		bottom:10,
		backgroundColor:'#111',
		height:40 * scaleY,
		width:270 * scaleX,
		borderRadius:10
	});
	
	var messageLabel = Titanium.UI.createLabel({
		color:'#fff',
		text:'Register for a free toaster!',
		height:'auto',
		width:'auto',
		textAlign:'center'
	});
	
	//TODO review this part of code if layout height/widht - 'auto' and right/bottom properties will be implemented for BB
	if (isBlackberry) {
		firstName.height = 15 * scaleY;
		firstName.color = 'white';
		lastName.height = 15 * scaleY;
		lastName.color = 'white';
		messageView.top = 210 * scaleY;
		messageLabel.height = 15 * scaleY;
		messageLabel.width = 210 * scaleX;
		save.height = 35 * scaleY;
	}
	messageView.add(messageLabel);
	
	win.add(messageView);
	return win;
};

module.exports = win_layout;
