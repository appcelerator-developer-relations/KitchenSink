function ApplicationTabGroup() {
	//create module instance
	var self = Ti.UI.createTabGroup(),
		BaseUIWindow = require('ui/common/BaseUIWindow'),
		ControlsWindow = require('ui/common/ControlsWindow'),
		PhoneWindow = require('ui/common/PhoneWindow'),
		PlatformWindow = require('ui/common/PlatformWindow'),
		MashupsWindow = require('ui/common/MashupsWindow');
		//MessageWindow = require('ui/common/MessageWindow');
	
	//create app tabs
	var baseUIWin = new BaseUIWindow(L('base_ui_title')),
		controlsWin = new ControlsWindow(L('controls_win_title')),
		phoneWin = new PhoneWindow(L('phone_win_title')),
		platformWin = new PlatformWindow(L('platform_win_title')),
		mashupsWin = new MashupsWindow(L('mashups_win_title'));
		//messageWin = new MessageWindow();
	
	var baseUITab = Ti.UI.createTab({
		title: L('base_ui_title'),
		icon: '/images/tabs/KS_nav_ui.png',
		window: baseUIWin
	});
	baseUIWin.containingTab = baseUITab;
	
	var controlsTab = Ti.UI.createTab({
		title: L('controls_win_title'),
		icon: '/images/tabs/KS_nav_views.png',
		window: controlsWin
	});
	controlsWin.containingTab = controlsTab;
	
	var phoneTab = Ti.UI.createTab({
		title:L('phone_win_title'),
		icon:'/images/tabs/KS_nav_phone.png',
		window:phoneWin
	});
	phoneWin.containingTab = phoneTab;
	
	var platformTab = Ti.UI.createTab({
		title:L('platform_win_title'),
		icon:'/images/tabs/KS_nav_platform.png',
		window:platformWin
	});
	platformWin.containingTab = platformTab;
	
	var mashupsTab = Ti.UI.createTab({
		title:L('mashups_win_title'),
		icon:'/images/tabs/KS_nav_mashup.png',
		window:mashupsWin
	});
	mashupsWin.containingTab = mashupsTab;
	
	self.addTab(baseUITab);
	self.addTab(controlsTab);
	self.addTab(phoneTab);
	self.addTab(platformTab);
	self.addTab(mashupsTab);
	
	self.addEventListener('open',function() {
		Titanium.UI.setBackgroundColor('#fff');
	});
	self.setActiveTab(1);
	
	/*
	self.addEventListener('close', function() {
		messageWin.setLabel('tab group close event');
		messageWin.open();
		
		if (Ti.Platform.osname == "iphone") {
			self.open();
		}
		
		setTimeout(function() {
			messageWin.close({opacity:0,duration:500});
		},1000);
	});

	self.addEventListener('open', function(e) {
		messageWin.setLabel('tab group open event');
		messageWin.open();
		setTimeout(function() {
			messageWin.close({opacity:0,duration:500});
		},1000);	
	});
	
	self.addEventListener('focus', function(e) {
		messageWin.setLabel('tab changed to ' + e.index + ' old index ' + e.previousIndex);
		messageWin.open();
		setTimeout(function() {
			Ti.API.info('tab ' + e.tab.title  + ' prevTab = ' + (e.previousTab ? e.previousTab.title : null));
			messageWin.setLabel('active title ' + e.tab.title + ' old title ' + (e.previousTab ? e.previousTab.title : null));
		},1000);
	
		setTimeout(function() {
			messageWin.close({opacity:0,duration:500});
		},2000);	
	});
	
	// blur event listener for tracking tab changes
	self.addEventListener('blur', function(e) {
		Titanium.API.info('tab blur - new index ' + e.index + ' old index ' + e.previousIndex);
	});
	*/
	
	return self;
};

module.exports = ApplicationTabGroup;
