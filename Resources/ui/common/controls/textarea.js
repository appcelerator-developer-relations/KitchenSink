function textarea(_args) {
	var self = Ti.UI.createWindow({
		title:_args.title,
		backgroundColor:'white'
	});

	// create label view data object
	var data = [
		{title:'Basic', hasChild:true, test:'ui/common/controls/textarea_basic'}
	];
	
	if (Titanium.Platform.name == 'iPhone OS')
	{
		//TODO Update before 2.2.0 RELEASE
		data.push({title:'Auto Link', hasChild:true, test:'ui/handheld/ios/controls/textarea_autodetect'});
	}
	// create table view
	var tableview = Titanium.UI.createTableView({
		data:data
	});
	
	// create table view event listener
	tableview.addEventListener('click', function(e) {
		if (e.rowData.test) {
			var ExampleWindow = require(e.rowData.test),
				win = new ExampleWindow(_args);
			_args.containingTab.open(win,{animated:true});
		}
	});
	
	// add table view to the window
	self.add(tableview);
	return self;
}

module.exports = textarea;