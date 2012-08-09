function image_view_file() {
	//TODO remove these lines of code when  Ti.Filesystem will be implemeneted for Blackberry
	if (Titanium.Platform.osname === 'blackberry'){
		alert('Ti.Filesystem module is not supported for BB');
		return;
	}
	var win = Titanium.UI.createWindow();;
	
	var f = Ti.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory,'/images/apple_logo.jpg');
	
	var imageView = Titanium.UI.createImageView({
		image:f,
		width:24,
		height:24,
		top:100
	});
	
	win.add(imageView);
	
	var l = Titanium.UI.createLabel({
		text:'Click Image of Apple Logo',
		bottom:20,
		width:'auto',
		height:'auto',
		color:'#999'
	});
	win.add(l);
	
	imageView.addEventListener('click', function()
	{
		Titanium.UI.createAlertDialog({title:'Image View', message:'You clicked me!'}).show();
	});
	
	return win;
};

module.exports = image_view_file;