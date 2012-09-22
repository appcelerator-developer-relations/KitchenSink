function image_view_encode(_args) {
	var win = Ti.UI.createWindow({
		title:_args.title
	});
	
	// this is a remote URL with a UTF-8 character encoded. We should be able
	// to fetch this image OK
	
	var test_img = Titanium.UI.createImageView({
			image: 'http://www.zoomout.gr/assets/media/PICTURES/' + encodeURIComponent('ΜΟΥΣΙΚΗ') + '/651_thumb1.jpg'
	
	}); 
	
	win.add(test_img);

	return win;
};

module.exports = image_view_encode;