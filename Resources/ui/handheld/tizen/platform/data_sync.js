function data_sync() {
	var win = Titanium.UI.createWindow(),
		Tizen = require('tizen'),
		hint = Titanium.UI.createLabel({
			top: 30,
			height:'auto',
			color:'#777',
			font:{fontSize:16},
		}),
		numMaxProfiles,
		numProfiles;

	win.add(hint);

	numMaxProfiles = tizen.datasync.getMaxProfilesNum();
	numProfiles = tizen.datasync.getProfilesNum();
	hint.text = 'Max profiles: ' + numMaxProfiles + ', used profiles: ' + numProfiles;
		
	return win;
}

module.exports = data_sync;
