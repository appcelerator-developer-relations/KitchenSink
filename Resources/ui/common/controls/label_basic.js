function label_basic() {
	var isBlackberry = Titanium.Platform.name == 'blackberry';
	
	var win = Ti.UI.createWindow();
	
	var l1 = Titanium.UI.createLabel({
		id:'font_label_test',
		text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
		top:0,
		height:170,		
		textAlign:Titanium.UI.TEXT_ALIGNMENT_CENTER
	});
	
	win.add(l1);	
	
	var lable2Properties = {
		text:'Appcelerator',
		height:50,
		width:550,
		color:'#900',		
		font:{fontSize:48, fontStyle:'italic'},
		top:170,
		textAlign:'center'
	}
	
	if( !isBlackberry )
	{		
		lable2Properties.shadowColor = '#aaa';
		lable2Properties.shadowOffset = {x:5,y:5};		
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
	
	if( isBlackberry )
	{
		button1Properties.height=140;
		button1Properties.width=390;
		
		button2Properties.height=140;
		button2Properties.width=390;
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
	
	var sizeLabel_properties = {		
		height:30,
		width:300,
		font:{fontSize:14},
		color:'#777'		
	};
	
	if( !isBlackberry)
	{
		sizeLabel_properties.bottom = 10;
	}
	
	var size = Ti.UI.createLabel(sizeLabel_properties);
	win.add(size);
	
	b2.addEventListener('click', function()
	{		
		if (!changed)
		{			
			l2.color = '#ff9900';
			if( !isBlackberry )			{				l2.shadowColor = '#336699';			}				
			l2.font = {fontSize:20};
			changed=true;
			size.text = l2.getHeight() + ' ' + l2.getWidth();  // where is size defined?
		}
		else
		{					
			l2.color = '#900';			
			if( !isBlackberry )			{				l2.shadowColor = '#aaa';			}
			l2.font = {fontSize:48};			
			size.text = l2.getHeight() + ' ' + l2.getWidth();
			changed=false;
		}
	});
	win.add(b2);
	
	if( !isBlackberry )
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
	/*
	if ( isBlackberry )
	{
		var b4 = Titanium.UI.createButton({
			title:'Change Opacity',
			height:140,
			width:390,
			top:330
		});
		var och = false;
		b4.addEventListener('click', function()
		{
			if (!och) {
				l2.setOpacity(0.5);
				och = true;
			}
			else {
				l2.setOpacity(1);
				och = false;
			}
		});
		win.add(b4);	
		
		var b5 = Titanium.UI.createButton({
			title:'Test text Align',
			height:140,
			width:390,
			top:330
		});
		var tch = false;
		b5.addEventListener('click', function()
		{			
			
			if (!tch) {
				l2.setTextAlign(Titanium.UI.TEXT_ALIGNMENT_LEFT);
				l2.setLeft(300);
				l2.setText('new text');
				tch = true;
			}
			else {
				l2.setTextAlign(Titanium.UI.TEXT_ALIGNMENT_CENTER);
				l2.setLeft(0);
				l2.setText('Appcelerator');
				tch = false;				
			}
		});
		win.add(b5);
		
		var b6 = Titanium.UI.createButton({
			title:'Test Add CHild',
			height:140,
			width:390,
			top:330
		});
		var childAdded = false;
		
		var childLabel1 = Titanium.UI.createLabel({			
			text:'I am child Label',			
			height:50
		});
		l1.add(childLabel1);
		b6.addEventListener('click', function()
		{					
			if (!childAdded) {
				l1.add(childLabel1);	
				alert(l1.children.length);			
				childAdded = true;
			}
			else {
				l1.remove(childLabel1);
				alert(l1.children.length);
				childAdded = false;				
			}
		});
		win.add(b6);			
	}
	*/
	
	return win;
}

module.exports = label_basic;