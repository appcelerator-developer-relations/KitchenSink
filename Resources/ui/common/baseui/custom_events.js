function custom_events() {
	var isBlackberry = Titanium.Platform.name === 'blackberry';
	var scaleX = 1;
	var scaleY = 1;
	if (isBlackberry) {
		scaleX += 1;
		scaleY += 2;
	}
	var win = Titanium.UI.createWindow();
	
	//
	// FIRE EVENT WITH DATA ARRAY
	//
	var b1 = Titanium.UI.createButton({
		title:'Fire Event 1',
		width:200 * scaleX,
		height:40 * scaleY,
		top:10 * scaleY
	});
	
	b1.addEventListener('click', function()
	{
		Titanium.App.fireEvent('event_one',{data:['1','2','3']});
	});
	
	win.add(b1);
	
	//
	// FIRE EVENT WITH OBJECT DATA
	//
	var b2 = Titanium.UI.createButton({
		title:'Fire Event 2',
		width:200 * scaleX,
		height:40 * scaleY,
		top:60 * scaleY
	});
	
	b2.addEventListener('click', function()
	{
		Titanium.App.fireEvent('event_two',{name:'Foo', city:'Palo Alto'});
	});
	
	win.add(b2);
	
	
	//
	// FIRE EVENT WITH OBJECT DATA
	//
	var b3 = Titanium.UI.createButton({
		title:'Fire Event 3',
		width:200 * scaleX,
		height:40 * scaleY,
		top:110 * scaleY
	});
	
	b3.addEventListener('click', function()
	{
		b2.fireEvent('click');
	});
	
	win.add(b3);

	return win;
};

module.exports = custom_events;