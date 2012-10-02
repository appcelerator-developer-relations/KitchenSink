function movie_remote2(_args) {
	// regression issue for #965
	
	// dynamic url with dynamic encoding (from kosso)
	var media_url = "http://phreadz.com/service/encoder.php?g=5LPOKP754&iph=1";
	var win = Titanium.UI.createWindow({
		title:_args.title
	});
	
	var activeMovie = Titanium.Media.createVideoPlayer({
		url:media_url,
		backgroundColor:'#111',
		mediaControlStyle:Titanium.Media.VIDEO_CONTROL_DEFAULT, // See TIMOB-2802, which may change this property name
		scalingMode:Titanium.Media.VIDEO_SCALING_MODE_FILL
	});
	
	if (parseFloat(Titanium.Platform.version) >= 3.2)
	{
		win.add(activeMovie);
	}
	
	activeMovie.play();
	
	win.addEventListener('close', function() {
		alert("Window closed");
		activeMovie.stop();
	});
	return win;
};

module.exports = movie_remote2;