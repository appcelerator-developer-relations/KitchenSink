function hires_remote(_args) {
	var win = Ti.UI.createWindow({
		title:_args.title
	});
	
	if (Ti.Platform.displayCaps.density == 'high') {
		var image = Ti.UI.createImageView({
			image:"http://images.appcelerator.com.s3.amazonaws.com/dog2x.jpg",
			width:Ti.Platform.displayCaps.platformWidth,
			height:Ti.Platform.displayCaps.platformHeight-40,
			hires:true
		});
		
		win.add(image);
	}
	else {
		win.add(Ti.UI.createLabel({text:'Test only valid on retina devices',width:200,height:40}));
	}
	
	return win;
};

module.exports = hires_remote;