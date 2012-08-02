function scroll_view_basic() {
	var isBlackberry = Titanium.Platform.name === 'blackberry';
	var scaleX = 1;
	var scaleY = 1;
	if (isBlackberry) {
		scaleX += 1;
		scaleY += 2;
	}
	var win = Titanium.UI.createWindow();
	
	var scrollView = Titanium.UI.createScrollView({
		contentWidth:'auto',
		contentHeight:'auto',
		top:0,
		showVerticalScrollIndicator:true,
		showHorizontalScrollIndicator:true
	});
	
	
	var view = Ti.UI.createView({
		backgroundColor:'#336699',
		borderRadius:10,
		width:300 * scaleX,
		height:2000 * scaleY,
		top:10 * scaleY
	});
	
	scrollView.add(view);
	
	var button = Titanium.UI.createButton({
		title:'Scroll to Top',
		height:40 * scaleY,
		width:200 * scaleX,
		bottom:10
	});
	if (isBlackberry) {
		button.top = 1980 * scaleY;
	}
	view.add(button);
	button.addEventListener('click', function()
	{
		scrollView.scrollTo(0,0);
	});
	
	var button2 = Titanium.UI.createButton({
		title:'Add to Scroll View',
		height:40 * scaleY,
		width:200 * scaleX,
		top:20 * scaleY
	});
	scrollView.add(button2);
	button2.addEventListener('click', function()
	{
		var view = Ti.UI.createView({
			backgroundColor:'red',
			borderRadius:10,
			width:300 * scaleX,
			height:300 * scaleY,
			top:2020 * scaleY
		});
		scrollView.add(view);
	
	});
	
	win.add(scrollView);
	
	return win;
};

module.exports = scroll_view_basic;
