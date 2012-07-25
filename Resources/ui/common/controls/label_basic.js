function label_basic() {
	var isBlackberry = Titanium.Platform.name === 'blackberry';
	
	var win = Ti.UI.createWindow();
	
	var l1 = Titanium.UI.createLabel({
		id:'font_label_test',
		text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
		top:0,
		height:170,
		textAlign:'center'
	});
	
	win.add(l1);
	
	var lable2Properties = {
		text:'Appcelerator',
		height:50,
		width:'auto',
		shadowColor:'#aaa',
		shadowOffset:{x:5,y:5},
		color:'#900',
		font:{fontSize:48, fontStyle:'italic'},
		top:170,
		textAlign:'center'
	};
	
	if (isBlackberry)
	{
		lable2Properties.width = 550;
		delete lable2Properties.shadowColor;
		delete lable2Properties.shadowOffset;
	}
	
	var l2 = Titanium.UI.createLabel(lable2Properties);
	
	win.add(l2);
	
	var button1Properties = {
		title:'Hide/Show',
		height:40,
		width:200,
		top:230
	};
	var button2Properties = {
		title:'Change Label 2',
		height:40,
		width:200,
		top:280
	};
	
	if (isBlackberry)
	{
		button1Properties.height = 140;
		button1Properties.width = 390;

		button2Properties.height = 140;
		button2Properties.width = 390;
		
		l1.textAlign = Titanium.UI.TEXT_ALIGNMENT_CENTER;
		l2.width = 550;
	}
	var b1 = Titanium.UI.createButton(button1Properties);
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
	
	var b2 = Titanium.UI.createButton(button2Properties);
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
	
	if (!isBlackberry)
	{
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
		height:30,
		width:300,
		font:{fontSize:14},
		color:'#777',
		bottom:10
	});
	win.add(size);
	
	return win;
}

module.exports = label_basic;