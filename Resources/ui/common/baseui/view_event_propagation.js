function view_evt_prop() {
	var isBlackberry = Titanium.Platform.name === 'blackberry';
	var scaleX = 1;
	var scaleY = 1;
	if (isBlackberry) {
		scaleX += 1;
		scaleY += 2;
	}
	var win = Titanium.UI.createWindow();
	win.backgroundColor = '#13386c';
	win.name = "window";
	
	var a = Ti.UI.createView({borderColor:'#133899',borderWidth:6,borderRadius:2,backgroundColor:'orange',width:100 * scaleX,height:100 * scaleX,top:10 * scaleX,name:"view a"});
	var b = Ti.UI.createView({borderColor:'#133899',borderWidth:6,borderRadius:2,backgroundColor:'purple',width:100 * scaleX,height:100 * scaleX,top:115 * scaleX,right:40,name:"view b"});
	var c = Ti.UI.createView({borderColor:'#133899',borderWidth:6,borderRadius:2,backgroundColor:'red',width:100 * scaleX,height:100 * scaleX,top:115 * scaleX,left:40 * scaleX,name:"view c"});
	var d = Ti.UI.createView({borderColor:'#133899',borderWidth:6,borderRadius:2,backgroundColor:'cyan',width:100 * scaleX,height:100 * scaleX,top:220 * scaleX,name:"view d"});
	
	//Separated creating label and adding it to the view in order to control label's width/height. 'auto' is not implemented for Blackberry yet
	var aLabel = Ti.UI.createLabel({name:"label a",color:'white',text:'A',height:'auto',width:'auto',font:{fontSize:48,fontWeight:'bold',fontFamily:'Helvetica Neue'}});
	var bLabel = Ti.UI.createLabel({name:"label b",color:'white',text:'B',height:'auto',width:'auto',font:{fontSize:48,fontWeight:'bold',fontFamily:'Helvetica Neue'}});
	var cLabel = Ti.UI.createLabel({name:"label c",color:'white',text:'C',height:'auto',width:'auto',font:{fontSize:48,fontWeight:'bold',fontFamily:'Helvetica Neue'}});
	var dLabel = Ti.UI.createLabel({name:"label d",color:'white',text:'D',height:'auto',width:'auto',font:{fontSize:48,fontWeight:'bold',fontFamily:'Helvetica Neue'}});
	a.add(aLabel);
	b.add(bLabel);
	c.add(cLabel);
	d.add(dLabel);
	
	var l = Ti.UI.createLabel({
		color:'white',
		font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
		bottom:5,
		textAlign:'center',
		text:'click anywhere',
		height:'auto',
		width:'auto'
	});
	
	var l2 = Ti.UI.createLabel({
		color:'white',
		font:{fontSize:14,fontFamily:'Helvetica Neue'},
		bottom:25,
		textAlign:'center',
		text:'',
		height:'auto',
		width:'auto'
	});
	
	//TODO review this part of code if layout height/widht - 'auto' and right/bottom properties will be implemented for BB
	if (isBlackberry) {
		a.left = 150 * scaleX;
		b.left = 250 * scaleX;
		d.left = a.left;
		
		aLabel.width = 95 * scaleX;
		aLabel.height = 20 * scaleY;
		
		bLabel.width = 95 * scaleX;
		bLabel.height = 20 * scaleY;
		
		cLabel.width = 95 * scaleX;
		cLabel.height = 20 * scaleY;
		
		dLabel.width = 95 * scaleX;
		dLabel.height = 20 * scaleY;
		
		l.width = Ti.Platform.displayCaps.platformWidth;
		l.height = 15 * scaleY;
		l.top = 300 * scaleY
		
		l2.width = Ti.Platform.displayCaps.platformWidth;
		l2.height = 15 * scaleY;
		l2.top = 280 * scaleY;
		
		alert('Titanium.Event.source is not supported for Blackberry yet');
	}
	win.add(a);
	win.add(b);
	win.add(c);
	win.add(d);
	win.add(l);
	win.add(l2);
	
	function clear(o)
	{
		var t  = o.text;
		setTimeout(function()
		{
			if (o.text == t)
			{
				o.text = "";
			}
		},2000);
	}
	
	win.addEventListener('click',function(ev)
	{
		l2.text = "window: You clicked on " +ev.source.name;
		clear(l2);
	});
	
	a.addEventListener('click',function(ev)
	{
		Ti.API.info(ev.source.widgetId);
		Ti.API.info(ev.source.parent.widgetId);
		l.text = "view: You clicked on " +ev.source.name;
		Ti.API.info('Clicked: '+ev.source.name);
		clear(l);
	});
	
	b.addEventListener('click',function(ev)
	{
		l.text = "view: You clicked on " +ev.source.name;
		Ti.API.info('Clicked: '+ev.source.name);	
		clear(l);
	});
	
	c.addEventListener('click',function(ev)
	{
		l.text = "view: You clicked on " +ev.source.name;
		Ti.API.info('Clicked: '+ev.source.name);	
		clear(l);
	});
	
	d.addEventListener('click',function(ev)
	{
		l.text = "view: You clicked on " +ev.source.name;
		Ti.API.info('Clicked: '+ev.source.name);	
		clear(l);
	});

	return win;
};

module.exports = view_evt_prop;