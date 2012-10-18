function views(_args) {
	var win = Ti.UI.createWindow({backgroundColor:'#fff'});
	
	var isMobileWeb = Titanium.Platform.osname == 'mobileweb';
	
	//create table view data object
	var data = [
		{title:'Events Propagation', hasChild:true, test:'ui/common/baseui/view_event_propagation'},
		{title:'Events Interaction', hasChild:true, test:'ui/common/baseui/view_event_interaction'},
		{title:'Image Views', hasChild:true, test:'ui/common/baseui/image_views'},
		{title:'Scroll Views', hasChild:true, test:'ui/common/baseui/scroll_views'},
		{title:'Table Views', hasChild:true, test:'ui/common/baseui/table_views'},
		{title:'Web Views', hasChild:true, test:'ui/common/baseui/web_views'},
		{title:'Alert Dialog', hasChild:true, test:'ui/common/baseui/alert'},
		{title:'Options Dialog', hasChild:true, test:'ui/common/baseui/options_dialog'},
		{title:'Remove Views', hasChild:true, test:'ui/common/baseui/remove_views'},
		{title:'zIndex', hasChild:true, test:'ui/common/baseui/views_zindex'},
		{title:'Email Dialog', hasChild:true, test:'ui/common/baseui/email_dialog'},
		{title:'Point Conversion', hasChild:true, test:'ui/common/baseui/view_point_conversion'},
		{title:'View w/ Size', hasChild:!isMobileWeb, test:'ui/common/baseui/view_with_size', touchEnabled:!isMobileWeb, color:isMobileWeb?"#aaa":"#000"},
		{title:'Map View', hasChild:!isMobileWeb, test:'ui/common/baseui/map_view', touchEnabled:!isMobileWeb, color:isMobileWeb?"#aaa":"#000"}
	];
	
	if (Titanium.Platform.name == 'iPhone OS')
	{
		// Android team, implement the following then move this entry above
		data.push({title:'View Gestures', hasChild:true, test:'ui/handheld/ios/baseui/view_gestures'});
		//
		data.push({title:'Map View with Routing', hasChild:true, test:'ui/handheld/ios/baseui/map_view2'});
		data.push({title:'Events', hasChild:true, test:'ui/handheld/ios/baseui/view_events'});
		data.push({title:'Events with Views', hasChild:true, test:'ui/handheld/ios/baseui/view_events_2'});
		data.push({title:'Coverflow View', hasChild:true, test:'ui/handheld/ios/baseui/coverflow'});
		data.push({title:'Dashboard View', hasChild:true, test:'ui/handheld/ios/baseui/dashboard'});
		data.push({title:'Auto Height', hasChild:true, test:'ui/handheld/ios/baseui/views_auto_height'});
		data.push({title:'Min Height', hasChild:true, test:'ui/handheld/ios/baseui/views_min_height'});
		data.push({title:'Mixing Views', hasChild:true, test:'ui/handheld/ios/baseui/mixing_views_1'});
	//	data.push({title:'Web View Repaint', hasChild:true, test:'ui/handheld/ios/baseui/webview_repaint'});
		data.push({title:'Gradient', hasChild:true, test:'ui/handheld/ios/baseui/gradient'});
		data.push({title:'Hide/Show', hasChild:true, test:'ui/handheld/ios/baseui/view_hide_show'});
		
		Ti.include("/etc/version.js");
	
		if (isiOS4Plus())
		{
			data.push({title:'Hi-Res Image', wintitle:"Fence", hasChild:true, test:'ui/handheld/ios/baseui/hi_res_image'});
			data.push({title:'Hi-Res Image 2', wintitle:"Dog", hasChild:true, test:'ui/handheld/ios/baseui/hi_res_image2'});
		}
		data.push({title:'Hi-Res Image remote', wintitle:"Remote dog", hasChild:true, test:'ui/handheld/ios/baseui/hi_res_image_remote'});
	}
	
	// create table view
	for (var i = 0; i < data.length; i++ ) {
		var d = data[i];
		// On Android, if touchEnabled is not set explicitly, its value is undefined.
		if (d.touchEnabled !== false) {
			d.color = '#000';
		}
		d.font = {fontWeight:'bold'};
	};
	var tableview = Titanium.UI.createTableView({
		data:data
	});
	
	// create table view event listener
	tableview.addEventListener('click', function(e)
	{
		if (e.rowData.test)
		{
			var ExampleWindow = require(e.rowData.test);
				win = new ExampleWindow(_args);
			_args.containingTab.open(win,{animated:true});
		}
	});
	
	// add table view to the window
	win.add(tableview);
	return win;
};

module.exports = views;