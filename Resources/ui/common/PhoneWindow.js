function PhoneWindow(title) {
	var self = Ti.UI.createWindow({
		title:title,
		backgroundColor:'white'
	});
	
	// create table view data object
	var data = [
		{title:'Play Movie', hasChild:true, test:'ui/common/phone/movie'},
		{title:'Vibrate', hasChild:true, test:'ui/common/phone/vibrate'},
		{title:'Geolocation', hasChild:true, test:'ui/common/phone/geolocation'},
		{title:'Accelerometer', hasChild:true, test:'ui/common/phone/accelerometer'},
		{title:'Sound', hasChild:true, test:'ui/common/phone/sound'},
		{title:'Photo Gallery', hasChild:true, test:'ui/common/phone/photo_gallery'}
	];
	
	data.push({title:'Orientation', hasChild:true, test:'ui/common/phone/orientation'});
	data.push({title:'Contacts', hasChild:true, test:'ui/common/phone/contacts'});
	
	if (Titanium.Platform.osname!='ipad') {
		data.push({title:'Camera', hasChild:true, test:'ui/common/phone/camera'});
	}
	
	// add iphone specific tests
	if (Titanium.Platform.name == 'iPhone OS') {
		data.push({title:'Screenshot', hasChild:true, test:'ui/handheld/ios/phone/screenshot'});
		data.push({title:'Save to Gallery', hasChild:true, test:'ui/handheld/ios/phone/photo_gallery_save'});
		data.push({title:'Shake', hasChild:true, test:'ui/handheld/ios/phone/shake'});
		if (Titanium.Platform.osname!='ipad')
		{
			data.push({title:'Record Video', hasChild:true, test:'ui/common/phone/record_video'});
		}
		data.push({title:'Music', hasChild:true, test:'ui/handheld/ios/phone/music'});
		data.push({title:'Proximity Events', hasChild:true, test:'ui/handheld/ios/phone/todo'});
		data.push({title:'App Badge', hasChild:true, test:'ui/handheld/ios/phone/app_badge'});
		data.push({title:'Status Bar', hasChild:true, test:'ui/handheld/ios/phone/statusbar'});
		data.push({title:'Push Notifications', hasChild:true, test:'ui/handheld/ios/phone/push_notification'});
	}
	
	if (Titanium.Platform.name == 'android') {
		data.push({title:'Notfications', hasChild:true, test:'ui/handheld/android/phone/notification'});
	}
	
	// create table view
	var tableview = Titanium.UI.createTableView({
		data:data
	});
	
	// create table view event listener
	tableview.addEventListener('click', function(e) {
		if (e.rowData.test) {
			var ExampleWindow = require(e.rowData.test),
				win = new ExampleWindow(e.rowData.title);
			self.containingTab.open(win,{animated:true});
		}
	});
	
	// add table view to the window
	self.add(tableview);
	
	return self;
};

module.exports = PhoneWindow;
