function MashupsWindow(title) {
	var self = Ti.UI.createWindow({
		title:title,
		backgroundColor:'white'
	});
	
	// create table view data object
	var data = [
		{title:'Twitter', hasChild:true, test:'ui/common/mashups/twitter.js', title_image:'../images/twitter_logo_header.png'},
		{title:'Foursquare', hasChild:true, test:'ui/common/mashups/foursquare.js', title_image:'../images/light-poweredby-foursquare.png'},
		{title:'Facebook', hasChild:true, test:'ui/common/mashups/facebook.js'},
		{title:'YQL', hasChild:true, test:'ui/common/mashups/yql.js'}
	];
	
	//add iphone specific tests
	if (Titanium.Platform.name == 'iPhone OS') {
		data.push({title:'RSS', hasChild:true, test:'ui/handheld/ios/mashups/rss.js', barColor:'#b40000'});
	}
	 
	data.push({title:'SOAP', hasChild:true, test:'ui/common/mashups/soap.js'});
	
	// create table view
	var tableview = Titanium.UI.createTableView({
		data:data
	});
	
	// create table view event listener
	tableview.addEventListener('click', function(e) {
		if (e.rowData.test) {
			var ExampleWindow = require(e.rowData.test),
				win = new ExampleWindow(e.rowData.title);
				
			if (e.rowData.barColor) {
				win.barColor = e.rowData.barColor;
			}
			if (e.rowData.title_image) {
				win.titleImage = e.rowData.title_image;
			}
			Titanium.UI.currentTab.open(win,{animated:true});
		}
	});
	
	// add table view to the window
	self.add(tableview);
	
	return self;
};

module.exports = MashupsWindow;
