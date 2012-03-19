function PhoneWindow(title) {
	var self = Ti.UI.createWindow({
		title:title,
		backgroundColor:'white'
	});
	
	// create table view data object
	var data = [
		{title:'Play Movie', hasChild:true, test:'ui/common/phone/movie.js'},
		{title:'Vibrate', hasChild:true, test:'ui/common/phone/vibrate.js'},
		{title:'Geolocation', hasChild:true, test:'ui/common/phone/geolocation.js'},
		{title:'Accelerometer', hasChild:true, test:'ui/common/phone/accelerometer.js'},
		{title:'Sound', hasChild:true, test:'ui/common/phone/sound.js'},
		{title:'Photo Gallery', hasChild:true, test:'ui/common/phone/photo_gallery.js'}
	];
	
	data.push({title:'Orientation', hasChild:true, test:'ui/common/phone/orientation.js'});
	data.push({title:'Contacts', hasChild:true, test:'ui/common/phone/contacts.js'});
	
	if (Titanium.Platform.osname!='ipad') {
		data.push({title:'Camera', hasChild:true, test:'ui/common/phone/camera.js'});
	}
	
	// add iphone specific tests
	if (Titanium.Platform.name == 'iPhone OS') {
		data.push({title:'Screenshot', hasChild:true, test:'ui/handheld/ios/phone/screenshot.js'});
		data.push({title:'Save to Gallery', hasChild:true, test:'ui/handheld/ios/phone/photo_gallery_save.js'});
		data.push({title:'Shake', hasChild:true, test:'ui/handheld/ios/phone/shake.js'});
		if (Titanium.Platform.osname!='ipad')
		{
			data.push({title:'Record Video', hasChild:true, test:'ui/common/phone/record_video.js'});
		}
		data.push({title:'Music', hasChild:true, test:'ui/handheld/ios/phone/music.js'});
		data.push({title:'Proximity Events', hasChild:true, test:'ui/handheld/ios/phone/todo.js'});
		data.push({title:'App Badge', hasChild:true, test:'ui/handheld/ios/phone/app_badge.js'});
		data.push({title:'Status Bar', hasChild:true, test:'ui/handheld/ios/phone/statusbar.js'});
		data.push({title:'Push Notifications', hasChild:true, test:'ui/handheld/ios/phone/push_notification.js'});
	}
	
	if (Titanium.Platform.name == 'android') {
		data.push({title:'Notfications', hasChild:true, test:'ui/handheld/android/phone/notification.js'});
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
			Titanium.UI.currentTab.open(win,{animated:true});
		}
	});
	
	// add table view to the window
	self.add(tableview);
	
	return self;
};

module.exports = PhoneWindow;
