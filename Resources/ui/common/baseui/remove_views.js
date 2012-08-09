function remove_views() {
	var isBlackberry = Titanium.Platform.name === 'blackberry';
	var scaleX = 1;
	var scaleY = 1;
	if (isBlackberry) {
		scaleX += 1;
		scaleY += 2;
	}
	var win = Ti.UI.createWindow();
	
	var v1 = Ti.UI.createView({
		height:40 * scaleY,
		width:200 * scaleX,
		backgroundColor:'#336699',
		top:10 * scaleY,
		borderRadius:10
	});
	
	win.add(v1);
	
	var v2 = Ti.UI.createView({
		height:40 * scaleY,
		width:200 * scaleX,
		backgroundColor:'#ff0000',
		top:60 * scaleY,
		borderRadius:10
	});
	
	win.add(v2);
	
	var v3;
	
	//TODO remove this when Ti.UI.createWebView() will be implemneted for Blackberry
	if (isBlackberry) {
		v3 = Ti.UI.createView({
			height:40 * scaleY,
			width:200 * scaleX,
			backgroundColor:'#11CC00',
			top:110 * scaleY,
			borderRadius:10
		});
	} else {
		v3 = Ti.UI.createWebView({
			height:40 * scaleY,
			width:200 * scaleX,
			backgroundColor:'#ff9900',
			top:110 * scaleY,
			borderRadius:10,
			html:'<html><body><div style="color:#fff;text-align:center">FOO</div></body></html>'
		});
	}
	win.add(v3);
	
	var b1 = Ti.UI.createButton({
		height:40 * scaleY,
		width:200 * scaleX,
		title:'Remove View 1',
		top:160 * scaleY
	});
	
	win.add(b1);
	
	b1.addEventListener('click', function()
	{
		win.remove(v1);
	});
	
	var b2 = Ti.UI.createButton({
		height:40 * scaleY,
		width:200 * scaleX,
		title:'Remove View 2',
		top:210 * scaleY
	});
	
	win.add(b2);
	
	b2.addEventListener('click', function()
	{
		win.remove(v2);
	});
	var b3 = Ti.UI.createButton({
		height:40 * scaleY,
		width:200 * scaleX,
		title:'Remove View 3',
		top:260 * scaleY
	});
	
	win.add(b3);
	
	b3.addEventListener('click', function()
	{
		win.remove(v3);
	});
	return win;
};

module.exports = remove_views;