function tv_api_rowheader() {
	var isBlackberry = Titanium.Platform.name === 'blackberry';
	//TODO remove this part when TableViewSection module with headerTitle property will be supported for BlackBerry
	if (isBlackberry) {
		alert('TableViewSection module with headerTitle property is not supported for BlackBerry yet');
		return;
	}
	var win = Ti.UI.createWindow();
	// create table view data object
	var data = [];
	
	if (isBlackberry) {
		data[0] = {hasChild:true,title:'Header should be Foo',header:'Foo'};
		data[1] = {hasDetail:true,title:'Row 2'};
		data[2] = {hasCheck:true,title:'Header should be Bar',header:'Bar'};
		data[3] = {title:'Footer should be Bye',footer:'Bye'};
	} else {
		data[0] = Ti.UI.createTableViewRow({hasChild:true,title:'Header should be Foo',header:'Foo'});
		data[1] = Ti.UI.createTableViewRow({hasDetail:true,title:'Row 2'});
		data[2] = Ti.UI.createTableViewRow({hasCheck:true,title:'Header should be Bar',header:'Bar'});
		data[3] = Ti.UI.createTableViewRow({title:'Footer should be Bye',footer:'Bye'});
	}
	
	// now do it with direct properties
	var row = {};
	if (!isBlackberry)
		row = Ti.UI.createTableViewRow();
	row.header = "Blah";
	row.title = "Header should be Blah";
	data[4] = row;
	
	// create table view
	var tableview = Titanium.UI.createTableView({
		data:data
	});
	
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

module.exports = tv_api_rowheader;
