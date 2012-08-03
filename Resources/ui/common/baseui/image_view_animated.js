function image_view_anim() {	
	var isBlackberry = Titanium.Platform.name === 'blackberry';
	var scaleX = 1;
	var scaleY = 1;
	if (isBlackberry) {
		scaleX += 1;
		scaleY += 3;
	}
	var win = Titanium.UI.createWindow();
	
	// show indicator from app.js
	//TODO remove this when Jira task TIMOB-9980 will be implemented
	if (!isBlackberry)
		Titanium.App.fireEvent('show_indicator');

	// load images
	var images = [];
	for (var i=1;i<18;i++)
	{
		images.push('/images/campFire' + ((i<10)?'0'+i:i)+'.gif');
	}
	
	//
	// CREATE IMAGE VIEW
	//
	
	var imageView = Titanium.UI.createImageView({
		images:images,
		duration:100, // in milliseconds, the time before next frame is shown
		repeatCount:0,  // 0 means animation repeats indefinitely, use > 1 to control repeat count
		top:0
	});
	
	
	var frame = Ti.UI.createLabel({
		text:'',
		color:'white',
		width:'auto',
		height:'auto',
		font:{fontSize:48,fontFamily:'Helvetica Neue'}
	});
	
	if (isBlackberry) {
		frame.height = 25 * scaleY;
	}
	
	//
	// IMAGE VIEW EVENTS
	//
	
	// listen for load event (when all images are loaded)
	imageView.addEventListener('load', function(e)
	{
		if (isBlackberry) {
			alert('Titanium.UI.ImageView.start() isn\'t supported for Blackberry yet');
			return;
		}
		// hide indicator from app.js
		Titanium.App.fireEvent('hide_indicator');
	
		// start animation
		imageView.start();
	});
	
	// listen for start event (when animation is started)
	imageView.addEventListener('start', function()
	{
		Titanium.API.info('ImageView animation started');
	});
	
	// listen for stop event (when animation is stopped)
	imageView.addEventListener('stop', function()
	{
		Titanium.API.info('ImageView animation stopped');
	});
	
	// listen for change event (when animation is changed)
	imageView.addEventListener('change', function(e)
	{
		Titanium.API.info('ImageView animation frame has changed, index ' + e.index);
		frame.text = e.index;
	});
	
	win.add(imageView);
	
	//
	// CONTROLS
	//
	
	// start animation
	var start = Titanium.UI.createButton({
		title:'Start Animation',
		height:30 * scaleY,
		width:120 * scaleX,
		font:{fontSize:13, fontFamily:'Helvetica Neue'},
		top:10 * scaleY,
		left:10 * scaleX
	});
	start.addEventListener('click', function()
	{
		if (isBlackberry) {
			alert('Titanium.UI.ImageView.animating and Titanium.UI.ImageView.start() aren\'t supported for Blackberry yet');
			return;
		}
		if (imageView.animating === false)
		{
			imageView.start();
		}
	});
	win.add(start);
	
	// reverse animation
	var reverse = Titanium.UI.createButton({
		title:'Reverse',
		height:30 * scaleY,
		width:120 * scaleX,
		font:{fontSize:13, fontFamily:'Helvetica Neue'},
		top:130 * scaleY,
		left:10 * scaleX
	});
	reverse.addEventListener('click', function()
	{
		if (isBlackberry) {
			alert('Titanium.UI.ImageView.reverse isn\'t supported for Blackberry yet');
			return;
		}
		imageView.reverse = !imageView.reverse;
	});
	win.add(reverse);
	
	// stop animation
	var stop = Titanium.UI.createButton({
		title:'Stop Animation',
		height:30 * scaleY,
		width:120 * scaleX,
		font:{fontSize:13, fontFamily:'Helvetica Neue'},
		top:10 * scaleY,
		right:10 * scaleX
	});
	stop.addEventListener('click', function()
	{
		if (isBlackberry) {
			alert('Titanium.UI.ImageView.stop() isn\'t supported for Blackberry yet');
			return;
		}
		if (imageView.animating)
		{
			imageView.stop();
		}
	});
	win.add(stop);
	
	// pause animation
	var pause = Titanium.UI.createButton({
		title:'Pause Animation',
		height:30 * scaleY,
		width:120 * scaleX,
		font:{fontSize:13, fontFamily:'Helvetica Neue'},
		top:90 * scaleY,
		left:10 * scaleX
	});
	pause.addEventListener('click', function()
	{
		if (isBlackberry) {
			alert('Titanium.UI.ImageView.pause() isn\'t supported for Blackberry yet');
			return;
		}
		if (imageView.animating)
		{
			imageView.pause();
		}
	});
	win.add(pause);
	
	// resume animation
	var resume = Titanium.UI.createButton({
		title:'Resume Animation',
		height:30 * scaleY,
		width:120 * scaleX,
		font:{fontSize:13, fontFamily:'Helvetica Neue'},
		top:90 * scaleY,
		right:10 * scaleX
	});
	resume.addEventListener('click', function()
	{
		if (isBlackberry) {
			alert('Titanium.UI.ImageView.resume() isn\'t supported for Blackberry yet');
			return;
		}
		if (imageView.paused)
		{
			imageView.resume();
		}
	});
	win.add(resume);
	
	// increase duration
	var durationUp = Titanium.UI.createButton({
		title:'Duration++',
		height:30 * scaleY,
		width:120 * scaleX,
		font:{fontSize:13, fontFamily:'Helvetica Neue'},
		top:50 * scaleY,
		left:10 * scaleX
	});
	
	// help text
	var l = Titanium.UI.createLabel({
		text:'Duration = 110 ms (re-start to apply)',
		bottom:10,
		color:'white',
		width:'auto',
		height:'auto'
	});
	
	durationUp.addEventListener('click', function()
	{
		if (isBlackberry) {
			alert('Titanium.UI.ImageView.duration isn\'t supported for Blackberry yet');
			return;
		}
		imageView.duration += 100;
		l.text = 'Duration = ' + imageView.duration + ' ms (re-start to apply)';
	
	});
	win.add(durationUp);
	
	// decrease duration
	var durationDown = Titanium.UI.createButton({
		title:'Duration--',
		height:30 * scaleY,
		width:120 * scaleX,
		font:{fontSize:13, fontFamily:'Helvetica Neue'},
		top:50 * scaleY,
		right:10 * scaleX
	});
	
	//TODO review this part of code if layout height/widht - 'auto' and right/bottom properties will be implemented for BB
	if (isBlackberry) {
		resume.left = 250 * scaleX;
		durationDown.left = 250 * scaleX;
		stop.left = 250 * scaleX;
		l.height = 25 * scaleY;
		l.width = 300 * scaleX;
		l.color = 'black';
		l.top = 180 * scaleY;
	}
	
	durationDown.addEventListener('click', function()
	{
		if (isBlackberry) {
			alert('Titanium.UI.ImageView.duration isn\'t supported for Blackberry yet');
			return;
		}
		if (imageView.duration > 100)
		{
			imageView.duration -= 100;
		}
		else if (imageView.duration != 0)
		{
			imageView.duration -= 10;
		}
		l.text = 'Duration = ' + imageView.duration + ' ms (re-start to apply)';
	
	});
	win.add(durationDown);
	
	win.add(l);
	
	win.add(frame);
	return win;
};

module.exports = image_view_anim;