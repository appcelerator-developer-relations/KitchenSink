function tv_row_append(_args) {
	var win = Ti.UI.createWindow({
		title:_args.title
	});
	// create table view data object
	var data = [
		{title:'Row 1', hasChild:true},
		{title:'Row 2', hasDetail:true},
		{title:'Append Row with Header'},
		{title:'Append Row & height=100'}
	];
	
	// create table view
	var tableview = Titanium.UI.createTableView({
		data:data
	});
	
	
	var newRowCount = 1;
	var newSectionCount = 1;
	// create table view event listener
	tableview.addEventListener('click', function(e)
	{
		Ti.API.info('clicked received for row ' + e.index);
		// event data
		var index = e.index;
		var section = e.section;
		var row = e.row;
		row.height = 100;
		var rowdata = e.rowData;
		if (index == 2)
		{
			// var row = Ti.UI.createTableViewRow({header:'New Header'});
			// var l = Ti.UI.createLabel({
			//     text:' I am a new row',
			//     height:30,
			//     width:200
			// });
			// row.add(l);
			var data = {title:'New Row ' + newRowCount, header:'New Header '+newSectionCount};
	
			tableview.appendRow(data);
			newSectionCount++;
			newRowCount++;
		}
		else if (index == 3)
		{
			var data = Ti.UI.createTableViewRow({title:'New Row ' + newRowCount});
			if (newRowCount == 1)
			{
				tableview.appendRow(data);
			}
			else
			{
				if (Ti.Platform.osname !== 'tizen') {
					tableview.appendRow(data, {animationStyle: Titanium.UI.iPhone.RowAnimationStyle.LEFT});	
				} else {
					tableview.appendRow(data);
				}
			}
			newRowCount++;
		}
		else
		{
			Titanium.UI.createAlertDialog({title:'Table View',message:'row ' + row + ' index ' + index + ' section ' + section  + ' row data ' + rowdata}).show();
		}
	
	});
	tableview.addEventListener('longclick', function(e){
		var index = e.index;
		var section = e.section;
		var row = e.row;
		var rowdata = e.rowData;
		var msg = 'LONGCLICK row ' + row + ' index ' + index + ' section ' + section  + ' row data ' + rowdata;
		Titanium.UI.createAlertDialog({title:'Table View',message:msg}).show();
	});
	
	
	// add table view to the window
	win.add(tableview);
	return win;
};

module.exports = tv_row_append;