function picker_date2() {
	var isBlackberry = Titanium.Platform.name === 'blackberry';
	var scaleX = 1;
	var scaleY = 1;
	if (isBlackberry) {
		scaleX += 1;
		scaleY += 2;
	}
	var win = Ti.UI.createWindow();
	win.backgroundColor = 'black';
	
	var value = new Date();
	value.setMinutes(10);
	value.setHours(13);
	value.setSeconds(48);
			
	var picker = Ti.UI.createPicker({
		type:Ti.UI.PICKER_TYPE_TIME,
		value:value
	});
	
	// turn on the selection indicator (off by default)
	picker.selectionIndicator = true;
	
	win.add(picker);
	
	var label = Ti.UI.createLabel({
		text:'Choose a time',
		top:6 * scaleY,
		width:'auto',
		height:'auto',
		textAlign:'center',
		color:'white'
	});
	win.add(label);
	
	picker.addEventListener('change',function(e)
	{
		label.text = e.value.toLocaleString();
	});
	if (isBlackberry) {
		label.left = 10 * scaleX;
		label.width = 200 * scaleX;
		label.height = 40 * scaleY;
	}

	return win;
}

module.exports = picker_date2;