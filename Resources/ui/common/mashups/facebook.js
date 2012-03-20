function facebook(_args) {
	var self = Ti.UI.createWindow({
		backgroundColor:'#fff'
	});
	//create table view data object
	var data = [
		{title:'Login/Logout', hasChild:true, test:'ui/common/mashups/facebook_login_logout'},
		{title:'Query', hasChild:true, test:'ui/common/mashups/facebook_query'},
		{title:'Properties', hasChild:true, test:'ui/common/mashups/facebook_properties'},
		{title:'Publish Stream', hasChild:true, test:'ui/common/mashups/facebook_publish_stream'},
		{title:'Photos', hasChild:true, test:'ui/common/mashups/facebook_photos'}
	
	];
	
	// create table view
	var tableview = Titanium.UI.createTableView({
		data:data
	});
	
	// create table view event listener
	tableview.addEventListener('click', function(e) {
		if (e.rowData.test) {
			var ExampleWindow = require(e.rowData.test),
				win = new ExampleWindow();
			_args.containingTab.open(win,{animated:true});
		}
	});
	
	// add table view to the window
	self.add(tableview);
	return self;
};

module.exports = facebook;
