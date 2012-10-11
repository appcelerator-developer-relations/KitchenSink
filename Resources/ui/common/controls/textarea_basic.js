function textarea_basic(_args) {
	var win = Ti.UI.createWindow({
		title:_args.title
	});
	
	var l = Titanium.UI.createLabel({
		text:'Text area tests.',
		font:{fontSize:14},
		left:10,
		top:10,
		width:300,
		height:'auto'
	});
	win.add(l);
	
	
	var ta1 = Titanium.UI.createTextArea({
		editable: true,
		value:'I am a textarea',
		height:70,
		width:300,
		top:60,
		font:{fontSize:20,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false
	});
	
	if (Ti.Platform.osname !== 'mobileweb') {
		ta1.appearance = Titanium.UI.KEYBOARD_APPEARANCE_ALERT;
		ta1.keyboardType = Titanium.UI.KEYBOARD_NUMBERS_PUNCTUATION;
		ta1.returnKeyType = Titanium.UI.RETURNKEY_EMERGENCY_CALL;
	}
	
	win.add(ta1);
	
	
	
	
	//
	// Focus text area
	//
	var b1 = Titanium.UI.createButton({
		title:'Focus',
		height:40,
		width:200,
		top:140
	});
	win.add(b1);
	b1.addEventListener('click', function()
	{
		ta1.focus();
	});
	
	//
	// Blur text area
	//
	var b2 = Titanium.UI.createButton({
		title:'Blur',
		height:40,
		width:200,
		top:190
	});
	win.add(b2);
	b2.addEventListener('click', function()
	{
		ta1.blur();
	});
	
	
	//
	// Hide/Shw text area
	//
	var b3 = Titanium.UI.createButton({
		title:'Hide/Show',
		height:40,
		width:200,
		top:240
	});
	win.add(b3);
	var visible=true;
	b3.addEventListener('click', function()
	{
		if (visible)
		{
			ta1.hide();
			visible=false;
		}
		else
		{
			ta1.show();
			visible=true;
		}
	});
	
	//
	// Toggle Text area properties
	//
	var b4 = Titanium.UI.createButton({
		title:'Toggle Properties',
		top:290,
		height:40,
		width:200
	});
	win.add(b4);
	var changed=false;
	b4.addEventListener('click', function()
	{
		if (!changed)
		{
			ta1.backgroundColor = '#336699';
			ta1.color = '#fff';
			ta1.textAlign = 'center';
			ta1.suppressReturn = true;
			ta1.autocapitalization = Titanium.UI.TEXT_AUTOCAPITALIZATION_ALL;
			changed=true;
		}
		else
		{
			ta1.backgroundColor = '#fff';
			ta1.color = '#888';
			ta1.textAlign = 'left';
			ta1.autocapitalization = Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE;
			changed=false;
			ta1.suppressReturn = false;
		}
	});
	
	var b5 = Titanium.UI.createButton({
		title:'Toggle "editable"',
		top:340,
		height:40,
		width:200
	});
	win.add(b5);
	b5.addEventListener('click',function(){
		ta1.editable = !ta1.editable;
	});
	//
	// Text area events
	//
	ta1.addEventListener('change',function(e)
	{
		l.text = 'change fired, value = ' + e.value + '\nfield value = ' + ta1.value;
	});
	
	ta1.addEventListener('blur',function(e)
	{
		l.text = 'blur fired, value = ' + e.value;
	});
	ta1.addEventListener('focus',function(e)
	{
		l.text = 'focus fired, value = ' + e.value;
	});
	ta1.addEventListener('return',function(e)
	{
		l.text = 'return fired, value = ' + e.value;
	});
	
	return win;
}

module.exports = textarea_basic;
	
	
