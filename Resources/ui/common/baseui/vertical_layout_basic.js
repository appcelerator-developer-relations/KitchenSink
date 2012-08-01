function vertical_layout_basic() {
	var isBlackberry = Titanium.Platform.name === 'blackberry';
	var scaleX = 1;
	var scaleY = 1;
	if(isBlackberry)
	{
		scaleX += 1;
		scaleY += 2;
	}
	var win = Ti.UI.createWindow();
	win.layout = 'vertical';
	
	// HEADER
	var header = Ti.UI.createView({height:50,borderWidth:1,borderColor:'#999',backgroundColor:'white'});
	var headerLabel = Ti.UI.createLabel({color:'#777', top:10,textAlign:'center', height:'auto', text:'Header'});
	header.add(headerLabel);
	
	win.add(header);
	
	// BODY
	var body = Ti.UI.createView({height:Ti.UI.SIZE, layout:'vertical', backgroundColor:'#fff'});
	
	var bodyView1 = Ti.UI.createView({backgroundColor:'#336699', height:100, left:10, right:10});
	var bodyView2 = Ti.UI.createView({backgroundColor:'#ff0000', height:50, left:10, right:10, top:10});
	var bodyView3 = Ti.UI.createView({backgroundColor:'orange', height:50, left:10, right:10, top:10});
	body.add(bodyView1);
	body.add(bodyView2);
	body.add(bodyView3);
	
	win.add(body);
	
	// FOOTER
	var footer = Ti.UI.createView({height:50,borderWidth:1,borderColor:'#999',backgroundColor:'white'});
	var footerLabel = Ti.UI.createLabel({color:'#777', textAlign:'center', height:'auto', text:'Footer'});
	footer.add(footerLabel);
	
	win.add(footer);
	if (isBlackberry) {
		header.left = 1;
		header.top = 10 * scaleY;
		header.height = 50 * scaleY;
		header.width = Titanium.Platform.displayCaps.platformWidth;
		header.backgroundColor = '#DDD';
		
		headerLabel.height = 40 * scaleY;
		headerLabel.top = 10 * scaleY;
		
		body.top = 60 * scaleY;
		body.height = 190 * scaleY;
		body.width = Titanium.Platform.displayCaps.platformWidth;
		
		bodyView1.height = 80 * scaleY;
		bodyView1.left = 10 * scaleX;
		bodyView1.width = Titanium.Platform.displayCaps.platformWidth - 10 * scaleY;
		
		bodyView2.height = 40 * scaleY;
		bodyView2.left = 10 * scaleX;
		bodyView2.top = (10 + 80) * scaleY;
		bodyView2.width = Titanium.Platform.displayCaps.platformWidth - 10 * scaleY;
		
		bodyView3.height = 40 * scaleY;
		bodyView3.left = 10 * scaleX;
		bodyView3.top = (10 + 80 + 10 + 40) * scaleY;
		bodyView3.width = Titanium.Platform.displayCaps.platformWidth - 10 * scaleY;
		
		footer.top = 250 * scaleY;
		footer.height = 50 * scaleY;
		footer.width = Titanium.Platform.displayCaps.platformWidth;
		footer.backgroundColor = '#AAA';
		
		
		footerLabel.height = 40 * scaleY;
	}
	return win;
};

module.exports = vertical_layout_basic;