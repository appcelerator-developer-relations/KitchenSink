function image_view_basic() {
	var isBlackberry = Titanium.Platform.name === 'blackberry';
	var scaleX = 1;
	var scaleY = 1;
	if (isBlackberry) {
		scaleX += 1;
		scaleY += 2;
	};
	var win = Titanium.UI.createWindow();
	
	var imageView = Titanium.UI.createImageView({
		image:'http://www.appcelerator.com/wp-content/uploads/2009/06/titanium_desk.png',
		width:261 * scaleX,
		height:178 * scaleY,
		top:20 * scaleX
	});
	
	imageView.addEventListener('load', function()
	{
		Ti.API.info('LOAD CALLED');
	});
	win.add(imageView);
	
	var l = Titanium.UI.createLabel({
		text:'Click Image',
		bottom:30 * scaleY,
		color:'#999',
		height:'auto',
		width:300 * scaleX,
		textAlign:'center'
	});
	win.add(l);
	
	//TODO review this part of code if layout height'auto' property will be implemented for BB
	if (isBlackberry){
		l.height = 40 * scaleY;
		l.top = 200 * scaleY;
		l.width = Titanium.Platform.displayCaps.platformWidth;
		imageView.image = '/images/flower.jpg';
	}
	function clicker()
	{
		Titanium.UI.createAlertDialog({title:'Image View', message:'You clicked me!'}).show();
		l.text = "Try again. You shouldn't get alert and the image should be different";
		imageView.image = '/images/cloud.png';
		imageView.removeEventListener('click',clicker);
	}
	
	imageView.addEventListener('click', clicker);

	return win;
};

module.exports = image_view_basic;