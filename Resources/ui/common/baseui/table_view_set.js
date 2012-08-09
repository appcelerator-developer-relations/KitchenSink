function tv_set() {
	//JGH: FIXME - remove HTML
	
	var isBlackberry = Titanium.Platform.name === 'blackberry';
	var win = Titanium.UI.createWindow();
	
	var data = [
		{title:'Set 1 (no animation)', header:'Section 0'},
		{title:'Set 2'},
		{title:'Set 3'},
		{title:'Row4'},
		{title:'Row5'},
		{title:'Row6'},
		{title:'Row7'},
		{title:'Row8',header:'Section 1'},
		{title:'Row9'},
		{title:'Row10'},
		{title:'Row11'},
		{title:'Row12'},
		{title:'Row13'},
		{title:'Row14'},
		{title:'Row15'}	
	];
	
	//
	// Create table view
	//
	var tableView = Titanium.UI.createTableView({data:data});
	
	tableView.addEventListener('click',function(e)
	{
		//e.index returns string value which is wrong for switch statment.
		//TODO There is a bug created for this issue: TIMOB-10315. Remove this lines when bug is fixed.
		if (isBlackberry) {
			e.index = parseInt(e.index);
		}
		switch(e.index)
		{
			case 0:
				var data = [];
				for (var c=0;c<10;c++)
				{
					var row = {};
					//TODO revert this to origin approache when createTableViewRow() will be implemented for Blackberry
					if (!isBlackberry) {
						row = Ti.UI.createTableViewRow();
					}
					row.title = "Row "+ (c+1);
					row.hasCheck = true;
					row.backgroundColor = '#aaa';
					data[c]=row;
				}
				//TODO revert back this code when animationStyle and separatorStyle will be implemented for Blackberry
				if (isBlackberry) {
					tableView.setData(data);
				} else {
					tableView.separatorStyle = Ti.UI.iPhone.TableViewSeparatorStyle.NONE;
					tableView.setData(data,{animationStyle:Titanium.UI.iPhone.RowAnimationStyle.NONE});
				}
				break;
			case 1:
				var data = [
					{title:'Set TableView 1',hasDetail:true, image:'Phone.png'},
					{title:'Set TableView 2', hasChild:true, image:'Safari.png'},
					{title:'Set TableView 3', image:'iTunes.png'},
					{title:'Row 4', image:'Mail.png'},
					{title:'Row 5', image:'Mail.png'},
					{title:'Row 7', image:'Mail.png'}
	
				];
				//TODO revert back code when used properties will be implemented for Blackberry
				if (isBlackberry) {
					tableView.setData(data);
				} else {
					tableView.separatorStyle = Ti.UI.iPhone.TableViewSeparatorStyle.SINGLE_LINE;
					tableView.separatorColor = null;
					tableView.setData(data,{animationStyle:Titanium.UI.iPhone.RowAnimationStyle.DOWN});
				}
				break;
			case 2:
				var data = [
					{title:'Set TableView 1'},
					{title:'Set TableView 2'},
					{title:'Set TableView 3'},
					{title:'Row 4'},
					{title:'Row 5'},
					{title:'Row 6'},
					{title:'Row 7'},
					{title:'Row 8'},
					{title:'Row 9'}
	
				];
				//TODO revert back code when used properties will be implemented for Blackberry
				if (isBlackberry) {
					tableView.setData(data);
				} else {
					tableView.separatorStyle = Ti.UI.iPhone.TableViewSeparatorStyle.SINGLE_LINE;
					tableView.separatorColor = "red";
					tableView.setData(data,{animationStyle:Titanium.UI.iPhone.RowAnimationStyle.UP});
				}
				break;
		}
			
	});
	
	win.add(tableView);
	return win;
};

module.exports = tv_set;