function vibrate() {
	//TODO review this part when Jira tasks: TIMOB-8585 will be implemented
	if (Titanium.Platform.name === 'blackberry') {
		alert('Titanium.Media module is not implemented for BlackBerry yet');
		return;
	}
	var win = Titanium.UI.createWindow({
		backgroundColor:'#336699'
	});
	// initialize to all modes
	win.orientationModes = [
		Titanium.UI.PORTRAIT,
		Titanium.UI.LANDSCAPE_LEFT,
		Titanium.UI.LANDSCAPE_RIGHT
	];
	var b1 = Titanium.UI.createButton({
		title:'Vibrate',
		height:40,
		width:300,
		top:10
	});
	
	win.add(b1);
	
	b1.addEventListener('click', function()
	{
		Titanium.Media.vibrate();	
	});
	return win;
};

module.exports = vibrate;