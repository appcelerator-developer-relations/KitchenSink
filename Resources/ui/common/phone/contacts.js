function contacts(_args) {
	//TODO review this part when Jira tasks: TIMOB-8577 will be implemented
	if (Titanium.Platform.name === 'blackberry') {
		alert('Titanium.Contacts module is not implemented for BlackBerry yet');
		return;
	}
	var self = Ti.UI.createWindow();
	// create table view data object
	var data = [
		{title:'Contacts picker', hasChild:true, test:'ui/common/phone/contacts_picker'},
		{title:'Display people', hasChild:true, test:'ui/common/phone/contacts_db'},
		{title:'Search By ID', hasChild:true, test:'ui/common/phone/contacts_searchById'}
	];
	if (Ti.Platform.osname !== 'android') {
		data.push({title:'Add contact',hasChild:true, test:'ui/common/phone/contacts_add'});
		data.push({title:'Remove contact',hasChild:true, test:'ui/common/phone/contacts_remove'});
	}
		data.push({title:'Contact images',hasChild:true, test:'ui/common/phone/contacts_image'});
	if (Ti.Platform.osname !== 'android') {
		data.push({title:'Groups',hasChild:true, test:'ui/common/phone/contacts_groups'});
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
				win = new ExampleWindow(_args);
			_args.containingTab.open(win,{animated:true});
		}
	});
	
	// add table view to the window
	self.add(tableview);
	return self;
};

module.exports = contacts;
