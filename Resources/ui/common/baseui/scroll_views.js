function scroll_views(_args) {
	//TODO remove this lines when Jira TIMOB-8832 and TIMOB-8831 tasks will be implemeneted and recheck further scroll views files again.
	if (Titanium.Platform.osname === 'blackberry'){
		alert('ScrollView and ScrollableView aren\'t implemeneted for Blackberry yet');
		return;
	}
	var win = Ti.UI.createWindow({backgroundColor:'#fff'});
	// create table view data object
	var data = [
		{title:'Basic', hasChild:true, test:'ui/common/baseui/scroll_views_basic'},
		{title:'Scrolling Tabs', hasChild:true, test:'ui/common/baseui/scroll_views_tabs'},
		{title:'Scrollable View', hasChild:true, test:'ui/common/baseui/scroll_views_scrollable'},
		{title:'Many on a Screen', hasChild:true, test:'ui/common/baseui/scroll_views_many'},
		{title:'Scroll Views TextArea', hasChild:true, test:'ui/common/baseui/scroll_views_textareas'}
	
	];
	
	// add iphone specific tests
	if (Titanium.Platform.name == 'iPhone OS')
	{
		data.push({title:'Scrollable View w/o Clipping', hasChild:true, test:'ui/handheld/ios/baseui/scroll_views_without_clipping', barColor:'#111', bgImage:'/images/scrollable_view/bg.png'});
		data.push({title:'Scrolling Zoom+Pinch', hasChild:true, test:'ui/handheld/ios/baseui/scroll_views_scaling'});
	    data.push({title:'Scrolling Drag Start&End', hasChild:true, test:'ui/handheld/ios/baseui/scroll_views_dragging'});
	}
	
	// create table view
	for (var i = 0; i < data.length; i++ ) { data[i].color = '#000'; data[i].font = {fontWeight:'bold'} };
	var tableview = Titanium.UI.createTableView({
		data:data
	});
	
	// create table view event listener
	tableview.addEventListener('click', function(e)
	{
		if (e.rowData.test)
		{
			var ExampleWindow = require(e.rowData.test);
				win = new ExampleWindow();
	
			if (e.rowData.barColor)
			{
				win.barColor = e.rowData.barColor;
			}
			if (e.rowData.bgImage)
			{
				win.backgroundImage = e.rowData.bgImage;
			}
			_args.containingTab.open(win,{animated:true});
		}
	});
	
	// add table view to the window
	win.add(tableview);

	return win;
};

module.exports = scroll_views;