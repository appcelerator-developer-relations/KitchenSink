function PlatformWindow(title) {
	var self = Ti.UI.createWindow({
		title:title,
		backgroundColor:'white'
	});
	
	// create table view data object
	var data = [
		{title:'XHR', hasChild:true, test:'ui/common/platform/xhr.js'},
		{title:'Network', hasChild:true, test:'ui/common/platform/network.js'},
		{title:'Common JS', hasChild:true, test:'ui/common/platform/commonjs.js'},
		{title:'Logging', hasChild:true, test:'ui/common/platform/logging.js'},
		{title:'Application Data', hasChild:true, test:'ui/common/platform/app_data.js'},
		{title:'Application Events', hasChild:true, test:'ui/common/platform/app_events.js'},
		{title:'Properties API', hasChild:true, test:'ui/common/platform/properties.js'},
		{title:'Database', hasChild:true, test:'ui/common/platform/database.js'},
		{title:'Platform Data', hasChild:true, test:'ui/common/platform/platform.js'},
		{title:'Filesystem', hasChild:true, test:'ui/common/platform/filesystem.js'},
		{title:'JS Includes', hasChild:true, test:'ui/common/platform/js_include.js'},
		{title:'Set Timeout (timer)', hasChild:true, test:'ui/common/platform/set_timeout.js'},
		{title:'Set Interval (timer)', hasChild:true, test:'ui/common/platform/set_interval.js'},
		{title:'XML RSS', hasChild:true, test:'ui/common/platform/xml_rss.js'},
		{title:'Utils', hasChild:true, test:'ui/common/platform/utils.js'},
		{title:'JSON', hasChild:true, test:'ui/common/platform/json.js'},
		{title:'JS search', hasChild:true, test:'ui/common/platform/search_case_insensitive.js'},
		{title:'Clipboard', hasChild:true, test:'ui/common/platform/clipboard.js'},
		{title:'Sockets', hasChild:true, test:'ui/common/platform/sockets.js'}
	];
	
	if (Titanium.Platform.name == 'iPhone OS') {
		data.push({title:'Passing Data (windows)', hasChild:true, test:'ui/handheld/ios/platform/custom_properties.js'});
		data.push({title:'Bonjour', hasChild:true, test:'ui/handheld/ios/platform/bonjour.js'});
	}
	
	if (Titanium.Platform.osname === 'android') {
		data.push({title: 'Android services', hasChild:true, test:'ui/handheld/android/platform/android_services.js'});
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

module.exports = PlatformWindow;
