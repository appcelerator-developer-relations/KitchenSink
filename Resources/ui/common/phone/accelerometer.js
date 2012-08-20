function accelerometer() {
	//TODO review this part when Jira tasks: TIMOB-8571 will be implemented
	if (Titanium.Platform.name === 'blackberry') {
		alert('Titanium.Accelerometer module is not implemented for BlackBerry yet');
		return;
	}
	var win = Titanium.UI.createWindow();
	var accelerometerAdded = false;
	
	var x = Titanium.UI.createLabel({
		text:'x:',
		top:10,
		left:10,
		font:{fontSize:14},
		color:'#555',
		width:300,
		height:'auto'
	});
	win.add(x);
	
	var y = Titanium.UI.createLabel({
		text:'y:',
		top:30,
		left:10,
		font:{fontSize:14},
		color:'#555',
		width:300,
		height:'auto'
	});
	win.add(y);
	
	var z = Titanium.UI.createLabel({
		text:'z:',
		top:50,
		left:10,
		font:{fontSize:14},
		color:'#555',
		width:300,
		height:'auto'
	});
	win.add(z);
	
	var ts = Titanium.UI.createLabel({
		text:'timestamp:',
		top:70,
		left:10,
		font:{fontSize:14},
		color:'#555',
		width:300,
		height:'auto'
	});
	win.add(ts);
	
	var accelerometerCallback = function(e) {
		ts.text = e.timestamp;
		x.text = 'x: ' + e.x;
		y.text = 'y:' + e.y;
		z.text = 'z:' + e.z;
	};
	
	Ti.Accelerometer.addEventListener('update', accelerometerCallback);
	accelerometerAdded = true;
	
	if (Titanium.Platform.name == 'iPhone OS' && Titanium.Platform.model == 'Simulator')
	{
		var notice = Titanium.UI.createLabel({
			bottom:50,
			font:{fontSize:18},
			color:'#900',
			width:'auto',
			text:'Note: Accelerometer does not work in simulator',
			textAlign:'center'
		});
		win.add(notice);
	}
	
	if (Titanium.Platform.name === 'android')
	{
		win.addEventListener('open', function(e) {
			win.activity.addEventListener('pause', function(e) {
				if (accelerometerAdded) {
					Ti.API.info("removing accelerometer callback on pause");
					Ti.Accelerometer.removeEventListener('update', accelerometerCallback);
				}
			});
			win.activity.addEventListener('resume', function(e) {
				if (accelerometerAdded) {
					Ti.API.info("adding accelerometer callback on resume");
					Ti.Accelerometer.addEventListener('update', accelerometerCallback);
				}
			});
		});
	}
	return win;
};

module.exports = accelerometer;