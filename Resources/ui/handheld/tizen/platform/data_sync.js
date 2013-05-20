// Syncing currently fails due to https://bugs.tizen.org/jira/browse/TWEB-129.

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
	
	numMaxProfiles = Tizen.DataSync.getMaxProfilesNum();
	numProfiles = Tizen.DataSync.getProfilesNum();
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
				Tizen.DataSync.startSync(id);
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
				var allProfiles = Tizen.DataSync.getAll();
			} catch(e) {
				hint.text += '\nError getting profiles: ' + e.message;
				return;			
			}
			
			for(i=0; i<allProfiles.length; ++i) {
				try {
					Tizen.DataSync.remove(allProfiles[i].profileId);
				} catch(e) {
					hint.text += '\nError removing profile: ' + e.message;
					return;
				}
			}

			numProfiles = 0;
			hint.text += 'OK';
		}
		
		hint.text += '\nCreating test profiles...';
	
		var syncInfo = Tizen.DataSync.createSyncInfo({
			url: "http://sync.o-sync.com", 
			id: "kitchensink2013", 
			password: "klgR8AngREhsr", 
			mode: "MANUAL", 
			type: "ONE_WAY_FROM_CLIENT"
		});
		var contactInfo = new Tizen.DataSync.createSyncServiceInfo({
			enable: true, 
			serviceType: "CONTACT", 
			serverDatabaseUri: "./contact"
		});
		var serviceInfo = [contactInfo];
		var profile = new Tizen.DataSync.createSyncProfileInfo({
			profileName: "MyProfile", 
			syncInfo: syncInfo, 
			serviceInfo: serviceInfo
		});
		try {
			Tizen.DataSync.add(profile);
		} catch(e) {
			hint.text += '\nError creating profile: ' + e.message;
			return;
		}
		var profileId = profile.profileId;
		hint.text += '\nCreated client->server profile (id=' + profileId + ')';

		syncInfo = Tizen.DataSync.createSyncInfo({
			url: "http://sync.o-sync.com", 
			id: "kitchensink2013", 
			password: "klgR8AngREhsr", 
			mode: "MANUAL", 
			type: "ONE_WAY_FROM_SERVER"
		});
		contactInfo = new Tizen.DataSync.createSyncServiceInfo({
			enable: true, 
			serviceType: "CONTACT", 
			serverDatabaseUri: "./contact"
		});
		serviceInfo = [contactInfo];
		profile = new Tizen.DataSync.createSyncProfileInfo({
			profileName: "MyProfile2", 
			syncInfo: syncInfo, 
			serviceInfo: serviceInfo
		});
		try {
			Tizen.DataSync.add(profile);
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
