function tv_empty() {
	var isBlackberry = Titanium.Platform.name === 'blackberry';
	var scaleX = 1;
	var scaleY = 1;
	if (isBlackberry) {
		scaleX += 1;
		scaleY += 2;
	}
	var win = Titanium.UI.createWindow();
	
	var tableView = Ti.UI.createTableView({top:110 * scaleY,backgroundColor:'yellow'});
	
	var isMW = (Ti.Platform.osname === 'mobileweb');
	
	var b1 = Ti.UI.createButton({
		height:40 * scaleY,
		width:200 * scaleX,
		title:'Append (row obj)',
		top:10 * scaleY
	});
	win.add(b1);
	//TODO remove this lines of code when appendRow() will be implemented for Blackberry
	if (isBlackberry) {
		b1.enabled = false;
	}
	b1.addEventListener('click',function()
	{
		if (isMW) {
			tableView.appendRow({title:'Foo'});
		} else {
			tableView.appendRow({title:'Foo'},{animationStyle:Titanium.UI.iPhone.RowAnimationStyle.LEFT} );
		}
	
		//NOTE: since we're appending 2 different row layouts, we need to give one of them
		//a table className otherwise the tableview will assume they're the same layout and
		//you'll get warnings and bad performance on lots of rows - this shows you how to do that
		var row = Ti.UI.createTableViewRow({height:50,className:'row'});
		var label = Ti.UI.createLabel({text:'row 1', color:'#111', width:'auto', height:'auto'});
		row.add(label);
		if (isMW) {
			tableView.appendRow(row);
		} else {
			tableView.appendRow(row,{animationStyle:Titanium.UI.iPhone.RowAnimationStyle.LEFT});
		}
	});
	
	var b2 = Ti.UI.createButton({
		height:40 * scaleY,
		width:200 * scaleX,
		title:'Set',
		top:60 * scaleY
	});
	win.add(b2);
	b2.addEventListener('click',function()
	{
		var data = [
			{title:'Row 1'},
			{title:'Row 2'},
			{title:'Row 3'},
			{title:'Row 4'}
		];
		if (isBlackberry) {
			tableView.setData(data);
			return;
		}
		if (isMW) {
			tableView.setData(data);
		} else {
			tableView.setData(data,{animationStyle:Titanium.UI.iPhone.RowAnimationStyle.LEFT});
		}
	
	});
	win.add(tableView);

	return win;
};

module.exports = tv_empty;