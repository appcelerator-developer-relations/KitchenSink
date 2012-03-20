function MashupsWindow(title) {
	var self = Ti.UI.createWindow({
		title:title,
		backgroundColor:'white'
	});
	
	// create table view data object
	var data = [
		{title:'Twitter', hasChild:true, test:'ui/common/mashups/twitter', title_image:'../images/twitter_logo_header.png'},
		{title:'Foursquare', hasChild:true, test:'ui/common/mashups/foursquare', title_image:'../images/light-poweredby-foursquare.png'},
		{title:'Facebook', hasChild:true, test:'ui/common/mashups/facebook'},
		{title:'YQL', hasChild:true, test:'ui/common/mashups/yql'}
	];
	
	//add iphone specific tests
	if (Titanium.Platform.name == 'iPhone OS') {
		data.push({title:'RSS', hasChild:true, test:'ui/handheld/ios/mashups/rss', barColor:'#b40000'});
	}
	 
	data.push({title:'SOAP', hasChild:true, test:'ui/common/mashups/soap'});
	
	// create table view
	var tableview = Titanium.UI.createTableView({
		data:data
	});
	
	// create table view event listener
	tableview.addEventListener('click', function(e) {
		if (e.rowData.test) {
			var ExampleWindow = require(e.rowData.test),
				win = new ExampleWindow({title:e.rowData.title,containingTab:self.containingTab});
				
			if (e.rowData.barColor) {
				win.barColor = e.rowData.barColor;
			}
			if (e.rowData.title_image) {
				win.titleImage = e.rowData.title_image;
			}
			self.containingTab.open(win,{animated:true});
		}
	});
	
	// add table view to the window
	self.add(tableview);
	
	return self;
};

module.exports = MashupsWindow;
