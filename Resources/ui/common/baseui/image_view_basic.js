function image_view_basic() {
	var win = Titanium.UI.createWindow();
	
	var imageView = Titanium.UI.createImageView({
		image:'http://www.appcelerator.com/wp-content/uploads/2009/06/titanium_desk.png',
		width:261,
		height:178,
		top:20
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
	
	//TODO review this part of code if layout height'auto' property will be implemented for BB
	if (Titanium.Platform.osname === 'blackberry'){
		l.height = 100;
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