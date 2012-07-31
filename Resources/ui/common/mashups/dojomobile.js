function DojoMobile() {
	var self = Ti.UI.createWindow({
		backgroundColor:'#fff'
	});
	
	var wview = Ti.UI.createWebView({
		url:'http://demos.dojotoolkit.org/demos/mobileGallery/demo-iphone.html'
	});
	
	self.add(wview);
	
	return self;
};

module.exports = DojoMobile;
