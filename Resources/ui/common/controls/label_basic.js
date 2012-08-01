function label_basic() {
	var isBlackberry = Titanium.Platform.name === 'blackberry';
	var scaleX = 1;
	var scaleY = 1;
	if (isBlackberry) {
		scaleX += 1;
		scaleY += 2;
	};
	var win = Ti.UI.createWindow();
	
	var l1 = Titanium.UI.createLabel({
		id:'font_label_test',
		text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
		top:0,
		height:170 * scaleY,
		textAlign:'center'
	});
	
	win.add(l1);
	
	var l2 = Titanium.UI.createLabel({
		text:'Appcelerator',
		height:50 * scaleY,
		width:'auto',
		shadowColor:'#aaa',
		shadowOffset:{x:5,y:5},
		color:'#900',
		font:{fontSize:48, fontStyle:'italic'},
		top:170 * scaleY,
		textAlign:'center'
	});
	
	if (isBlackberry) {
		l2.width = 400 * scaleX;		
	};
	
	win.add(l2);
	
	var b1 = Titanium.UI.createButton({
		title:'Hide/Show',
		height:40 * scaleY,
		width:200 * scaleX,
		top:230 * scaleY
	});
	var visible=true;
	b1.addEventListener('click', function()
	{
		if (visible)
		{
			l1.hide();
			l2.hide();
			visible=false;
		}
		else
		{
			l1.show();
			l2.show();
			visible=true;
		}
	});
	win.add(b1);
	
	var b2 = Titanium.UI.createButton({
		title:'Change Label 2',
		height:40 * scaleY,
		width:200 * scaleX,
		top:280 * scaleY
	});
	var changed=false;
	b2.addEventListener('click', function()
	{
		if (!changed)
		{
			l2.color = '#ff9900';
			l2.shadowColor = '#336699';
			l2.font = {fontSize:20};
			changed=true;
			size.text = (isBlackberry) ? l2.getHeight() + ' ' + l2.getWidth() :
										l2.size.height + ' ' + l2.size.width;  // where is size defined?
		}
		else
		{
			l2.color = '#900';
			l2.shadowColor = '#aaa';
			l2.font = {fontSize:48};
			size.text = (isBlackberry) ? l2.getHeight() + ' ' + l2.getWidth() : 
										l2.size.height + ' ' + l2.size.width;
			changed=false;
		}
	});
	win.add(b2);
	
	if (!isBlackberry) {
		var b3 = Titanium.UI.createButton({
			title:'Label 1 background',
			height:40,
			width:200,
			top:330
		});
		var bg = false;
		b3.addEventListener('click', function()
		{
			if (!bg) {
				l1.backgroundPaddingLeft = 10;
				l1.backgroundPaddingRight = 10;
				l1.backgroundPaddingTop = 10;
				l1.backgroundPaddingBottom = 10;
				l1.backgroundImage = '/images/chat.png';
				bg = true;
			}
			else {
				l1.backgroundImage = null;
				bg = false;
			}
		});
		win.add(b3);
	}
	
	var size = Ti.UI.createLabel({
		height:30 * scaleY,
		width:300 * scaleX,
		font:{fontSize:14},
		color:'#777',
		bottom:10
	});
	
	if (isBlackberry) {
		size.top = 330 * scaleY;
	}
	win.add(size);
	
	return win;
}

module.exports = label_basic;
