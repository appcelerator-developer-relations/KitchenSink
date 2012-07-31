function tv_selectable() {
	var win = Ti.UI.createWindow();
	// create table view data object
	var data = [
		{title:'Row 1', hasChild:true, color:'red', selectedColor:'#fff'},
		{title:'Row 2', hasDetail:true, color:'green', selectedColor:'#fff'},
		{title:'Row 3', hasCheck:true, color:'blue', selectedColor:'#fff'},
		{title:'Row 4', color:'orange', selectedColor:'#fff'}
	];
	
	// create table view
	var tableview = Titanium.UI.createTableView({
		data:data,
		allowsSelection:true
	});
	
	tableview.selectRow(3);
	// add table view to the window
	win.add(tableview);
	return win;
};

module.exports = tv_selectable;