function view_evt_prop() {
	var isBlackberry = Titanium.Platform.name === 'blackberry';
	var scaleX = 1;
	var scaleY = 1;
	if (isBlackberry) {
		scaleX += 1;
		scaleY += 1;
	}
	var win = Titanium.UI.createWindow();
	win.backgroundColor = '#13386c';
	win.name = "window";
	
	var a = Ti.UI.createView({borderColor:'#133899',borderWidth:6,borderRadius:2,backgroundColor:'orange',width:100 * scaleX,height:100 * scaleY,top:10 * scaleY,name:"view a"});
	var b = Ti.UI.createView({borderColor:'#133899',borderWidth:6,borderRadius:2,backgroundColor:'purple',width:100 * scaleX,height:100 * scaleY,top:115 * scaleY,right:40,name:"view b"});
	var c = Ti.UI.createView({borderColor:'#133899',borderWidth:6,borderRadius:2,backgroundColor:'red',width:100 * scaleX,height:100 * scaleY,top:115 * scaleY,left:40 * scaleX,name:"view c"});
	var d = Ti.UI.createView({borderColor:'#133899',borderWidth:6,borderRadius:2,backgroundColor:'cyan',width:100 * scaleX,height:100 * scaleY,top:220 * scaleY,name:"view d"});
	//TODO remove check in height/width attributes when value 'auto' will be supported for Blackberry.
	a.add(Ti.UI.createLabel({name:"label a",color:'white',text:'A',height:(!isBlackberry) ? 'auto' : 40 * scaleY,width:(!isBlackberry) ? 'auto' : 95 * scaleX,font:{fontSize:48,fontWeight:'bold',fontFamily:'Helvetica Neue'}}));
	b.add(Ti.UI.createLabel({name:"label b",color:'white',text:'B',height:(!isBlackberry) ? 'auto' : 40 * scaleY,width:(!isBlackberry) ? 'auto' : 95 * scaleX,font:{fontSize:48,fontWeight:'bold',fontFamily:'Helvetica Neue'}}));
	c.add(Ti.UI.createLabel({name:"label c",color:'white',text:'C',height:(!isBlackberry) ? 'auto' : 40 * scaleY,width:(!isBlackberry) ? 'auto' : 95 * scaleX,font:{fontSize:48,fontWeight:'bold',fontFamily:'Helvetica Neue'}}));
	d.add(Ti.UI.createLabel({name:"label d",color:'white',text:'D',height:(!isBlackberry) ? 'auto' : 40 * scaleY,width:(!isBlackberry) ? 'auto' : 95 * scaleX,font:{fontSize:48,fontWeight:'bold',fontFamily:'Helvetica Neue'}}));
	
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
		a.left = 145 * scaleX;
		b.left = 250 * scaleX;
		d.left = a.left;
		
		l.width = Ti.Platform.displayCaps.platformWidth;
		l.height = 30 * scaleY;
		l.top = 350 * scaleY
		
		l2.width = Ti.Platform.displayCaps.platformWidth;
		l2.height = 30 * scaleY;
		l2.top = 330 * scaleY;
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
		},1000);
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