function musicLibrary(_args) {
	//Test of Tizen-specific Titanium.Media.openMusicLibrary.
	//Kitchen Sink path: Phone - Music
	//Open a MusicLibrary

	var win = Titanium.UI.createWindow({
		title:_args.title
	});
	
	win.addEventListener('open', function(e) {
		Titanium.Media.openMusicLibrary({
			success:function() {
				alert('Launch service Music Player succeeded');
			},
			error:function(e) {
				alert('Something wrong with launching service - Music Player. '+ e.error);
			}
		});
	});

	return win;
};

module.exports = musicLibrary;