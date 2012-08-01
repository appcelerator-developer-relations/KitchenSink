function PhoneWindow(title) {
	var self = Ti.UI.createWindow({
		title:title,
		// BB TODO: this used to be white
		backgroundColor:'black'
	});
	
	var isMobileWeb = Titanium.Platform.osname == 'mobileweb';
	
	// create table view data object
	var data = [
		{title:'Play Movie', hasChild:true, test:'ui/common/phone/movie'},
		{title:'Vibrate', hasChild:true, test:'ui/common/phone/vibrate'},
		{title:'Geolocation', hasChild:true, test:'ui/common/phone/geolocation'},
		{title:'Accelerometer', hasChild:true, test:'ui/common/phone/accelerometer'}
	];
	
	data.push({title:'Sound', hasChild:!isMobileWeb, test:'ui/common/phone/sound', touchEnabled:!isMobileWeb, color:isMobileWeb?"#aaa":"#000"});
	data.push({title:'Photo Gallery', hasChild:!isMobileWeb, test:'ui/common/phone/photo_gallery', touchEnabled:!isMobileWeb, color:isMobileWeb?"#aaa":"#000"});
	
	data.push({title:'Orientation', hasChild:true, test:'ui/common/phone/orientation'});
	data.push({title:'Contacts', hasChild:true, test:'ui/common/phone/contacts'});
	
	if (Titanium.Platform.osname !== 'ipad') {
		data.push({title:'Camera', hasChild:!isMobileWeb, test:'ui/common/phone/camera', touchEnabled:!isMobileWeb, color:isMobileWeb?"#aaa":"#000"});
	}
	
	// add iphone specific tests
	if (Titanium.Platform.name == 'iPhone OS') {
		data.push({title:'Screenshot', hasChild:true, test:'ui/handheld/ios/phone/screenshot'});
		data.push({title:'Save to Gallery', hasChild:true, test:'ui/handheld/ios/phone/photo_gallery_save'});
	}

	if (Titanium.Platform.name !== 'android') {
		data.push({title:'Shake', hasChild:true, test:'ui/common/phone/shake'});
	}
	
	if (Titanium.Platform.name == 'iPhone OS') {
		if (Titanium.Platform.osname!='ipad')
		{
			data.push({title:'Record Video', hasChild:true, test:'ui/common/phone/record_video'});
		}
		data.push({title:'Music', hasChild:true, test:'ui/handheld/ios/phone/music'});
		data.push({title:'Proximity Events', hasChild:true, test:'/etc/todo'});
		data.push({title:'App Badge', hasChild:true, test:'ui/handheld/ios/phone/app_badge'});
		data.push({title:'Status Bar', hasChild:true, test:'ui/handheld/ios/phone/statusbar'});
		data.push({title:'Push Notifications', hasChild:true, test:'ui/handheld/ios/phone/push_notification'});
	}
	
	if (Titanium.Platform.name == 'android') {
		data.push({title:'Notfications', hasChild:true, test:'ui/handheld/android/phone/notification'});
	}
	
	// create table view
	for (var i = 0; i < data.length; i++ ) { data[i].color = '#000'; data[i].font = {fontWeight:'bold'} };
	var tableview = Titanium.UI.createTableView({
		data:data
	});
	
	// create table view event listener
	tableview.addEventListener('click', function(e) {
		if (e.rowData.test) {
			var ExampleWindow = require(e.rowData.test),
				win = new ExampleWindow({title:e.rowData.title,containingTab:self.containingTab});
			self.containingTab.open(win,{animated:true});
		}
	});
	
	// add table view to the window
	self.add(tableview);
	
	return self;
};

module.exports = PhoneWindow;
