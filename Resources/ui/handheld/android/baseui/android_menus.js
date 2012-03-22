function android_menus(_args) {
	var win = Ti.UI.createWindow();
	//create table view data object
	var data = [];
	
	data.push({title:'Basic Menu', hasChild:true, test:'ui/handheld/android/baseui/android_menu_1'});
	data.push({title:'Menu Handlers (Window Options)', hasChild:true, test:'ui/handheld/android/baseui/android_menu_2'});
	data.push({title:'Menu Handlers (Activity Property)', hasChild:true, test:'ui/handheld/android/baseui/android_menu_3'});
	
	// create table view
	var tableview = Titanium.UI.createTableView({
		data:data
	});
	
	// create table view event listener
	tableview.addEventListener('click', function(e)
	{
		if (e.rowData.test)
		{
			var ExampleWindow = require(e.rowData.test);
				win = new ExampleWindow(_args);
				win.navBarHidden = false;
			_args.containingTab.open(win,{animated:true});
		}
	});
	
	// add table view to the window
	win.add(tableview);
	return win;
};

module.exports = android_menus;