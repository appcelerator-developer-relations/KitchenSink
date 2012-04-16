function jQueryMobile() {
	var self = Ti.UI.createWindow({
		backgroundColor:'#fff'
	});
	
	var wview = Ti.UI.createWebView({
		url:'http://jquerymobile.com/demos/1.1.0/'
	});
	
	self.add(wview);
	
	return self;
};

module.exports = jQueryMobile;
