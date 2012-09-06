function tv_row_delete() {
	var isBlackberry = Titanium.Platform.name === 'blackberry';
	//TODO remove this part when TableView deleteRow will be supported for BlackBerry
	if (isBlackberry) {
		alert('TTitanium.UI.TableView.deleteRow() is not supported for Blackberry yet');
		return;
	}
	var win = Titanium.UI.createWindow();
	
	// create table view data object
	var data = [
		{title:'Row 1', hasChild:true},
		{title:'Row 2', hasDetail:true},
		{title:'Row 3 (no animation)', name:'foo'},
		{title:'Row 4 (no animation)', name:'bar'},
		{title:'Row 5'}
	];
	
	//
	// set right nav button
	//
	var button = Titanium.UI.createButton({
		title:'Delete Row'
	});
	if (Ti.Platform.osname !== 'mobileweb') {
		if (!isBlackberry)
			button.style = Titanium.UI.iPhone.SystemButtonStyle.BORDERED;
	}
	
	var tableViewOptions = {data: data};
	if (Titanium.Platform.name == 'iPhone OS') {
		win.rightNavButton = button;
	} else {
		button.top = 5;
		button.width = 300;
		button.height = 30;
		tableViewOptions.top = 45;
		win.add(button);
	}
	
	if (isBlackberry)
		button.height = 100;
	// create table view
	var tableview = Titanium.UI.createTableView(tableViewOptions);
	
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
	
	button.addEventListener('click', function()
	{
		var index = tableview.data.length-1;
		Ti.API.info("deleting row "+index);
		
		//TODO remove this lines when deleteRow() will be implemented for TableView for Blackberry
		if (isBlackberry) {
			alert('Delete TableRow is not supported for Blackberry');
			return;
		}
		try {
			if (Ti.Platform.osname !== 'mobileweb') {
				tableview.deleteRow(index,{animationStyle:Titanium.UI.iPhone.RowAnimationStyle.UP});
			} else {
				tableview.deleteRow(index);
			}
		} catch (E) {
			Ti.UI.createNotification({ message: E.message }).show();
		}
	});
	return win;
};

module.exports = tv_row_delete;