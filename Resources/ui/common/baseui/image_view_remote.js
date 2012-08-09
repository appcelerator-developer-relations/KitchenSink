function image_view_remote() {
	var isBlackberry = Titanium.Platform.name === 'blackberry';
	var scaleX = 1;
	var scaleY = 1;
	if (isBlackberry) {
		scaleX += 1;
		scaleY += 2;
	}
	var win = Titanium.UI.createWindow();
	
	var imageView = Titanium.UI.createImageView({
		image:'http://www.appcelerator.com/wp-content/uploads/2009/06/titanium_desk.png',
		defaultImage:'/images/cloud.png',
		top:20,
		width:100,
		height:100
	});
		
	win.add(imageView);
	
	var l = Titanium.UI.createLabel({
		text:'This is a remote image URL',
		bottom:30,
		color:'#999',
		height:20 * scaleY,
		width:300 * scaleX,
		textAlign:'center'
	});
	win.add(l);
	
	var imageView2 = Titanium.UI.createImageView({
		defaultImage:'/images/cloud.png',
		top:140,
		width:100,
		height:100
	});
	win.add(imageView2);
	
	var b = Titanium.UI.createButton({
		title : 'Assign remote image url',
		top : 260,
		height : 50 * scaleY,
		width : "auto"
	});
	//TODO review this part of code if layout widht - 'auto' will be implemented for BB
	if (isBlackberry) {
		b.width = 400;
	}
	win.add(b);
	b.addEventListener('click', function(e) {
			imageView2.image = 'http://www.appcelerator.com/wp-content/uploads/2009/06/titanium_desk.png';
	});
	return win;
};

module.exports = image_view_remote;
