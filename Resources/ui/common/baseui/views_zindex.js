function views_zindex() {
	var isBlackberry = Titanium.Platform.name === 'blackberry';
	var scaleX = 1;
	var scaleY = 1;
	if (isBlackberry) {
		scaleX += 1;
		scaleY += 2;
	}
	
	var win = Ti.UI.createWindow();
	var scrollView;
	//TODO revert this part to original when createScrollView() will be implemented for Blackberry
	if (isBlackberry) {
		scrollView = Ti.UI.createView({height:200 * scaleY,top:0});
	} else {
		scrollView = Ti.UI.createScrollView({height:200,top:0});
	}
	
	win.add(scrollView);
	
	var view1 = Ti.UI.createView({
		backgroundColor:'pink',
		zIndex:10,
		width:200 * scaleX,
		height:30 * scaleY,
		top:10 * scaleY,
		left:10 * scaleX
	});
	
	var view2 = Ti.UI.createView({
		backgroundColor:'blue',
		zIndex:11,
		width:200 * scaleX,
		height:30 * scaleY,
		top:15 * scaleY,
		left:15 * scaleX
	});
	
	var view3 = Ti.UI.createView({
		backgroundColor:'red',
		zIndex:12,
		width:200 * scaleX,
		height:30 * scaleY,
		top:20 * scaleY,
		left:20 * scaleX
	});
	
	scrollView.add(view3);
	scrollView.add(view2);
	scrollView.add(view1);
	
	var l = Ti.UI.createLabel({
		text:'scroll view: red on top, blue in the middle, pink below',
		color:'#777',
		width:300 * scaleX,
		height:20 * scaleY,
		top:50 * scaleY,
		left:10 * scaleX,
		font:{fontSize:12}
	});
	scrollView.add(l);
	
	
	var view4 = Ti.UI.createView({
		backgroundColor:'green',
		zIndex:10,
		width:200 * scaleX,
		height:30 * scaleY,
		top:210 * scaleY,
		left:10 * scaleX
	});
	
	var view5 = Ti.UI.createView({
		backgroundColor:'orange',
		zIndex:11,
		width:200 * scaleX,
		height:30 * scaleY,
		top:215 * scaleY,
		left:15 * scaleX
	});
	
	var view6 = Ti.UI.createView({
		backgroundColor:'yellow',
		zIndex:12,
		width:200 * scaleX,
		height:30 * scaleY,
		top:220 * scaleY,
		left:20 * scaleX
	});
	
	win.add(view6);
	win.add(view5);
	win.add(view4);
	
	var l2 = Ti.UI.createLabel({
		text:'win: yellow on top, orange in the middle, green below',
		color:'#777',
		width:300 * scaleX,
		top:240 * scaleY,
		font:{fontSize:12}
	});
	
	if (isBlackberry) {
		l2.top = 250 * scaleY;
	}
	win.add(l2);
	
	return win;
};

module.exports = views_zindex;