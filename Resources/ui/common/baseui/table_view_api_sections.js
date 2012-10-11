function tv_api_sections(_args) {
	var win = Ti.UI.createWindow({
		title:_args.title
	});
	
	var section1 = Ti.UI.createTableViewSection({
		headerTitle:'Header 1'
	});
	for (var i=0; i < 4; i++) {
		section1.add(Ti.UI.createTableViewRow({
			title:'Row '+i
		}));
	}
	
	var section2 = Ti.UI.createTableViewSection();
	for (var i=4; i < 10; i++) {
		section2.add(Ti.UI.createTableViewRow({
			title:'Row '+i
		}));
	}
	
	var tv = Ti.UI.createTableView({
		data:[section1,section2]
	});
	win.add(tv);
	return win;
};

module.exports = tv_api_sections;