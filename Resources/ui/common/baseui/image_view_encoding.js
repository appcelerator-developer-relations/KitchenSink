function image_view_encode() {
	if (Titanium.Platform.name === 'blackberry') {
		alert('BlackBerry does not support remote image functionality');
		return;
	}
	var win = Ti.UI.createWindow();
	
	// this is a remote URL with a UTF-8 character encoded. We should be able
	// to fetch this image OK
	
	var test_img = Titanium.UI.createImageView({
			image: 'http://www.zoomout.gr/assets/media/PICTURES/' + encodeURIComponent('ΜΟΥΣΙΚΗ') + '/651_thumb1.jpg'
	
	}); 
	
	win.add(test_img);

	return win;
};

module.exports = image_view_encode;