function data_sync() {
	var win = Titanium.UI.createWindow(),
		Tizen = require('tizen'),
		hint = Titanium.UI.createLabel({
			top: 60,
			left: 15,
			height:'auto',
			color:'#777',
			font:{fontSize:16},
		}),
		numMaxProfiles,
		numProfiles,
		i,
		btn = Titanium.UI.createButton({
			title: 'Begin test',
			top: 15,
			left: 15
		}),
		btnSync1,
		btnSync2;
	
	numMaxProfiles = tizen.datasync.getMaxProfilesNum();
	numProfiles = tizen.datasync.getProfilesNum();
	hint.text = 'Max profiles: ' + numMaxProfiles + ', used profiles: ' + numProfiles +
		'\nWarning: Any existing sync profiles will be deleted during the test. Please wait 10-15 seconds after starting the test.\n';
	btn.addEventListener('click', beginTest);
	
	win.add(btn);
	win.add(hint);

	return win;

	function beginTest() {
		
		function startsync(id) {
			console.log('startsync: ' + id);
			
			try {
				tizen.datasync.startSync(id);
				hint.text += '\nSyncing profile ' + id + ': OK';
			} catch(e) {
				hint.text += '\nError syncing profile ' + id + ': ' + e.message;
				return;				
			}
		}

		if(numProfiles>0)
		{
			hint.text += '\nErasing existing profiles...';
			try {
				var allProfiles = tizen.datasync.getAll();
			} catch(e) {
				hint.text += '\nError getting profiles: ' + e.message;
				return;			
			}
			
			for(i=0; i<allProfiles.length; ++i) {
				try {
					tizen.datasync.remove(allProfiles[i].profileId);
				} catch(e) {
					hint.text += '\nError removing profile: ' + e.message;
					return;
				}
			}

			numProfiles = 0;
			hint.text += 'OK';
		}
		
		hint.text += '\nCreating test profiles...';

		var syncInfo = new tizen.SyncInfo("http://example.com/sync", "myId", "myPassword", "MANUAL", "ONE_WAY_FROM_CLIENT");
		var contactInfo = new tizen.SyncServiceInfo(true, "CONTACT", "serverContact1");
		var serviceInfo = [contactInfo];
		var profile = new tizen.SyncProfileInfo("MyProfile", syncInfo, serviceInfo);
		try {
			tizen.datasync.add(profile);
		} catch(e) {
			hint.text += '\nError creating profile: ' + e.message;
			return;
		}
		var profileId = profile.profileId;
		hint.text += '\nCreated client->server profile (id=' + profileId + ')';

		syncInfo = new tizen.SyncInfo("http://example.com/sync", "myId2", "myPassword2", "MANUAL", "ONE_WAY_FROM_SERVER");
		contactInfo = new tizen.SyncServiceInfo(true, "CONTACT", "serverContact2");
		serviceInfo = [contactInfo];
		profile = new tizen.SyncProfileInfo("MyProfile", syncInfo, serviceInfo);
		try {
			tizen.datasync.add(profile);
		} catch(e) {
			hint.text += '\nError creating profile: ' + e.message;
			return;
		}
		var profileId2 = profile.profileId;
		hint.text += '\nCreated server->client profile (id=' + profileId2 + ')';

		btn.hide();
		btnSync1 = Titanium.UI.createButton({
			title: 'Sync client->server',
			top: 15,
			left: 15
		});
		btnSync1.addEventListener('click', function() { startsync(profileId) });
		win.add(btnSync1);
		
		btnSync2 = Titanium.UI.createButton({
			title: 'Sync server->client',
			top: 15,
			left: 200
		});
		btnSync2.addEventListener('click', function() { startsync(profileId2) });
		win.add(btnSync2);

		hint.text += '\n\nNow click one of the sync buttons (can take several seconds). They will synchronize current contacts to the server or back.';
	}
}

module.exports = data_sync;
