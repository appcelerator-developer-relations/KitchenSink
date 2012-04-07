function ApplicationWindow(title) {
	var base = 'ui/tablet/ios/baseui/';
	Ti.include(
		base+'split_view_nav.js',
		base+'split_view_plain.js', 
		base+'nav_controller.js',
		base+'main_tests.js',
		base+'3298.js',
		base+'split_view_features.js'
	);
	/*
	var SVNav = require('ui/tablet/ios/baseui/split_view_nav.js'),
		SVNav = require('ui/tablet/ios/baseui/split_view_nav.js'),
		SVNav = require('ui/tablet/ios/baseui/split_view_nav.js'),
		SVNav = require('ui/tablet/ios/baseui/split_view_nav.js');
	*/

	var self = Ti.UI.createWindow({
		title:title,
		backgroundColor:'white'
	});
				
	var l = Ti.UI.createLabel({
		text:'Split Views cannot be closed, so if you run any of the first 3 tests, you will have to re-start the app.', 
		color:'#888',
		font:{fontSize:20},
		height:'auto',
		width:'auto',
		left:20,
		right:20,
		top:10
	});
	self.add(l);
	
	var b1 = Ti.UI.createButton({
		title:'Open Main Tests',
		width:300,
		height:50,
		top:100
	});
	b1.addEventListener('click', function()
	{
		MainTests.open();
	});
	self.add(b1);
	
	var b2 = Ti.UI.createButton({
		title:'Split View - Plain',
		width:300,
		height:50,
		top:170
	});
	b2.addEventListener('click', function()
	{
		SplitViewPlain.open();
	});
	self.add(b2);
	
	var b3 = Ti.UI.createButton({
		title:'Split View w/Nav Group',
		width:300,
		height:50,
		top:240
	});
	b3.addEventListener('click', function()
	{
		SplitViewNav.open();
	});
	self.add(b3);
	
	var b4 = Ti.UI.createButton({
		title:'Nav Group (Standalone)',
		width:300,
		height:50,
		top:310
	});
	b4.addEventListener('click', function()
	{
		NavController.open();
	});
	self.add(b4);
	
	var b5= Ti.UI.createButton({
		title:'Fixed Orientation',
		width:300,
		height:50,
		top:380
	});
	b5.addEventListener('click', function()
	{
		var w = Ti.UI.createWindow({backgroundColor:'#fff'});
		var l = Ti.UI.createLabel({text:'I should only be in Landscape'});
		w.add(l);
		w.orientationModes = [
			Titanium.UI.LANDSCAPE_LEFT,
			Titanium.UI.LANDSCAPE_RIGHT,
		];
		w.open();
	});
	self.add(b5);
	
	var b6 = Ti.UI.createButton({
		title:'Bug 3298',
		width:300,
		height:50,
		top:450
	});
	b6.addEventListener('click', function()
	{
		Test3298.open();
	});
	self.add(b6);
	
	var b7 = Ti.UI.createButton({
		title: 'Split view features',
		width:300,
		height:50,
		top:520
	});
	b7.addEventListener('click', function()
	{
		SplitFeatures.open();
	});
	self.add(b7);
		
	if (Ti.App.Properties.getBool('showNotice', true)){
		var alertNotice = Ti.UI.createAlertDialog({
			buttonNames: ['OK', 'Visit docs', 'Don\'t show again'],
			cancel:0,
			title: 'Notice',
			message: 'While this KitchenSink provides an extensive demonstration of the Titanium API, its structure is not recommended for production apps. Please refer to our documentation for more details.'
		});
		alertNotice.show();
		alertNotice.addEventListener('click', function(e){
			if(e.index === 1){
				Titanium.Platform.openURL('http://wiki.appcelerator.org/display/guides/Example+Applications');
			}
			if(e.index === 2){
				Ti.App.Properties.setBool('showNotice', false);
			}
		});
	}
	
	return self;
};

module.exports = ApplicationWindow;
