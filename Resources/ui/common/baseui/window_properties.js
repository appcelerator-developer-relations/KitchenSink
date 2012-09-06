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
		width:220 * scaleX,
		height:40 * scaleY,
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
		width:220 * scaleX,
		height:40 * scaleY,
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
		width:220 * scaleX,
		height:40 * scaleY,
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
		width:220 * scaleX,
		height:40 * scaleY,
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
		width:220 * scaleX,
		height:40 * scaleY,
		top:210 * scaleY 
	});
	var layout=true;
	var win1 = null;
	var win2 = null;
	buttonLayout.addEventListener('click', function()
	{	
		if (layout)
		{
			//TODO remove this when TIMOB-10524 bug will be fixed
			if (!isBlackberry) {
				win1 = Titanium.UI.createWindow({
					height:50 * scaleY,
					width:200 * scaleX,
					bottom:50 * scaleY,
					left:10 * scaleX,
					backgroundColor:'#336699',
					borderRadius:10,
					zIndex:3
				});
				win2 = Titanium.UI.createWindow({
					height:50 * scaleY,
					width:200 * scaleX,
					bottom:60 * scaleY,
					left:20 * scaleX,
					backgroundColor:'pink',
					borderRadius:10,
					zIndex:1
				});
			} else {
				win1 = Titanium.UI.createWindow({
					height:50 * scaleY,
					width:200 * scaleX,
					bottom:50 * scaleY,
					left:10 * scaleX,
					backgroundColor:'#336699',
					borderRadius:10
				});
				win2 = Titanium.UI.createWindow({
					height:50 * scaleY,
					width:200 * scaleX,
					bottom:60 * scaleY,
					left:20 * scaleX,
					backgroundColor:'pink',
					borderRadius:10
				});
			}
			
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
		width:220 * scaleX,
		height:40 * scaleY,
		top:260 * scaleY
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
	}
	
	return win;
};

module.exports = win_props;