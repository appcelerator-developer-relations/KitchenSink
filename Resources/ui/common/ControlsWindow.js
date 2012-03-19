function ControlsWindow(title) {
	var self = Ti.UI.createWindow({
		title:title,
		backgroundColor:'white'
	});
	
	// create table view data object
	var data = [
		{title:'Slider', hasChild:true, test:'ui/common/controls/slider.js'},
		{title:'Switch', hasChild:true, test:'ui/common/controls/switch.js'},
		{title:'Activity Indicator', hasChild:true, test:'ui/common/controls/activity_indicator.js'},
		{title:'Progress Bar', hasChild:true, test:'ui/common/controls/progress_bar.js'},
		{title:'Button', hasChild:true, test:'ui/common/controls/button.js'},
		{title:'Button States', hasChild:true, test:'ui/common/controls/button_state.js'},
		{title:'Label', hasChild:true, test:'ui/common/controls/label.js'},
		{title:'Search Bar', hasChild:true, test:'ui/common/controls/searchbar.js'},
		{title:'Text Field', hasChild:true, test:'ui/common/controls/textfield.js'},
		{title:'Text Area', hasChild:true, test:'ui/common/controls/textarea.js'}
	];
	
	// add iphone specific tests
	if (Titanium.Platform.name == 'iPhone OS') {
		data.push({title:'Button Bar', hasChild:true, test:'ui/handheld/ios/controls/buttonbar.js'});
		data.push({title:'Tabbed Bar', hasChild:true, test:'ui/handheld/ios/controls/tabbedbar.js'});
		data.push({title:'System Buttons', hasChild:true, test:'ui/handheld/ios/controls/system_buttons.js'});
		data.push({title:'Toolbar', hasChild:true, test:'ui/handheld/ios/controls/toolbar.js'});
	}
	data.push({title:'Picker', hasChild:true, test:'ui/common/controls/picker.js'});
	
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

module.exports = ControlsWindow;
