function MashupsWindow(title) {
	var isBlackberry = Titanium.Platform.name === 'blackberry';
	var self = Ti.UI.createWindow({
		title:title,
		// BB TODO: this used to be white
		backgroundColor:'black'
	});

	var isMobileWeb = Titanium.Platform.osname == 'mobileweb';
	
	// create table view data object
	var data = [
		{title:'Twitter', hasChild:!isMobileWeb, test:'ui/common/mashups/twitter', title_image:'/images/twitter_logo_header.png', touchEnabled:!isMobileWeb, color:isMobileWeb?"#aaa":"#000"},
		{title:'Foursquare', hasChild:!isMobileWeb, test:'ui/common/mashups/foursquare', title_image:'/images/light-poweredby-foursquare.png', touchEnabled:!isMobileWeb, color:isMobileWeb?"#aaa":"#000"},
		{title:'Facebook', hasChild:true, test:'ui/common/mashups/facebook'},
		//{title:'Dojo Mobile', hasChild:true, test:'ui/common/mashups/dojomobile'},
		//{title:'Sencha Touch', hasChild:true, test:'ui/common/mashups/senchatouch'},
		//{title:'jQuery mobile', hasChild:true, test:'ui/common/mashups/jquery_mobile'},
		{title:'YQL', hasChild:true, test:'ui/common/mashups/yql'}
	];
	
	//add iphone specific tests
	if (Titanium.Platform.name == 'iPhone OS') {
		data.push({title:'RSS', hasChild:true, test:'ui/handheld/ios/mashups/rss', barColor:'#b40000'});
	}
	 
	data.push({title:'SOAP', hasChild:!isMobileWeb, test:'ui/common/mashups/soap', touchEnabled:!isMobileWeb, color:isMobileWeb?"#aaa":"#000"});
	
	// create table view
	for (var i = 0; i < data.length; i++ ) { data[i].color = '#000'; data[i].font = {fontWeight:'bold'} };
	var tableview = Titanium.UI.createTableView({
		data:data
	});
	
	// create table view event listener
	tableview.addEventListener('click', function(e) {
		var test = e.rowData.test;
		var dataTitle = e.rowData.title;
		var barColor = e.rowData.barColor;
		var titleImage = e.rowData.title_image;
		if (isBlackberry) {
			test = data[e.index].test;
			dataTitle = data[e.index].title;
			barColor = data[e.index].barColor;
			titleImage = data[e.index].title_image;
		}
		if (typeof test !== 'undefined') {
			var ExampleWindow = require(test),
				win = new ExampleWindow({title:dataTitle,containingTab:self.containingTab});
				
			if (typeof barColor !== 'undefined') {
				win.barColor = barColor;
			}
			if (typeof titleImage !== 'undefined') {
				win.titleImage = titleImage;
			}
			self.containingTab.open(win,{animated:true});
		}
	});
	
	// add table view to the window
	self.add(tableview);
	
	return self;
};

module.exports = MashupsWindow;
