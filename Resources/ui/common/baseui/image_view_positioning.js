function image_view_position() {
	var isBlackberry = Titanium.Platform.name === 'blackberry';
	var scaleX = 1;
	var scaleY = 1;
	if (isBlackberry) {
		scaleX += 1;
		scaleY += 2;
	};
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
		bottom:20 * scaleY,
		textAlign:'center'
	});
	
	if (isBlackberry) {
		//Cascade doesn't provide remote image functionality
		view.image = '/images/smallpic1.jpg';
		view.width = Titanium.Platform.displayCaps.platformWidth;
		view.height = 200 * scaleY;
		label.width = Titanium.Platform.displayCaps.platformWidth;
		label.height = 40 * scaleY;
		label.top = 250 * scaleY;
	}
	win.add(label);
	
	return win;
};

module.exports = image_view_position;