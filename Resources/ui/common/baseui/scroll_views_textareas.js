function scroll_view_textarea() {
	var isBlackberry = Titanium.Platform.name === 'blackberry';
	var scaleX = 1;
	var scaleY = 1;
	if (isBlackberry) {
		scaleX += 1;
		scaleY += 2;
	}
	var win = Ti.UI.createWindow();
	
	var scrollView = Ti.UI.createScrollView({
		contentHeight:'auto',
		contentWidth:'auto'
	});
	
	win.add(scrollView);
	
	var ta1 = Titanium.UI.createTextArea({
		value:'I am a textarea',
		height:100 * scaleY,
		width:300 * scaleX,
		top:10 * scaleY,
		font:{fontSize:20,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5
	});
	scrollView.add(ta1);
	
	var ta2 = Titanium.UI.createTextArea({
		value:'I am a textarea',
		height:100 * scaleY,
		width:300 * scaleX,
		top:120 * scaleY,
		font:{fontSize:20,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#555',
		borderRadius:5
	});
	scrollView.add(ta2);
	
	var ta2 = Titanium.UI.createTextArea({
		value:'I am a textarea',
		height:100 * scaleY,
		width:300 * scaleX,
		top:230 * scaleY,
		font:{fontSize:20,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#555',
		borderRadius:5
	});
	scrollView.add(ta2);
	return win;
};

module.exports = scroll_view_textarea;