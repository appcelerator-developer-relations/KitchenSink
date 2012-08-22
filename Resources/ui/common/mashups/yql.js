function yql(_args) {
	//TODO review this part when Jira tasks: TIMOB-8593 will be implemented
	if (Titanium.Platform.name === 'blackberry') {
		alert('Titanium.Yahoo module is not implemented for BlackBerry yet');
		return;
	}
	var self = Ti.UI.createWindow({
		backgroundColor:'#fff'
	});

	// create table view data object
	var data = [
		{title:'YQL Local Search', hasChild:true, test:'ui/common/mashups/yql_local_search'}
	
	];
	
	// create table view
	var tableview = Titanium.UI.createTableView({
		data:data
	});
	
	// create table view event listener
	tableview.addEventListener('click', function(e) {
		if (e.rowData.test) {
			var ExampleWindow = require(e.rowData.test),
				win = new ExampleWindow({containingTab:_args.containingTab});
			_args.containingTab.open(win,{animated:true});
		}
	});
	
	// add table view to the window
	self.add(tableview);
	
	return self;
};

module.exports = yql;
