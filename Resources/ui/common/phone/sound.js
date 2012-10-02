function sound(_args) {
	var isIOS = (Titanium.Platform.name == 'iPhone OS');

	var self = Ti.UI.createWindow();
	// create table view data object
	var data = [
		{title:'Local', hasChild:true, test:'ui/common/phone/sound_local'},
		{title:'Local with File', hasChild:true, test:'ui/common/phone/sound_file'},
		{title:'Local with File URL', hasChild:true, test:'ui/common/phone/sound_file_url'},
		{title:'Remote URL', hasChild:true, test:'ui/common/phone/sound_remote_url'},
		{title:'Remote Streaming', hasChild:true, test:'ui/common/phone/sound_remote'}
	
	];
	
	if (isIOS)
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

	// Create table view event listener
	// On iOS, there is a delay before the "Remote URL" window is opened. The "isTestOpening" flag is added 
	// to block any click event during the window is opening. (TIMOB-10095)
	if (isIOS) {
		var isTestOpening = false;
		tableview.addEventListener('click', function(e) {
			if (!isTestOpening) {
				if (e.rowData.test) {
					isTestOpening = true;
					var ExampleWindow = require(e.rowData.test);
					win = new ExampleWindow();
					win.addEventListener("open", function() {
						isTestOpening = false;
					});
					_args.containingTab.open(win, {
						animated : true
					});
				}
			}
		});
	} else {
		tableview.addEventListener('click', function(e) {
			if (e.rowData.test) {
				var ExampleWindow = require(e.rowData.test);
				win = new ExampleWindow();
				_args.containingTab.open(win, {
					animated : true
				});
			}

		});
	}

	
	// add table view to the window
	self.add(tableview);
	return self;
};

module.exports = sound;
