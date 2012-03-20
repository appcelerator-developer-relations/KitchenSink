function set_interval() {
	var win = Titanium.UI.createWindow();
	
	var label = Ti.UI.createLabel({
		text:'Running...',
		font:{fontFamily:'Helvetica Neue',fontSize:24,fontWeight:'bold'},
		color:'#999',
		textAlign:'center',
		width:'auto',
		height:'auto'
	});
	win.add(label);
	var count = 0;
	setInterval(function()
	{
		count++;
		label.text = "Interval fired " + count;
	},10);

	return win;
};

module.exports = set_interval;