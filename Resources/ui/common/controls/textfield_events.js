function textfield_events() {
	var isBlackberry = Titanium.Platform.name === 'blackberry';
	var scaleX = 1;
	var scaleY = 1;
	if (isBlackberry) {
		scaleX += 1;
		scaleY += 2;
	}
	var win = Ti.UI.createWindow();
	
	// initialize to all modes
	win.orientationModes = [
		Titanium.UI.PORTRAIT,
		Titanium.UI.LANDSCAPE_LEFT,
		Titanium.UI.LANDSCAPE_RIGHT
	]; 
	
	var scrolly;
	if (isBlackberry) {
		scrolly = Titanium.UI.createView({height:Ti.Platform.displayCaps.platformHeight, width: Ti.Platform.displayCaps.platformWidth});
	} else {
		scrolly = Titanium.UI.createScrollView({contentHeight:'auto'});
	}
	 
	win.add(scrolly);
	
	var tf1 = Titanium.UI.createTextField({
		color:'#336699',
		height:35 * scaleY,
		top:10 * scaleY,
		left:10 * scaleX,
		width:250 * scaleX,
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
	});
	
	var l = Titanium.UI.createLabel({
		top:50 * scaleY,
		left:10 * scaleX,
		width:300 * scaleX,
		height:'auto',
		color:'#777',
		font:{fontSize:13},
		text:'do something like click a button...'
	});
	scrolly.add(l);
	
	//
	// TEXT FIELD EVENTS (return, focus, blur, change)
	//
	tf1.addEventListener('return',function(e)
	{
		l.text = 'return received, val = ' + e.value;
		tf1.blur();
	});
	tf1.addEventListener('focus',function(e)
	{
		l.text = 'focus received, val = ' + e.value;
	});
	tf1.addEventListener('blur',function(e)
	{
		l.text = 'blur received, val = ' + e.value;	
	});
	tf1.addEventListener('change', function(e)
	{
		//l.text = 'change received, event val = ' + e.value + '\nfield val = ' + tf1.value;
		l.text = 'change received, field val = ' + tf1.value;	
	});
	
	scrolly.add(tf1);
	
	
	
	//
	// FOCUS
	//
	var focusLabel = Titanium.UI.createButton({
		top:100 * scaleY,
		height:40 * scaleY,
		width:200 * scaleX,
		title:'Focus'
	});
	scrolly.add(focusLabel);
	focusLabel.addEventListener('click', function()
	{
		tf1.focus();
	});
	
	//
	// BLUR
	//
	var blurLabel = Titanium.UI.createButton({
		top:150 * scaleY,
		height:40 * scaleY,
		width:200 * scaleX,
		title:'Blur'
	});
	scrolly.add(blurLabel);
	blurLabel.addEventListener('click', function()
	{
		tf1.blur();
	});
	
	//
	// HIDE/SHOW
	//
	var showHide = Titanium.UI.createButton({
		top:200 * scaleY,
		height:40 * scaleY,
		width:200 * scaleX,
		title:'Hide/Show'
	});
	scrolly.add(showHide);
	var visible = true;
	showHide.addEventListener('click', function()
	{
		if (!visible)
		{
			tf1.show();
			visible = true;
		}
		else
		{
			tf1.hide();
			visible = false;
		}
	});
	
	var instructions = Ti.UI.createLabel({
		text:'Rotate device while keyboard is up',
		bottom:10,
		height:30 * scaleY,
		color:'#777'
	});
	scrolly.add(instructions);
	
	if (isBlackberry) {
		l.height = 40 * scaleY;
		
		instructions.top = 300 * scaleY;
		
		focusLabel.enabled = false;
		blurLabel.enabled = false;
	}
	return win;
}

module.exports = textfield_events;
