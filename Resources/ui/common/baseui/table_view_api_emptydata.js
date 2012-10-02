function tv_api_empty(_args) {
	var win = Ti.UI.createWindow({
		title:_args.title
	});
	// create table view data object
	var data = [];
	
	data[0] = Ti.UI.createTableViewRow({hasChild:true,title:'Row 1'});
	data[1] = Ti.UI.createTableViewRow({hasDetail:true,title:'Row 2'});
	data[2] = Ti.UI.createTableViewRow({hasCheck:true,title:'Row 3'});
	data[3] = Ti.UI.createTableViewRow({title:'Row 4'});
	
	// create table view with empty data set and then append
	var tableview = Titanium.UI.createTableView();
	tableview.data = data;
	
	function showClickEventInfo(e, islongclick) {
		// event data
		var index = e.index;
		var section = e.section;
		var row = e.row;
		var rowdata = e.rowData;
		var msg = 'row ' + row + ' index ' + index + ' section ' + section  + ' row data ' + rowdata;
		if (islongclick) {
			msg = "LONGCLICK " + msg;
		}
		Titanium.UI.createAlertDialog({title:'Table View',message:msg}).show();
	}
	
	// create table view event listener
	tableview.addEventListener('click', function(e)
	{
		showClickEventInfo(e);
	});
	tableview.addEventListener('longclick', function(e)
	{
		showClickEventInfo(e, true);
	});
	
	// add table view to the window
	win.add(tableview);
	return win;
};

module.exports = tv_api_empty;