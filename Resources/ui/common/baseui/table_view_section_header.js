	//
	//  This is a test that is meant to verify that a row object can have a header
	//  and the table view has no table view header - the header should be displayed
function tv_section_header() {
	var isBlackberry = Titanium.Platform.name === 'blackberry';
	//TODO remove this part when TableView header and style will be supported for BlackBerry
	if (isBlackberry) {
		alert('TableView header and style property are not supported for BlackBerry yet');
		return;
	}
	var win = Titanium.UI.createWindow();
	
	var inputData = [
		{title:'row 1', header:'Header 1'},
		{title:'row 2'},
		{title:'row 3'},
		{title:'row 4', header:'Header 2'},
		{title:'row 5'}
	];
	var tableView = Titanium.UI.createTableView({
		data:inputData
	});
	if (Ti.Platform.osname !== 'mobileweb') {
		if (!isBlackberry)
			tableView.style = Titanium.UI.iPhone.TableViewStyle.GROUPED;
	}
	win.add(tableView);
	return win;
};

module.exports = tv_section_header;