function picker_date4() {
	var isBlackberry = Titanium.Platform.name === 'blackberry';
	var scaleX = 1;
	var scaleY = 1;
	if (isBlackberry) {
		scaleX += 1;
		scaleY += 2;
	}
	var win = Ti.UI.createWindow();
	win.backgroundColor = 'black';
	
	var duration = 60000 * 3; // expressed in milliseconds
	var original_duration = duration;
			
	var picker = Ti.UI.createPicker({
		type:Ti.UI.PICKER_TYPE_COUNT_DOWN_TIMER,
		countDownDuration:duration
	});
	
	// turn on the selection indicator (off by default)
	picker.selectionIndicator = true;
	
	win.add(picker);
	
	var label = Ti.UI.createLabel({
		text:'Press Start',
		top:6 * scaleY,
		width:'auto',
		height:'auto',
		textAlign:'center',
		color:'white'
	});
	win.add(label);
	
	var button = Ti.UI.createButton({
		title:'Start',
		top:34 * scaleY,
		width:120 * scaleX,
		height:30 * scaleY
	});
	win.add(button);
	
	var timer;
	
	function tick()
	{
		duration-=1000;
		picker.countDownDuration = duration;
		label.text = "Remaining: "+(duration/1000)+" seconds";
		if (duration<=0)
		{
			clearInterval(timer);
			button.title = 'Start';
			label.text = "Done!";
			duration = original_duration;
		}
	}
	
	
	button.addEventListener('click',function(e)
	{
		if (button.title == 'Start')
		{
			button.title = 'Stop';
			timer = setInterval(tick,1000);
		}
		else
		{
			button.title = 'Start';
			clearInterval(timer);
			timer = null;
			duration = original_duration;
			label.text = "Stopped";
		}
	});
	
	picker.addEventListener('change',function(e)
	{
		label.text = e.value.toLocaleString();
	});
	if (isBlackberry) {
		label.left = 10 * scaleX;
		label.width = 300 * scaleX;
		label.height = 40 * scaleY;
		button.height = 40 * scaleY;
	}

	return win;
}

module.exports = picker_date4;