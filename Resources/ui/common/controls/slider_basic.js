function slider_basic() {
	var isBlackberry = Titanium.Platform.name === 'blackberry';
	var scaleX = 1;
	var scaleY = 1;
	if (isBlackberry) {
		scaleX += 1;
		scaleY += 2;
	}
	var win = Ti.UI.createWindow();
	
	//
	// BASIC SLIDER
	//
	var basicSliderLabel = Titanium.UI.createLabel({
		text:'Basic Slider - value = 0' ,
		color:'#999',
		font:{
			fontFamily:'Helvetica Neue',
			fontSize:15
		},
		textAlign:'center',
		top:10 * scaleY,
		width:300 * scaleX,
		height:'auto'
	});
	
	var basicSlider = Titanium.UI.createSlider({
		min:0,
		max:10,
		value:5,
		width:100 * scaleX,
		height:'auto',
		top:30 * scaleY,
		selectedThumbImage:'/images/slider_thumb.png',
		highlightedThumbImage:'/images/chat.png'
	});
	basicSlider.addEventListener('change',function(e)
	{
		basicSliderLabel.text = 'Basic Slider - value = ' + Math.round(e.value) + ' act val ' + Math.round(basicSlider.value);
	});
	// For #806
	basicSlider.addEventListener('touchstart', function(e)
	{
		Ti.API.info('Touch started: '+e.value);
	});
	basicSlider.addEventListener('touchend', function(e)
	{
		Ti.API.info('Touch ended: '+e.value);
	});
	basicSlider.value = 0; // For regression test purposes
	
	//
	// CUSTOM SLIDER
	//
	var customSliderLabel = Titanium.UI.createLabel({
		text:'Custom Slider - value = 25' ,
		color:'#999',
		font:{
			fontFamily:'Helvetica Neue',
			fontSize:15
		},
		textAlign:'center',
		top:70 * scaleY,
		width:300 * scaleX,
		height:'auto'
	});
	
	var customSlider = Titanium.UI.createSlider({
		min:0,
		max:100,
		value:25,
		width:268 * scaleX,
		height:11 * scaleY,
		top:90 * scaleY,
		leftTrackImage:'/images/slider_orangebar.png',
		rightTrackImage:'/images/slider_lightbar.png',
		thumbImage:'/images/slider_thumb.png'
	});
	customSlider.addEventListener('change',function(e)
	{
		customSliderLabel.text = 'Custom Slider - value = ' + Math.round(e.value);
	});
	//TODO remove this lines when height = 'auto' will be supported for Blackberry
	if (isBlackberry) {
		basicSliderLabel.height = 20 * scaleY;
		basicSlider.height = 100 * scaleY;
		basicSlider.width = Ti.Platform.displayCaps.platformWidth;
	}
	
	
	//
	// CHANGE SLIDER
	//
	var changeButton = Titanium.UI.createButton({
		title:'Change Basic Slider',
		height:40 * scaleY,
		width:200 * scaleX,
		top:120 * scaleY
	});
	changeButton.addEventListener('click', function()
	{
		basicSlider.value = 2;
		if (!isBlackberry) {
			basicSlider.width = 268 * scaleX;
			basicSlider.height = (Ti.Platform.osname == 'android') ? 50 * scaleY : 11 * scaleY;
			basicSlider.leftTrackImage = '/images/slider_orangebar.png';
			basicSlider.rightTrackImage = '/images/slider_lightbar.png';
			basicSlider.thumbImage = '/images/slider_thumb.png';
			basicSlider.highlightedThumbImage = '/images/slider_thumb.png';
		}
	});
	
	//
	// TOGGLE SLIDER VISIBILITY
	//
	var toggleButton = Titanium.UI.createButton({
		title:'Hide/Show Slider',
		height:40 * scaleY,
		width:200 * scaleX,
		top:170 * scaleY
	});
	
	var visible = true;
	toggleButton.addEventListener('click', function()
	{
		if (visible)
		{
			basicSlider.hide();
			customSlider.hide();
			visible=false;
		}
		else
		{
			basicSlider.show();
			customSlider.show();
			visible=true;
		}
	
	});
	
	
	//
	// SLIDER NAVBAR
	//
	var navbarButton = Titanium.UI.createButton({
		title:'Toggle Slider in Navbar',
		height:40 * scaleY,
		width:200 * scaleX,
		top:220 * scaleY
	});
	var inNavbar = false;
	navbarButton.addEventListener('click', function()
	{
		if (!inNavbar)
		{
			var navbarSlider = Titanium.UI.createSlider({
				min:0,
				max:10,
				value:5,
				width:100 * scaleX
			});
			win.setRightNavButton(navbarSlider);
			inNavbar = true;
		}
		else
		{
			win.rightNavButton = null;
			inNavbar = false;
		}
	});
	
	//
	// SLIDER TOOLBAR
	//
	var toolbarButton = Titanium.UI.createButton({
		title:'Toggle Slider in Toolbar',
		height:40 * scaleY,
		width:200 * scaleX,
		top:270 * scaleY
	
	});
	var inToolbar = false;
	toolbarButton.addEventListener('click', function()
	{
		if (!inToolbar)
		{
			var toolbarSlider = Titanium.UI.createSlider({
				min:0,
				max:10,
				value:5,
				width:200 * scaleX
			});
			win.setToolbar([toolbarSlider],{animated:true});
			inToolbar = true;
		}
		else
		{
			win.setToolbar(null,{animated:true});
			inToolbar = false;
		}
	});
	
	//
	// SLIDER TO TITLE CONTROL
	//
	var titleButton = Titanium.UI.createButton({
		title:'Toggle Slider in Title',
		height:40 * scaleY,
		width:200 * scaleX,
		top:320 * scaleY
	});
	
	
	var inTitle = false;
	titleButton.addEventListener('click', function()
	{
		if (inTitle)
		{
			win.titleControl = null;
			win.title = 'Slider';
			inTitle=false;
		}
		else
		{
			var titleSlider = Titanium.UI.createSlider({
				min:0,
				max:10,
				value:5,
				width:80 * scaleY,
				height:'auto'
			});
			win.titleControl = titleSlider;
			inTitle=true;
		}
	});
	
	win.add(basicSliderLabel);
	win.add(basicSlider);
	win.add(toggleButton);
	Ti.API.info('platform = ' + Titanium.Platform.osname);
	if (Titanium.Platform.osname == 'iphone' || Titanium.Platform.osname == 'ipad')
	{
		win.add(navbarButton);
		win.add(toolbarButton);
		win.add(titleButton);
		win.add(customSliderLabel);
		win.add(customSlider);
	}
	win.add(changeButton);
	
	return win;
}

module.exports = slider_basic;
