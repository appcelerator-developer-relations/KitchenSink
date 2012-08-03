function image_view_position() {
	var win = Ti.UI.createWindow();
	
	if (Titanium.Platform.name == 'android') 
	{
		// iphone moved to a single image property - android needs to do the same
		var view = Ti.UI.createImageView({
			image:'http://www.appcelerator.com/wp-content/uploads/2009/06/titanium_desk.png',
			top:10,
			left:10,
			height:'auto',
			width:'auto'
		});
	
	}
	else
	{
		var view = Ti.UI.createImageView({
			image:'http://www.appcelerator.com/wp-content/uploads/2009/06/titanium_desk.png',
			top:10,
			left:10,
			height:'auto',
			width:'auto'
		});
		
	}
	
	win.add(view);
	
	var label = Ti.UI.createLabel({
		text:'Image should be at top 10 and left 10',
		height:'auto',
		bottom:20,
		textAlign:'center'
	});
	
	//TODO review this part of code if layout height - 'auto' will be implemented for BB
	if (Titanium.Platform.osname === 'blackberry') {
		label.height = 100;
	}
	win.add(label);
	
	return win;
};

module.exports = image_view_position;