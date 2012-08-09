function scroll_view_tabs() {
	var isBlackberry = Titanium.Platform.name === 'blackberry';
	var scaleX = 1;
	var scaleY = 1;
	if (isBlackberry) {
		scaleX += 1;
		scaleY += 2;
	}
	var win = Titanium.UI.createWindow();
	win.backgroundColor = '#000';
	
	var leftImage = Ti.UI.createView({
		backgroundImage:'/images/icon_arrow_left.png',
		height:30 * scaleX,
		width:30 * scaleX,
		top:18 * scaleY,
		left:5 * scaleX,
		visible:false
	});
	win.add(leftImage);
	var rightImage = Ti.UI.createView({
		backgroundImage:'/images/icon_arrow_right.png',
		height:30 * scaleX,
		width:30 * scaleX,
		top:18 * scaleX,
		right:5
	});
	win.add(rightImage);
	if (isBlackberry) {
		rightImage.left = 300 * scaleX;
	}
	//
	// HORIZONTAL SCROLLING TABS
	//
	var scrollView = Titanium.UI.createScrollView({
		contentWidth:500 * scaleX,
		contentHeight:50 * scaleY,
		top:10 * scaleY,
		height:50 * scaleY,
		width:230 * scaleX,
		borderRadius:10,
		backgroundColor:'#13386c'
	
	});
	
	scrollView.addEventListener('scroll', function(e)
	{
		Ti.API.info('x ' + e.x + ' y ' + e.y);
	
		if (e.x > 50)
		{
			leftImage.show();
		}
		else
		{
			leftImage.hide();
		}
		if (e.x < 130)
		{
			rightImage.show();
		}
		else
		{
			rightImage.hide();
		}
	
	});
	
	win.add(scrollView);
	
	var view1 = Ti.UI.createView({
		backgroundColor:'#336699',
		borderRadius:20,borderWidth:1,borderColor:'#336699',
		width:40 * scaleX,
		height:40 * scaleY,
		left:10 * scaleX
	});
	scrollView.add(view1);
	var l1 = Ti.UI.createLabel({
		text:'1',
		font:{fontSize:13},
		color:'#fff',
		width:'auto',
		textAlign:'center',
		height:'auto'
	});
	view1.add(l1);
	
	var view2 = Ti.UI.createView({
		backgroundColor:'#336699',
		borderRadius:20,borderWidth:1,borderColor:'#336699',
		width:40 * scaleX,
		height:40 * scaleY,
		left:60 * scaleX
	});
	scrollView.add(view2);
	var l2 = Ti.UI.createLabel({
		text:'2',
		font:{fontSize:13},
		color:'#fff',
		width:'auto',
		textAlign:'center',
		height:'auto'
	});
	view2.add(l2);
	
	var view3 = Ti.UI.createView({
		backgroundColor:'#336699',
		borderRadius:20,borderWidth:1,borderColor:'#336699',
		width:40 * scaleX,
		height:40 * scaleY,
		left:110 * scaleX
	});
	scrollView.add(view3);
	
	var l3 = Ti.UI.createLabel({
		text:'3',
		font:{fontSize:13},
		color:'#fff',
		width:'auto',
		textAlign:'center',
		height:'auto'
	});
	view3.add(l3);
	
	var view4 = Ti.UI.createView({
		backgroundColor:'#336699',
		borderRadius:20,borderWidth:1,borderColor:'#336699',
		width:40 * scaleX,
		height:40 * scaleY,
		left:160 * scaleX
	});
	scrollView.add(view4);
	
	var l4 = Ti.UI.createLabel({
		text:'4',
		font:{fontSize:13},
		color:'#fff',
		width:'auto',
		textAlign:'center',
		height:'auto'
	});
	view4.add(l4);
	
	var view5 = Ti.UI.createView({
		backgroundColor:'#336699',
		borderRadius:20,borderWidth:1,borderColor:'#336699',
		width:40 * scaleX,
		height:40 * scaleY,
		left:210 * scaleX
	});
	scrollView.add(view5);
	
	var l5 = Ti.UI.createLabel({
		text:'5',
		font:{fontSize:13},
		color:'#fff',
		width:'auto',
		textAlign:'center',
		height:'auto'
	});
	view5.add(l5);
	
	var view6 = Ti.UI.createView({
		backgroundColor:'#336699',
		borderRadius:20,borderWidth:1,borderColor:'#336699',
		width:40 * scaleX,
		height:40 * scaleY,
		left:260 * scaleX
	});
	scrollView.add(view6);
	
	var l6 = Ti.UI.createLabel({
		text:'6',
		font:{fontSize:13},
		color:'#fff',
		width:'auto',
		textAlign:'center',
		height:'auto'
	});
	view6.add(l6);
	
	var view7 = Ti.UI.createView({
		backgroundColor:'#336699',
		borderRadius:20,borderWidth:1,borderColor:'#336699',
		width:40 * scaleX,
		height:40 * scaleY,
		left:310 * scaleX
	});
	scrollView.add(view7);
	
	var l7 = Ti.UI.createLabel({
		text:'7',
		font:{fontSize:13},
		color:'#fff',
		width:'auto',
		textAlign:'center',
		height:'auto'
	});
	view7.add(l7);
	
	var view8 = Ti.UI.createView({
		backgroundColor:'#336699',
		borderRadius:20,borderWidth:1,borderColor:'#336699',
		width:40 * scaleX,
		height:40 * scaleY,
		left:360 * scaleX
	});
	scrollView.add(view8);
	
	var l8 = Ti.UI.createLabel({
		text:'8',
		font:{fontSize:13},
		color:'#fff',
		width:'auto',
		textAlign:'center',
		height:'auto'
	});
	view8.add(l8);
	
	
	
	//
	// VERTICAL SCROLLING TABS
	//
	var scrollView2 = Titanium.UI.createScrollView({
		contentWidth:75 * scaleX,
		contentHeight:500 * scaleY,
		top:70 * scaleY,
		height:200 * scaleY,
		width:75 * scaleX,
		borderRadius:10,
		backgroundColor:'#13386c'
	});
	win.add(scrollView2);
	scrollView2.addEventListener('scroll', function(e)
	{
		for(v in e)
		{
			Ti.API.info('v ' + v + ' e[v] ' + e[v]);
		}
	});
	
	var view9 = Ti.UI.createView({
		backgroundColor:'#336699',
		borderRadius:20,borderWidth:1,borderColor:'#336699',
		width:40 * scaleX,
		height:40 * scaleY,
		top:10 * scaleY
	});
	scrollView2.add(view9);
	
	var l9 = Ti.UI.createLabel({
		text:'9',
		font:{fontSize:13},
		color:'#fff',
		width:'auto',
		textAlign:'center',
		height:'auto'
	});
	view9.add(l9);
	
	var view10 = Ti.UI.createView({
		backgroundColor:'#336699',
		borderRadius:20,borderWidth:1,borderColor:'#336699',
		width:40 * scaleX,
		height:40 * scaleY,
		top:60 * scaleY
	});
	scrollView2.add(view10);
	
	var l10 = Ti.UI.createLabel({
		text:'10',
		font:{fontSize:13},
		color:'#fff',
		width:'auto',
		textAlign:'center',
		height:'auto'
	});
	view10.add(l10);
	
	var view11 = Ti.UI.createView({
		backgroundColor:'#336699',
		borderRadius:20,borderWidth:1,borderColor:'#336699',
		width:40 * scaleX,
		height:40 * scaleY,
		top:110 * scaleY
	});
	scrollView2.add(view11);
	
	var l11 = Ti.UI.createLabel({
		text:'11',
		font:{fontSize:13},
		color:'#fff',
		width:'auto',
		textAlign:'center',
		height:'auto'
	});
	view11.add(l11);
	
	var view12 = Ti.UI.createView({
		backgroundColor:'#336699',
		borderRadius:20,borderWidth:1,borderColor:'#336699',
		width:40 * scaleX,
		height:40 * scaleY,
		top:160 * scaleY
	});
	scrollView2.add(view12);
	
	var l12 = Ti.UI.createLabel({
		text:'12',
		font:{fontSize:13},
		color:'#fff',
		width:'auto',
		textAlign:'center',
		height:'auto'
	});
	view12.add(l12);
	
	var view13 = Ti.UI.createView({
		backgroundColor:'#336699',
		borderRadius:20,borderWidth:1,borderColor:'#336699',
		width:40 * scaleX,
		height:40 * scaleY,
		top:210 * scaleY
	});
	scrollView2.add(view13);
	
	var l13 = Ti.UI.createLabel({
		text:'13',
		font:{fontSize:13},
		color:'#fff',
		width:'auto',
		textAlign:'center',
		height:'auto'
	});
	view13.add(l13);
	
	var view14 = Ti.UI.createView({
		backgroundColor:'#336699',
		borderRadius:20,borderWidth:1,borderColor:'#336699',
		width:40 * scaleX,
		height:40 * scaleY,
		top:260 * scaleY
	});
	scrollView2.add(view14);
	
	var l14 = Ti.UI.createLabel({
		text:'14',
		font:{fontSize:13},
		color:'#fff',
		width:'auto',
		textAlign:'center',
		height:'auto'
	});
	view14.add(l14);
	
	var view15 = Ti.UI.createView({
		backgroundColor:'#336699',
		borderRadius:20,borderWidth:1,borderColor:'#336699',
		width:40 * scaleX,
		height:40 * scaleY,
		top:310 * scaleY
	});
	scrollView2.add(view15);
	
	var l15 = Ti.UI.createLabel({
		text:'15',
		font:{fontSize:13},
		color:'#fff',
		width:'auto',
		textAlign:'center',
		height:'auto'
	});
	view15.add(l15);
	
	var view16 = Ti.UI.createView({
		backgroundColor:'#336699',
		borderRadius:20,borderWidth:1,borderColor:'#336699',
		width:40 * scaleX,
		height:40 * scaleY,
		top:360 * scaleY
	});
	scrollView2.add(view16);
	
	var l16 = Ti.UI.createLabel({
		text:'16',
		font:{fontSize:13},
		color:'#fff',
		width:'auto',
		textAlign:'center',
		height:'auto'
	});
	view16.add(l16);
	
	if (isBlackberry) {
		l1.width = 20 * scaleX;
		l1.height = 20 * scaleY;
		
		l2.width = 20 * scaleX;
		l2.height = 20 * scaleY;
		
		l3.width = 20 * scaleX;
		l3.height = 20 * scaleY;
		
		l4.width = 20 * scaleX;
		l4.height = 20 * scaleY;
		
		l5.width = 20 * scaleX;
		l5.height = 20 * scaleY;
		
		l6.width = 20 * scaleX;
		l6.height = 20 * scaleY;
		
		l7.width = 20 * scaleX;
		l7.height = 20 * scaleY;
		
		l8.width = 20 * scaleX;
		l8.height = 20 * scaleY;
		
		l9.width = 20 * scaleX;
		l9.height = 20 * scaleY;
		
		l10.width = 20 * scaleX;
		l10.height = 20 * scaleY;
		
		l11.width = 20 * scaleX;
		l11.height = 20 * scaleY;
		
		l12.width = 20 * scaleX;
		l12.height = 20 * scaleY;
		
		l13.width = 20 * scaleX;
		l13.height = 20 * scaleY;
		
		l14.width = 20 * scaleX;
		l14.height = 20 * scaleY;
		
		l15.width = 20 * scaleX;
		l15.height = 20 * scaleY;
		
		l16.width = 20 * scaleX;
		l16.height = 20 * scaleY;
	}
	
	win.add(scrollView);
	return win;
};

module.exports = scroll_view_tabs;