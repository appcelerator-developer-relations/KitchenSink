function view_evt_interaction(_args) {
	var win = Titanium.UI.createWindow({
		title:_args.title
	});
	
	
	// make a transparent view that obscures another view (sits on top)
	// but turn off touches against the view so that it won't explicitly
	// handle any interaction events against it. this means that the 
	// other view in the hiearchry should instead receive the touch event
	// which is view2.
	
	var view1 = Ti.UI.createView({
		width:200,
		height:200,
		touchEnabled:false
	});
	
	var view2 = Ti.UI.createView({
		width:200,
		height:200,
		borderRadius:10,
		backgroundColor:'purple'
	});
	
	var label = Ti.UI.createLabel({
		text:'Click on me',
		color:'white',
		font:{fontSize:15,fontWeight:'bold'},
		width:'auto',
		height:'auto'
	});
	
	view2.add(label);
	
	win.add(view2);
	win.add(view1);
	
	var l = Ti.UI.createLabel({
		text:'click on box',
		width:300,
		height:'auto',
		top:10,
		font:{fontSize:13}
	});
	win.add(l);
	var l2 = Ti.UI.createLabel({
		text:'click on label',
		width:300,
		height:'auto',
		top:25,
		font:{fontSize:13}
	});
	win.add(l2);
	view2.addEventListener('click',function()
	{
		l.text = "You were able to click on the box. Good!";
	
		setTimeout(function()
		{
			l.text = "click on box";
			
		},1000);
		
	});
	
	label.addEventListener('click',function()
	{
		l2.text = "You were able to click on the label. Good!";
	
		setTimeout(function()
		{
			l2.text = "click on label";
		},1000);
	});

	return win;
};

module.exports = view_evt_interaction;