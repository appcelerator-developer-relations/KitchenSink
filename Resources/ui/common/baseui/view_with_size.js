function viewsize() {
	var isBlackberry = Titanium.Platform.name === 'blackberry';
	var scaleX = 1;
	var scaleY = 1;
	if (isBlackberry) {
		scaleX += 1;
		scaleY += 1;
	}
	var win = Ti.UI.createWindow();
	
	// this test should test that we have a red 100x100 view in the 
	// center of the screen by using the size property to set it
	
	var view = Ti.UI.createView({
		width:100 * scaleX,
		height:100 * scaleY,
		backgroundColor:"red"
	});
	
	
	win.add(view);
	
	var label = Ti.UI.createLabel({
		text:"Should be 100x100 red square in center",
		textAlign:"center",
		width:"auto",
		height:"auto",
		top:20 * scaleY
	});
	
	win.add(label);
	
	
	var button = Ti.UI.createButton({
	    title:"Change Size",
	    width:120 * scaleX,
	    height:40 * scaleY,
	    bottom:20 * scaleY
	});
	win.add(button);
	
	button.addEventListener('click',function() {
		view.updateLayout({width:150 * scaleX,height:150 * scaleY});
		label.text = "Box should now be 150x150";
	});
	//TODO review this part of code if layout height/widht - 'auto' and right/bottom properties will be implemented for BB
	if (isBlackberry) {
		label.width = 200 * scaleX;
		label.height = 40 * scaleY;
		
		button.top = 150 * scaleY;
		button.width = 200 * scaleX;
		button.height = 50 * scaleY;
	}
	return win;
};

module.exports = viewsize;