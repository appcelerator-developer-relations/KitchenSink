function image_view_position() {
	var win = Ti.UI.createWindow();
	
	var view = Ti.UI.createImageView({
		image:'http://static.appcelerator.com/images/header/appc_logo.png',
		top:10,
		left:10,
		height:'auto',
		width:'auto'
	});
	
	win.add(view);
	
	var label = Ti.UI.createLabel({
		text:'Image should be at top 10 and left 10',
		height:'auto',
		bottom:20,
		textAlign:'center'
	});
	
	win.add(label);
	
	return win;
};

module.exports = image_view_position;