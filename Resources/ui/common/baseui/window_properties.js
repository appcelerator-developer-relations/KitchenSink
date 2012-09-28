function win_props() {
	var isBlackberry = Titanium.Platform.name === 'blackberry';
	var scaleX = 1;
	var scaleY = 1;
	if (isBlackberry) {
		scaleX += 1;
		scaleY += 2;
	}
	// current window
	var win = Titanium.UI.createWindow();
	
	//
	// BACKGROUND COLOR
	//
	var button = Titanium.UI.createButton({
		title:'Change BG Color',
		width:isBlackberry ? 'auto' : 220,
		height:isBlackberry ? 'auto' : 40,
		top:10 * scaleY
	});
	button.addEventListener('click', function()
	{
		win.backgroundImage = null;
		win.backgroundColor = '#336699';
	});
	win.add(button);
	
	//
	// BACKGROUND IMAGE
	//
	var buttonImage = Titanium.UI.createButton({
		title:'Change BG Image',
		width:isBlackberry ? 'auto' : 220,
		height:isBlackberry ? 'auto' : 40,
		top:60 * scaleY
	});
	buttonImage.addEventListener('click', function()
	{
		win.backgroundImage = '/images/bg.png';
	});
	win.add(buttonImage);
	
	//
	// TOGGLE WIDTH AND HEIGHT 
	//
	var buttonWidthHeight = Titanium.UI.createButton({
		title:'Toggle Height/Width',
		width:isBlackberry ? 'auto' : 220,
		height:isBlackberry ? 'auto' : 40,
		top:110 * scaleY
	});
	var full=true;
	buttonWidthHeight.addEventListener('click', function()
	{
		Ti.API.info('in width height');
		if (full)
		{
			win.height = 300 * scaleY;
			win.width = 300 * scaleX;
			win.backgroundColor = 'black';
			full=false;
		}
		else
		{
			// unset them to go back to previous layout
			win.height = null;
			win.width = null;
			if (isBlackberry) {
				//setting window height and width null is not showing window on the full device length and width
				win.height = Ti.Platform.displayCaps.platformHeight;
				win.width = Ti.Platform.displayCaps.platformWidth;
			}
			win.backgroundColor = null;
			full=true;
		}
	});
	win.add(buttonWidthHeight);
	
	
	
	//
	// TOGGLE OPACITY PROPERTY
	//
	var buttonOpacity = Titanium.UI.createButton({
		title:'Toggle Opacity',
		width:isBlackberry ? 'auto' : 220,
		height:isBlackberry ? 'auto' : 40,
		top:160 * scaleY
	});
	var opacity=true;
	buttonOpacity.addEventListener('click', function()
	{
		if (opacity)
		{
			win.opacity = 0.7;
			opacity=false;
		}
		else
		{
			win.opacity = 1.0;
			opacity=true;
		}
	});
	win.add(buttonOpacity);
	
	
	//
	// LAYOUT AND DIMENSION PROPERTIES
	//
	var buttonLayout = Titanium.UI.createButton({
		title:'Layout/Dimension Properties',
		width:220,
		height:40,
		top:210
	});
	var layout=true;
	var win1 = null;
	var win2 = null;
	buttonLayout.addEventListener('click', function()
	{
		if (layout)
		{
				win1 = Titanium.UI.createWindow({
					height:50,
					width:200,
					bottom:50,
					left:10,
					backgroundColor:'#336699',
					borderRadius:10,
					zIndex:3
				});
				win2 = Titanium.UI.createWindow({
					height:50,
					width:200,
					bottom:60,
					left:20,
					backgroundColor:'pink',
					borderRadius:10,
					zIndex:1
				});
			
			win1.open();
			win2.open();
			layout=false;
			win.addEventListener('close', function() {
				win1.close();
				win2.close();
				layout=true;
			});
		}
		else
		{
			win1.close();
			win2.close();
			layout=true;
		}
	});
	win.add(buttonLayout);
	
	//
	// TOGGLE BORDER PROPERTIES
	//
	var buttonBorder = Titanium.UI.createButton({
		title:'Toggle Border Properties',
		width:220,
		height:40,
		top:260
	});
	var border=true;
	buttonBorder.addEventListener('click', function()
	{
		if (border)
		{
			win.borderWidth = 5;
			win.borderColor = '#999';
			win.borderRadius = 10;
			border=false;
		}
		else
		{
			win.borderWidth = 0;
			win.borderColor = null;
			win.borderRadius = 0;
			border=true;
		}
	});
	
	// add iphone specific tests
	if (Titanium.Platform.name == 'iPhone OS')
	{
		win.add(buttonBorder);
	}
	if (isBlackberry) {
		buttonImage.enabled = false;
		/* On BB a window covers the whole screen and masks everything underneath */
		win.remove(buttonLayout);
	}
	
	return win;
};

module.exports = win_props;
