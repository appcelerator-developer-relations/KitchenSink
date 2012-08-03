function horizontal_layout() {
	var isBlackberry = Titanium.Platform.name === 'blackberry';
	var scaleX = 1;
	var scaleY = 1;
	if (isBlackberry) {
		scaleX += 1;
		scaleY += 2;
	}
	var win = Ti.UI.createWindow();
	
	var view = Ti.UI.createView({
		height:300 * scaleY,
		width:320 * scaleX,
		layout:'horizontal'
	});
	win.add(view);
	
	var l1 = Ti.UI.createLabel({
		text:'I am the first label',
		left:5,
		width:'auto',
		height:20 * scaleY
	});
	
	view.add(l1);
	
	var l2 = Ti.UI.createLabel({
		text:'I am the second label',
		left:2,
		width:'auto',
		height:20 * scaleY
	});
	
	view.add(l2);
	
	var l3 = Ti.UI.createLabel({
		text:'I am the third label',
		left:2,
		width:'auto',
		height:20 * scaleY
	});
	
	if (isBlackberry) {
		l1.color = 'white';
		l2.color = 'white';
		l3.color = 'white';
		//TODO review this part of code if layout height/widht - 'auto' and right/bottom properties will be implemented for BB
		l1.width = 150 * scaleX;
		l2.width = 150 * scaleX;
		l3.width = 150 * scaleX;
		alert('Blackberry doesn\'t support View.layout - vertical yet');
	}
	view.add(l3);
	return win;
};

module.exports = horizontal_layout;