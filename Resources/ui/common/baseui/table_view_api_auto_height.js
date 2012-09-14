function tv_api_autoheight() {
	var isBlackberry = Titanium.Platform.name === 'blackberry';
	//TODO remove this part when TableViewRow will be supported for BlackBerry
	if (isBlackberry) {
		alert('TableViewRow is not implemented for BlackBerry yet');
		return;
	}
	var win = Ti.UI.createWindow();
	// create table view data object
	var data = [];
	if (isBlackberry) {
		data[0] = {hasChild:true,height:'auto'};
		data[1] = {hasDetail:true,height:'auto'};
		data[2] = {hasCheck:true,height:'auto'};
	} else {
		data[0] = Ti.UI.createTableViewRow({hasChild:true,height:'auto'});
		data[1] = Ti.UI.createTableViewRow({hasDetail:true,height:'auto'});
		data[2] = Ti.UI.createTableViewRow({hasCheck:true,height:'auto'});
	}

	function addRow(idx,text)
	{
		if (!isBlackberry) {
			data[idx].add(Ti.UI.createLabel({
				text:text,
				height:'auto',
				width:'auto',
				left:10,
				right:50,
				top:10,
				bottom:10
			}));
		}	
	}
	
	if (isBlackberry) {
		alert('Ti.UI.createTableViewRow() is not supported for Blackberry yet');
	}
	addRow(0,'There should be 18 sentences: 1. This is some long text. 2. This is some long text. 3. This is some long text. 4. This is some long text. 5. This is some long text. 6. This is some long text. 7. This is some long text. 8. This is some long text. 9. This is some long text. 10. This is some long text. 11. This is some long text. 12. This is some long text. 13. This is some long text. 14. This is some long text. 15. This is some long text. 16. This is some long text. 17. This is some long text. 18. This is some long text.');
	addRow(1,'There should be 4 sentences: 1. This is some long text. 2. This is some long text. 3. This is some long text. 4. This is some long text.');
	addRow(2,'There should be 18 sentences: 1. This is some long text. 2. This is some long text. 3. This is some long text. 4. This is some long text. 5. This is some long text. 6. This is some long text. 7. This is some long text. 8. This is some long text. 9. This is some long text. 10. This is some long text. 11. This is some long text. 12. This is some long text. 13. This is some long text. 14. This is some long text. 15. This is some long text. 16. This is some long text. 17. This is some long text. 18. This is some long text.');
	
	
	// create table view
	var tableview = Titanium.UI.createTableView({
		data:data,
		minRowHeight:80
	});
	
	// create table view event listener
	tableview.addEventListener('click', function(e)
	{
		// event data
		var index = e.index;
		var section = e.section;
		var row = e.row;
		var rowdata = e.rowData;
		Titanium.UI.createAlertDialog({title:'Table View',message:'row ' + row + ' index ' + index + ' section ' + section  + ' row data ' + rowdata}).show();
	});
	
	// add table view to the window
	win.add(tableview);
	return win;
};

module.exports = tv_api_autoheight;
