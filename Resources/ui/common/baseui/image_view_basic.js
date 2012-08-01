function image_view_basic() {
	var win = Titanium.UI.createWindow();
	
	//changed image url form remote to local - because the image with this url is not available in WEB already.
	var imageView = Titanium.UI.createImageView({
		image:'/images/flower.jpg',
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