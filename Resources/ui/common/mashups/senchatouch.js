function SenchaTouch() {
	var win = Ti.UI.createWindow({
		backgroundColor: '#fff'
	});
	var webview = Ti.UI.createWebView({
		url: 'http://dev.sencha.com/deploy/touch/examples/production/kitchensink/'
	});
	win.add(webview);
	return win;
}

module.exports = SenchaTouch;