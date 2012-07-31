function shake() {
	var win = Titanium.UI.createWindow();
	
	var l = Titanium.UI.createLabel({
		text:'Shake your phone',
		top:10,
		color:'#999',
		height:'auto',
		width:'auto'
	});
	
	win.add(l);
	
	Ti.Gesture.addEventListener('shake',function(e)
	{
		Titanium.UI.createAlertDialog({title:'Shake',message:'it worked!'}).show();
	});
	return win;
};

module.exports = shake;