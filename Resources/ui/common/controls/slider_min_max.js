function slider_min_max() {
	var isBlackberry = Titanium.Platform.name === 'blackberry';
	var scaleX = 1;
	var scaleY = 1;
	if (isBlackberry) {
		scaleX += 1;
		scaleY += 2;
	}
	var win = Ti.UI.createWindow();
	
	var minLabel = Ti.UI.createLabel({
		bottom: 10 * scaleY, width:100 * scaleX, left: 10 * scaleX,
		text : 'Min: 0'
	});
	win.add(minLabel);
	
	var maxLabel = Ti.UI.createLabel({
		bottom: 10 * scaleY, width:100 * scaleX, right: 10 * scaleX,
		text : 'Max: 100'
	});
	win.add(maxLabel);
	
	var posLabel = Ti.UI.createLabel({
		bottom: 10 * scaleY, width:100 * scaleX, left: 120 * scaleX,
		text : 'Pos: 0'
	});
	win.add(posLabel);
	
	var slider = Ti.UI.createSlider({
	    value: 0,
	    min: 0,
	    max: 100,
	    left:10 * scaleX,
	    right:10 * scaleX
	});
	slider.addEventListener('change', function(e) {
		minLabel.text = "Min: " + slider.min;
		posLabel.text = "Pos: " + slider.value;
		maxLabel.text = "Max: " + slider.max;
	});
	win.add(slider);
	
	var btn1 = Ti.UI.createButton({
		'title' : '0/0/100',
		left : 10 * scaleX, top: 10 * scaleY, height:30 * scaleY, width:80 * scaleX
	});
	btn1.addEventListener('click', function() {
		slider.min = 0;
		slider.max = 100;
		slider.value = 0;
	});
	win.add(btn1);
	
	var btn2 = Ti.UI.createButton({
		'title' : '0/5/10',
		left : 10 * scaleX, top: 40 * scaleY, height:30 * scaleY, width:80 * scaleX
	});
	btn2.addEventListener('click', function() {
		slider.min = 0;
		slider.max = 10;
		slider.value = 5;
	});
	win.add(btn2);
	
	var btn3 = Ti.UI.createButton({
		'title' : '-5/75/105',
		left : 10 * scaleX, top: 70 * scaleY, height:30 * scaleY, width:80 * scaleX
	});
	btn3.addEventListener('click', function() {
		slider.min = -5;
		slider.max = 105;
		slider.value = 75;
	});
	win.add(btn3);
	if (isBlackberry) {
		minLabel.top = 250 * scaleY;
		maxLabel.top = 250 * scaleY;
		maxLabel.left = 300 * scaleX
		posLabel.top = 250 * scaleY;
		posLabel.width = 200 * scaleX;
		
		btn1.top = 30 * scaleY;
		btn1.width = 200 * scaleX;
		btn1.height = 40 * scaleY;
		
		btn2.top = 70 * scaleY;
		btn2.width = 200 * scaleX;
		btn2.height = 40 * scaleY;
		
		btn3.top = 110 * scaleY;
		btn3.width = 200 * scaleX;
		btn3.height = 40 * scaleY;
	}
	
	return win;
}

module.exports = slider_min_max;