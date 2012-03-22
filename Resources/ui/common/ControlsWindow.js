function ControlsWindow(title) {
	var self = Ti.UI.createWindow({
		title:title,
		backgroundColor:'white'
	});
	
	// create table view data object
	var data = [
		{title:'Slider', hasChild:true, test:'ui/common/controls/slider'},
		{title:'Switch', hasChild:true, test:'ui/common/controls/switch'},
		{title:'Activity Indicator', hasChild:true, test:'ui/common/controls/activity_indicator'},
		{title:'Progress Bar', hasChild:true, test:'ui/common/controls/progress_bar'},
		{title:'Button', hasChild:true, test:'ui/common/controls/button'},
		{title:'Button States', hasChild:true, test:'ui/common/controls/button_state'},
		{title:'Label', hasChild:true, test:'ui/common/controls/label'},
		{title:'Search Bar', hasChild:true, test:'ui/common/controls/searchbar'},
		{title:'Text Field', hasChild:true, test:'ui/common/controls/textfield'},
		{title:'Text Area', hasChild:true, test:'ui/common/controls/textarea'}
	];
	
	// add iphone specific tests
	if (Titanium.Platform.name == 'iPhone OS') {
		data.push({title:'Button Bar', hasChild:true, test:'ui/handheld/ios/controls/buttonbar'});
		data.push({title:'Tabbed Bar', hasChild:true, test:'ui/handheld/ios/controls/tabbedbar'});
		data.push({title:'System Buttons', hasChild:true, test:'ui/handheld/ios/controls/system_buttons'});
		data.push({title:'Toolbar', hasChild:true, test:'ui/handheld/ios/controls/toolbar'});
	}
	data.push({title:'Picker', hasChild:true, test:'ui/common/controls/picker'});
	
	// create table view
	var tableview = Titanium.UI.createTableView({
		data:data
	});
	
	// create table view event listener
	tableview.addEventListener('click', function(e) {
		if (e.rowData.test) {
			var ExampleWindow = require(e.rowData.test),
				win = new ExampleWindow({
					title:e.rowData.title,
					containingTab:self.containingTab,
					tabGroup:self.tabGroup
				});
			self.containingTab.open(win,{animated:true});
		}
	});
	
	// add table view to the window
	self.add(tableview);
	
	return self;
};

module.exports = ControlsWindow;
