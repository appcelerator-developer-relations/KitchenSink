function tialert() {
	var isBlackberry = Titanium.Platform.name === 'blackberry';
	var scaleX = 1;
	var scaleY = 1;
	if (isBlackberry) {
		scaleX += 1;
		scaleY += 2;
	};
	var win = Titanium.UI.createWindow();
	
	//
	// GENERIC ALERT
	//
	var a = Titanium.UI.createAlertDialog({
		title:'Alert Test',
		message:'Hello World'
	});
	
	var l = Titanium.UI.createLabel({
		text:'I will tell you which alert buttons you clicked',
		textAlign:'center',
		bottom:80,
		color:'#336699',
		font:{fontSize:13},
		width:'auto',
		height:'auto'
	});
	
	a.addEventListener('click', function(e)
	{
		if (Ti.Platform.osname === 'android' && a.buttonNames === null) {
			l.text = '(There was no button to click)';
		} else {
			l.text = 'You clicked ' + e.index;
		}
	});
	
	//
	// GENERIC LABEL
	//
	win.add(l);
	
	//
	// SIMPLE ALERT
	//
	var button1 = Titanium.UI.createButton({
		title:'Basic Alert',
		height:40 * scaleY,
		width:200 * scaleX,
		top:10 * scaleY
	});
	
	button1.addEventListener('click', function()
	{
		a.buttonNames = null; // unset in case you did 2/3rd and then back to 1st
		if (Ti.Platform.osname === 'android') {
			a.message = 'Basic Alert';
		} else if(isBlackberry){
			a.message = 'Two Buttons';
		} else {
			a.message = 'One Button';
		}
		a.show();
	});
	
	win.add(button1);
	
	//
	//  ALERT WITH 2 BUTTONS
	//
	var button2 = Titanium.UI.createButton({
		title:'Alert 2 Buttons',
		height:40 * scaleY,
		width:200 * scaleX,
		top:60 * scaleY
	});
	
	button2.addEventListener('click', function()
	{
		a.message = 'Two Buttons';
		a.buttonNames = ['OK','Cancel'];
		a.cancel = 1;
		a.show();
		
	});
	
	win.add(button2);
	
	
	//
	//  ALERT WITH 4 BUTTONS
	//
	var button3 = Titanium.UI.createButton({
		title:'Alert 3 Buttons',
		height:40 * scaleY,
		width:200 * scaleX,
		top:110 * scaleY
	});
	
	button3.addEventListener('click', function()
	{
		a.message = 'Three Buttons';
		a.buttonNames = ['One', 'Two','Three'];
		a.cancel = 1;
		a.show();
	});
	
	win.add(button3);
	
	
	//
	//  Double alert
	//
	var button4 = Titanium.UI.createButton({
		title:'Double Alert',
		height:40 * scaleY,
		width:200 * scaleX,
		top:160 * scaleY
	});
	
	button4.addEventListener('click', function()
	{
		// test firing 2 alerts in a row, should show the
		// first and after you click OK, should then show the next
		alert("You should see this first");
		alert("Now you should see this one, assuming you dismissed the first alert");
	});
	
	win.add(button4);
	
	
	//
	//  Cancellable alert
	//
	var button5 = Titanium.UI.createButton({
		title:'Cancel Alert',
		height:40 * scaleY,
		width:200 * scaleX,
		top:210 * scaleY
	});
	
	button5.addEventListener('click', function()
	{
		var a = Titanium.UI.createAlertDialog({
			title:'Alert Test',
			message:'You should see and it should hide automatically in about 2 seconds or when you suspend.'
		});
		a.show();
		setTimeout(function()
		{
			a.hide();
		},2000);
	});
	
	win.add(button5);
	
	//TODO review this part of code if layout height/widht - 'auto' and right/bottom properties will be implemented for BB
	if (isBlackberry) {
		l.top = 280 * scaleY;
		l.width = 200 * scaleX;
		l.height = 40 * scaleY;
	}
	return win;
};

module.exports = tialert;
