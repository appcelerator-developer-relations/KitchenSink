function tv_update_row(_args) {
	var win = Ti.UI.createWindow({
		title:_args.title
	});
	
	var tv = Ti.UI.createTableView({
		style:Titanium.UI.iPhone.TableViewStyle.GROUPED
	});
	
	function setData()
	{
		var data = [];
		for (var i=0;i<30;i++)	
		{
			var row = Ti.UI.createTableViewRow({height:50});
			var l1 = Ti.UI.createLabel({text:'Label ' +  i, font:{fontSize:14}, color:'#888', left:5, width:Ti.UI.FILL});
			row.add(l1);
			var image1 = Ti.UI.createImageView({image:'/images/chat.png', right:5,height:23, width:29});
			row.add(image1);
			data.push(row);
		}
		tv.setData(data);
	}
	tv.addEventListener('click', function(e)
	{
		var label = e.row.children[0];
		label.text = 'I was clicked';
	});
	win.add(tv);
	setData();
	
	Ti.API.info('window ' + win);
	Ti.API.info('children ' + win.children + ' length ' + win.children.length);
	return win;
};

module.exports = tv_update_row;