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
		image:'http://static.appcelerator.com/images/header/appc_logo.png',
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
		bottom:30,
		color:'#999',
		height:'auto',
		width:300,
		textAlign:'center'
	});
	win.add(l);
	
	if (isBlackberry){
		l.top = 600;
		l.width = 'auto';
		l.font = { fontSize:5 };
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
