function image_view_scale() {
	var win = Titanium.UI.createWindow();
	var TIMEOUT_SECS = 2;
	
	var imageView = Titanium.UI.createImageView({
		image:'http://static.appcelerator.com/images/header/appc_logo.png',
		width: 325
	});
		
	win.add(imageView);
	
	var l = Titanium.UI.createLabel({
		text:'fetching remote image...',
		bottom:30,
		color:'#999',
		height:100,
		right: 10,
		left: 10,
		textAlign:'center'
	});
	win.add(l);
	
	
	function getDimensions() {
		if (Ti.Platform.osname === 'mobileweb') {
			l.text = 'dimensions unavailable'
		} else {
			l.text = 'retrieving dimensions...';
			var blob = imageView.toBlob();
			if (blob === null) {
				l.text = 'Unable to retrieve image dimensions. The image is a remote url -- are you connected to the network? Or the ' + TIMEOUT_SECS + ' second timeout expired. Tap here to try again.';
			} else {
				l.text = blob.width + "x" + blob.height;
				l.removeEventListener('click', getDimensions);
			}
		}
	}
	
	l.addEventListener('click', getDimensions);
	
	setTimeout(getDimensions, TIMEOUT_SECS * 1000); // give time for the remote image to load.

	return win;
};

module.exports = image_view_scale;