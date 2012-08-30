Video = {};
Video.view = Ti.UI.createView();
Video.videoObject = null;

Video.init = function()
{
	Video.videoObject = Titanium.Media.createVideoPlayer({
		contentURL:'/etc/movie.mp4',
		backgroundColor:'#111',
		mediaControlStyle:Titanium.Media.VIDEO_CONTROL_DEFAULT,
		scalingMode:Titanium.Media.VIDEO_SCALING_MODE_FILL,
		top:100,
		height:300,
		width:400,
		autoplay:false
	});

	Video.view.add(Video.videoObject);
};
