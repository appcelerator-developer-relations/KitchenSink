function image_view_encode() {
	var win = Ti.UI.createWindow();
	
	// this is a remote URL with a UTF-8 character encoded. We should be able
	// to fetch this image OK
	
	var test_img = Titanium.UI.createImageView({
			image: 'http://www.zoomout.gr/assets/media/PICTURES/' + encodeURIComponent('ΜΟΥΣΙΚΗ') + '/651_thumb1.jpg'
	
	}); 
	
	//Added logging of  encodeURIComponent() method because the image with the given url is not available any more.
	Titanium.API.info('Testing encodeURIComponent(): \'ΜΟΥΣΙΚΗ\' = ' + encodeURIComponent('ΜΟΥΣΙΚΗ'));
	win.add(test_img);

	return win;
};

module.exports = image_view_encode;