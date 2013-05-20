function data_sync() {
	var win = Titanium.UI.createWindow(),
		Tizen = require('tizen'),
		hint = Titanium.UI.createLabel({
			top: 60,
			height:'auto',
			color:'#777',
			font:{fontSize:16},
		}),
		numMaxProfiles,
		numProfiles,
		i,
		btn = Titanium.UI.createButton({
			title: 'Begin test',
			top: 15
		})

	numMaxProfiles = tizen.datasync.getMaxProfilesNum();
	numProfiles = tizen.datasync.getProfilesNum();
	hint.text = 'Max profiles: ' + numMaxProfiles + ', used profiles: ' + numProfiles +
		'nWarning: Any existing sync profiles will be deleted during the test';
	btn.addEventListener('click', beginTest);
	
	win.add(btn);
	win.add(hint);

	return win;

	function beginTest() {
		if(numProfiles===0) {
			hint.text += '\nCreating test profiles...';

			var syncInfo = new tizen.SyncInfo("http://example.com/sync", "myId", "myPassword", "MANUAL", "TWO_WAY");
			var contactInfo = new tizen.SyncServiceInfo(true, "CONTACT", "serverContact");
			var serviceInfo = [contactInfo];
			var profile = new tizen.SyncProfileInfo("MyProfile", syncInfo, serviceInfo);
			try {
				tizen.datasync.add(profile);
			} catch(e) {
				hint.text += '\nError creating profile: ' + e.message;
				return;
			}
			var profileId = profile.profileId;
			hint.text += '\n    Created profile with id = ' + profileId;
		} else {
			try {
				var allProfiles = tizen.datasync.getAll();
			} catch(e) {
				hint.text += '\nError getting profiles: ' + e.message;
				return;			
			}
			console.log('Found ' + allProfiles.length + ' profiles');
			
			for(i=0; i<allProfiles.length; ++i) {
				console.log(hint + ' Profile ' + i + ': ' + allProfiles[i]);
				hint.text += '\nFound profile: id=' + allProfiles[i].profileId + ', profileName=' + allProfiles[i].profileName;
			}
		}
	}
}

module.exports = data_sync;
