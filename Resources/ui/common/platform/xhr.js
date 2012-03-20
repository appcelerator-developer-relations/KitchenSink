function xhr(_args) {
	var self = Ti.UI.createWindow();
	
	// create table view data object
	var data = [
		
		{title:'Error Callback', hasChild:true, test:'ui/common/platform/xhr_error'},
		{title:'Binary Data', hasChild:true, test:'ui/common/platform/xhr_binarydata'},
		{title:'XML Data', hasChild:true, test:'ui/common/platform/xhr_xml'},
		{title:'XML Properties', hasChild:true, test:'ui/common/platform/xhr_properties'},
		{title:'File Download', hasChild:true, test:'ui/common/platform/xhr_filedownload'},
		{title:'UTF-8 + GET/POST', hasChild:true, test:'ui/common/platform/xhr_utf8'},
		{title:'Cookies', hasChild:true, test:'ui/common/platform/xhr_cookie'},
		{title:'setTimeout', hasChild:true, test:'ui/common/platform/xhr_settimeout'}
	];
	// add iphone specific tests
	if (Titanium.Platform.name == 'iPhone OS')
	{
		data.push({title:'File Upload', hasChild:true, test:'ui/handheld/ios/platform/xhr_fileupload'});
	}
	// create table view
	var tableview = Titanium.UI.createTableView({
		data:data
	});
	
	// create table view event listener
	tableview.addEventListener('click', function(e)
	{
		if (e.rowData.test)
		{
			var ExampleWindow = require(e.rowData.test),
				win = new ExampleWindow();
			_args.containingTab.open(win,{animated:true});
		}
	});
	
	// add table view to the window
	self.add(tableview);
	
	return self;
};

module.exports = xhr;
