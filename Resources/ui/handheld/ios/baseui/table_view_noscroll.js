function tv_noscroll(_args) {
	var w = Ti.UI.createWindow({
		title:_args.title
	});
	var search = Titanium.UI.createSearchBar({
		showCancel:false,
		hintText:'type in me then scroll'
	});
	
	var tv = Ti.UI.createTableView({
		scrollable:false,
		search:search
	});
	w.add(tv);
	
	var data = [];
	var count = 5;
	
	for (var c=0;c<count;c++)
	{
		var row = Ti.UI.createTableViewRow({title:"Row "+(c+1)});
		data[c] = row;
	}
	
	tv.data = data;

	return w;
};

module.exports = tv_noscroll;