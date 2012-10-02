function sound(_args) {
	var self = Ti.UI.createWindow({
		title:_args.title
	});
	// create table view data object
	var data = [
		{title:'Local', hasChild:true, test:'ui/common/phone/sound_local'},
		{title:'Local with File', hasChild:true, test:'ui/common/phone/sound_file'},
		{title:'Local with File URL', hasChild:true, test:'ui/common/phone/sound_file_url'},
		{title:'Remote URL', hasChild:true, test:'ui/common/phone/sound_remote_url'},
		{title:'Remote Streaming', hasChild:true, test:'ui/common/phone/sound_remote'}
	
	];
	
	if (Titanium.Platform.name == 'iPhone OS')
	{
		data.push({title:'Record', hasChild:true, test:'ui/handheld/ios/phone/sound_record'});
		data.push({title:'Audio Session Mode', hasChild:true, test:'ui/handheld/ios/phone/sound_session_mode'});
		
		Ti.include("/etc/version.js");
		
		if (isiOS4Plus())
		{
			data.push({title:'Background Audio', hasChild:true, test:'ui/handheld/ios/phone/sound_bg'});
		}
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
			var ExampleWindow = require(e.rowData.test);
			_args.title = e.rowData.title;
			win = new ExampleWindow(_args);
			_args.containingTab.open(win,{animated:true});
		}
	});
	
	// add table view to the window
	self.add(tableview);
	return self;
};

module.exports = sound;
